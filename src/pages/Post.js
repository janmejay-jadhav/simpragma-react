import { Box, Skeleton, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Post() {
  const [userData, setUserData] = useState(null);
  const { state } = useLocation();

  console.log(userData, state, "data");

  useEffect(() => {
    if (state) {
      getUserData();
    }
  }, []);

  const getUserData = async () => {
    let { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${state.userId}`
    );
    console.log(data, "innerData");
    setUserData(data);
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ height: "90vh" }}
    >
      <Box
        height={"50%"}
        width={"50%"}
        sx={{
          backgroundColor: "#ffff",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px gray",
        }}
      >
        {userData === null ? (
          <>
            <Box
              display={"flex"}
              flexWrap={"wrap"}
              sx={{ padding: "10px 10px" }}
            >
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </Box>
            <hr />
            <Box textAlign={"center"} marginTop={8}>
              <skelton variant="h5" marginBottom={3} />
              <skelton />
            </Box>
          </>
        ) : (
          <>
            <Box
              display={"flex"}
              flexWrap={"wrap"}
              sx={{ padding: "10px 10px" }}
            >
              <Typography sx={{ flex: "1 1 40%" }}>
                Name: {userData.name}
              </Typography>
              <Typography sx={{ flex: "1 1 40%" }}>
                Contact: {userData.phone}
              </Typography>
              <Typography sx={{ flex: "1 1 40%" }}>
                Email: {userData.email}
              </Typography>
            </Box>
            <hr />
            <Box textAlign={"center"} marginTop={8}>
              <Typography variant="h5" marginBottom={3}>
                {state.title}
              </Typography>
              <Typography>{state.body}</Typography>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default Post;
