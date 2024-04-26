"use client";
import { useState } from "react";
import { paramCase } from "change-case";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { useNavigate } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import {
  Link,
  Typography,
  Autocomplete,
  InputAdornment,
  Popper,
  TextField,
} from "@mui/material";
// hooks
import useIsMountedRef from "../../hooks/useIsMountedRef";
// utils
import axios from "../../utils/axios";
// components
import Image from "../../components/Image";
import Iconify from "../../components/Iconify";
import SearchNotFound from "../../components/SearchNotFound";

// ----------------------------------------------------------------------

const PopperStyle = styled((props) => (
  <Popper placement="bottom-start" {...props} />
))({});

const SearchStyle = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "stretchStart",
})(({ stretchStart, theme }) => ({
  "& .MuiOutlinedInput-root": {
    transition: theme.transitions.create(["box-shadow", "width"], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter,
    }),
    "&.Mui-focused": {
      boxShadow: theme.customShadows.z12,
    },
    // borderRadius: 40,
    height: "100%",
    fontSize: "16px",

    ...(stretchStart && {
      width: stretchStart,
      "&.Mui-focused": {
        boxShadow: theme.customShadows.z12,
        [theme.breakpoints.up("sm")]: {
          width: stretchStart + 60,
        },
      },
    }),
  },
  "& fieldset": {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`,
  },
}));
// ----------------------------------------------------------------------

export default function HomeSearch() {
  const navigate = useNavigate();

  const isMountedRef = useIsMountedRef();

  const [searchQuery, setSearchQuery] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const handleChangeSearch = async (value) => {
    try {
      setSearchQuery(value);
      if (value) {
        const response = await axios.get("/api/campaigns");
        if (isMountedRef.current) {
          setSearchResults(response.data);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (id, title) => {
    navigate(`/fundraisers/${paramCase(title)}/${id})`);
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      const { _id, title } = searchResults.find(
        (element) => element.title === searchQuery
      );
      handleClick(_id, title);
    }
  };

  return (
    <Autocomplete
      size="small"
      autoHighlight
      popupIcon={null}
      PopperComponent={PopperStyle}
      options={searchResults}
      onInputChange={(event, value) => handleChangeSearch(value)}
      getOptionLabel={(campaign) => campaign.title}
      noOptionsText={<SearchNotFound searchQuery={searchQuery} />}
      isOptionEqualToValue={(option, value) => option._id === value._id}
      renderInput={(params) => (
        <SearchStyle
          {...params}
          placeholder="Search by fundraiser name, title, location"
          type="search"
          fullWidth
          onKeyUp={handleKeyUp}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <Iconify
                  icon={"eva:search-fill"}
                  sx={{ ml: 1, width: 20, height: 20, color: "text.disabled" }}
                />
              </InputAdornment>
            ),
          }}
        />
      )}
      renderOption={(props, product, { inputValue }) => {
        const { _id, title, imageURL, organizer_name } = product;
        console.log(product);
        const matches =
          match(product?.organizer_name, inputValue) ||
          match(title, inputValue) ||
          match(product?.location, inputValue);

        console.log(matches);
        const parts =
          parse(product?.title, matches) ||
          parse(product?.organizer_name, matches) ||
          parse(product?.location, matches);

        console.log(parts);

        return (
          <li {...props}>
            <Image
              alt={title}
              src={imageURL}
              sx={{
                width: 48,
                height: 48,
                borderRadius: 1,
                flexShrink: 0,
                mr: 1.5,
              }}
            />
            <Link underline="none" onClick={() => handleClick(_id, title)}>
              {parts.map((part, index) => (
                <Typography
                  key={index}
                  component="span"
                  variant="subtitle2"
                  color={part.highlight ? "primary" : "textPrimary"}
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
