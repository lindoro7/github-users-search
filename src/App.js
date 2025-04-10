import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import UserList from "./components/UserList";
import PaginationComponent from "./components/PaginationComponent";
import users from "./users";

const App = () => {
  const [page, setPage] = React.useState(1);
  const [darkMode, setDarkMode] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#dc004e",
      },
    },
  });

  const handleChange = (event, value) => {
    setPage(value);
  };

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          padding: "20px",
          boxSizing: "border-box",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />

        <SearchInput
          value={searchValue}
          onChange={handleSearchChange}
          theme={theme}
        />

        <UserList users={users} />

        <PaginationComponent
          count={Math.ceil(users.length / (7 * 3))}
          page={page}
          onChange={handleChange}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
