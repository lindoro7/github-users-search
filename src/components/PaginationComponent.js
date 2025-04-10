import React from "react";
import { Pagination, Box } from "@mui/material";

const PaginationComponent = ({ count, page, onChange, users }) => {
  if (users.length === 0) return;
  return (
    <Box sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        color='primary'
      />
    </Box>
  );
};

export default PaginationComponent;
