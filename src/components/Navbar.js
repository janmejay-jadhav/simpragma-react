import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          backgroundColor: "#ffff",
          padding: "20px 30px",
          boxShadow: "10px 0px 10px #000",
        }}
      >
        <Typography fontWeight={"bolder"} variant="subtitle1">
          Janmejay J.
        </Typography>
        <Button
          variant="outlined"
          sx={{ borderColor: "#000", color: "#000", fontWeight: "bolder" }}
          onClick={() => navigate("/")}
        >
          Home
        </Button>
      </Box>
    </>
  );
}

export default Navbar;
