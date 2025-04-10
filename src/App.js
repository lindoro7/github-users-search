import React from "react";
import {
  createTheme,
  ThemeProvider,
  Typography,
  TextField,
  Box,
  Pagination,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import users from "./users";

const App = () => {
  const [page, setPage] = React.useState(1);
  const [darkMode, setDarkMode] = React.useState(false);

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
              <Brightness4 sx={{ color: theme.palette.text.primary }} />
            )}
          </IconButton>
        </div>

        <TextField
          id='search-input'
          variant='outlined'
          label='Поиск'
          fullWidth
          margin='normal'
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

        <Box
          sx={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            flexGrow: "1",
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2,1fr)",
              sm: "repeat(4,1fr)",
              md: "repeat(7,1fr)",
            },
            gridTemplateRows: "repeat(3, 1fr)",
            gap: "10px",
            minHeight: "300px",
            overflowY: "auto",
          }}
        >
          {users.map((user) => (
            <Card
              key={user.login}
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexGrow: "1",
                }}
              >
                <CardMedia
                  component='img'
                  sx={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  image={user.avatar_url}
                  alt={user.login}
                />
                <Typography
                  variant='body2'
                  component='div'
                  sx={{ marginTop: "1" }}
                >
                  {user.login}
                </Typography>
              </CardContent>
              <Button
                size='small'
                variant='outlined'
                color='primary'
                href={user.html_url}
                target='_blank'
                sx={{
                  marginTop: "auto",
                  marginBottom: "10px",
                  alignSelf: "center",
                }}
              >
                Профиль
              </Button>
            </Card>
          ))}
        </Box>

        <Box
          sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
        >
          <Pagination
            count={Math.ceil(users.length / (7 * 3))}
            page={page}
            onChange={handleChange}
            color='primary'
          />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default App;
