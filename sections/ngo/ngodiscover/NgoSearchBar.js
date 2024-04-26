import { useState } from 'react';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { paramCase } from 'change-case';
import { useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Button,
  inputAdornmentClasses,
  Autocomplete,
  InputAdornment,
  Link,
  Popper,
  Typography,
  TextField,
} from '@mui/material';
import { green, grey } from '@mui/material/colors';
// hooks
import useIsMountedRef from '../../../hooks/useIsMountedRef';
// utils
import axios from '../../../utils/axios';
// routes
import { PATH_PAGE } from '../../../routes/paths';
// components
import Iconify from '../../../components/Iconify';
import Image from '../../../components/Image';
import InputStyle from '../../../components/InputStyle';
import SearchNotFound from '../../../components/SearchNotFound';

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  background: 'white',
  borderRadius: theme.shape.borderRadius,
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  width: '90%',
  height: 60,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '50%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    fontSize: 20,
  },
}));

const PopperStyle = styled((props) => <Popper placement="bottom-start" {...props} />)({
  width: {
    sm: '280px !important',
    md: '400% !important',
    lg: '500% !important',
  },
});

function SearchBar({ allNgo, searchTerm, handleSearch, searchRef }) {
  const navigate = useNavigate();

  const isMountedRef = useIsMountedRef();

  const [searchQuery, setSearchQuery] = useState('');

  const [searchResults, setSearchResults] = useState([]);

  const handleChangeSearch = async (value) => {
    try {
      setSearchQuery(value);
      if (value) {
        if (isMountedRef.current) {
          setSearchResults(allNgo);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (id) => {
    navigate(PATH_PAGE.ngoView(id));
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      const { _id, name } = searchResults.find((element) => element.name === searchQuery);
      handleClick(_id, name);
    }
  };
  return (
    <Autocomplete
      size="large"
      autoHighlight
      popupIcon={null}
      sx={{ borderRadius: 1, background: 'white', width: '100%', overflow: 'hidden' }}
      PopperComponent={PopperStyle}
      options={searchResults}
      onInputChange={(event, value) => handleChangeSearch(value)}
      getOptionLabel={(item) => item.name}
      noOptionsText={<SearchNotFound searchQuery={searchQuery} />}
      isOptionEqualToValue={(option, value) => option._id === value._id}
      renderInput={(params) => (
        <TextField
          {...params}
          stretchStart={'100%'}
          placeholder="Search for Impaac foundation"
          onKeyUp={handleKeyUp}
          sx={{ borderRadius: 1 }}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon={'eva:search-fill'} sx={{ ml: 1, width: 25, height: 25 }} />
              </InputAdornment>
            ),
          }}
        />
      )}
      renderOption={(props, product, { inputValue }) => {
        console.log(product);
        const { _id, name, image, ngo_id } = product;
        const matches = match(name, inputValue);
        const parts = parse(name, matches);

        return (
          <li {...props}>
            <Image alt={name} src={image} sx={{ width: 48, height: 48, borderRadius: 1, flexShrink: 0, mr: 1.5 }} />
            <Link underline="none" onClick={() => handleClick(ngo_id)}>
              {parts.map((part, index) => (
                <Typography
                  key={index}
                  component="span"
                  variant="subtitle2"
                  color={part.highlight ? 'primary' : 'textPrimary'}
                >
                  {part.text}
                </Typography>
              ))}
            </Link>
          </li>
        );
      }}
    />
  );
}

export default SearchBar;
