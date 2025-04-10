import React from "react";
import { TextField } from "@mui/material";

const SearchInput = ({ value, onChange, theme }) => {
  return (
    <TextField
      id='search-input'
      variant='outlined'
      label='Поиск'
      fullWidth
      margin='normal'
      value={value}
      onChange={onChange}
      slotProps={{
        InputLabel: {
          sx: { color: theme.palette.text.primary },
        },
        outlinedInput: {
          sx: {
            "& fieldset": {
              borderColor: theme.palette.text.primary,
            },
            "&:hover fieldset": {
              borderColor: theme.palette.primary.main,
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.primary.main,
            },
          },
        },
      }}
    />
  );
};

export default SearchInput;
