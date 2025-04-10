import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const UserCard = ({ user }) => {
  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
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
        <Typography variant='body2' component='div' sx={{ marginTop: "1" }}>
          {user.login}
        </Typography>
      </CardContent>
      <Button
        size='small'
        variant='outlined'
        color='primary'
        href={user.html_url}
        target='_blank'
        sx={{ marginTop: "auto", marginBottom: "10px", alignSelf: "center" }}
      >
        Профиль
      </Button>
    </Card>
  );
};

export default UserCard;
