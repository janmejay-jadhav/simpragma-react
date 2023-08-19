import { Box, Typography } from "@mui/material";
import React from "react";

function Navbar() {
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
      </Box>
    </>
  );
}

export default Navbar;
