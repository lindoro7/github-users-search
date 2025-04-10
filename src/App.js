import React from "react";

import { createTheme, ThemeProvider, Typography } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant='h1' component='h2'>
          Привет, мир!
        </Typography>
      </div>
    </ThemeProvider>
  );
}
export default App;
