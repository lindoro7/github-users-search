import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import UserList from "./components/UserList";
import PaginationComponent from "./components/PaginationComponent";
import Loader from "./components/Loader";
import useDebounce from "./hooks/useDebounce";

const App = () => {
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [darkMode, setDarkMode] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [count, setCount] = React.useState(0);

  const debouncedSearchValue = useDebounce(searchValue, 300);
  const searchString = `https://api.github.com/search/users?per_page=21&page=${page}&q=${debouncedSearchValue}`;

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
    setPage(1);
  };

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (!debouncedSearchValue) {
          setUsers([]);
          return;
        }
        setLoading(true);
        const response = await fetch(searchString);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const { items, total_count } = await response.json();
        if (total_count > 1000) {
          setCount(1000);
        } else {
          setCount(total_count);
        }

        setUsers(items);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [searchString, debouncedSearchValue]);

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

        <Loader loading={loading} />

        <UserList users={users} error={error} />

        <PaginationComponent
          count={Math.ceil(count / (7 * 3))}
          page={page}
          onChange={handleChange}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
