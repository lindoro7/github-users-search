import React from "react";
import { Typography, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const Header = ({ darkMode, toggleTheme }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        variant='h4'
        component='h2'
        align='center'
        gutterBottom
        color='text.primary'
      >
        Поиск пользователей GITHUB
      </Typography>
      <IconButton onClick={toggleTheme} color='inherit'>
        {darkMode ? (
          <Brightness7 sx={{ color: "yellow" }} />
        ) : (
          <Brightness4 sx={{ color: "text.primary" }} />
        )}
      </IconButton>
    </div>
  );
};

export default Header;
