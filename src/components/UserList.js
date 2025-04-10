import React from "react";
import { Box } from "@mui/material";
import UserCard from "./UserCard";

const UserList = ({ users }) => {
  return (
    <Box
      sx={{
        marginTop: "20px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        flexGrow: "1",
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2, 1fr)",
          sm: "repeat(4, 1fr)",
          md: "repeat(7, 1fr)",
        },
        gridTemplateRows: "repeat(3, 1fr)",
        gap: "10px",
        minHeight: "300px",
        overflowY: "auto",
        backgroundColor: "#31aaeb",
      }}
    >
      {users.map((user) => (
        <UserCard key={user.login} user={user} />
      ))}
    </Box>
  );
};

export default UserList;
