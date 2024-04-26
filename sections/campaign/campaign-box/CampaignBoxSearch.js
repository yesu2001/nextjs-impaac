import { useRouter } from "next/navigation";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import { paramCase } from "change-case";
import { useState } from "react";
// @mui
import {
  Autocomplete,
  InputAdornment,
  Link,
  Popper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// hooks
import useIsMountedRef from "@/hooks/useIsMountedRef";
// utils
import axios from "@/utils/axios";
// components
import Iconify from "@/components/Iconify";
import Image from "next/image";
import InputStyle from "@/components/InputStyle";
import SearchNotFound from "@/components/SearchNotFound";
import defaultImage from "/assets/no_image1 (2).jpg";

// ----------------------------------------------------------------------

const PopperStyle = styled((props) => (
  <Popper placement="bottom-start" {...props} />
))({
  width: {
    sm: "280px !important",
    md: "400% !important",
    lg: "500% !important",
  },
});

// ----------------------------------------------------------------------

export default function CampaignBoxSearch() {
  const route = useRouter();

  const isMountedRef = useIsMountedRef();

  const [searchQuery, setSearchQuery] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const handleChangeSearch = async (value) => {
    try {
      setSearchQuery(value);
      if (value) {
        const response = await axios.get("/api/campaigns");
        setSearchResults(response.data);

        if (isMountedRef?.current) {
          setSearchResults(response.data);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (id, title) => {
    route.push(`/fundraisers/${paramCase(title)}/${id}`);
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
      size="large"
      autoHighlight
      popupIcon={null}
      sx={{ width: "100%", overflow: "hidden" }}
      PopperComponent={PopperStyle}
      options={searchResults}
      onInputChange={(event, value) => handleChangeSearch(value)}
      getOptionLabel={(campaign) => campaign.title}
      noOptionsText={<SearchNotFound searchQuery={searchQuery} />}
      isOptionEqualToValue={(option, value) => option._id === value._id}
      renderInput={(params) => (
        <InputStyle
          {...params}
          stretchStart={"100%"}
          placeholder="Search campaign title"
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
        const { _id, title, imageURL } = product;
        const matches = match(title, inputValue);
        const parts = parse(title, matches);

        return (
          <li {...props}>
            <Image
              src={imageURL || defaultImage}
              alt={title}
              width={50}
              height={50}
              style={{
                borderRadius: "5px",
                marginRight: "10px",
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
