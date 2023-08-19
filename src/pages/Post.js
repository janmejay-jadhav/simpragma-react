import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Post() {
  const [userData, setUserData] = useState("");
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      getUserData();
    }
  }, []);

  const getUserData = () => {
    let data = axios.get("https://jsonplaceholder.typicode.com/users");
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ height: "90vh" }}
    >
      <Box
        height={"200px"}
        width={"500px"}
        sx={{ backgroundColor: "#ffff", borderRadius: "10px" }}
      >
        <Typography></Typography>
      </Box>
    </Box>
  );
}

export default Post;
