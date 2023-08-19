import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [allPosts, setAllPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    const { data, error } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (data) {
      setAllPosts(data);
    } else if (error) {
      console.log(error);
    }
  };
  return (
    <Box margin={"20px 30px"}>
      {allPosts.map((post, index) => {
        return (
          <Box
            key={post.id}
            sx={{
              backgroundColor: "#fff",
              margin: "5px 0px",
              padding: "15px 5px",
              borderRadius: "15px",
              "&:hover": {
                background: "#000",
                color: "#ffff",
              },
              transition: "all 0.3s ease-in-out",
              cursor: "pointer",
            }}
            onClick={() => navigate("/post", { state: { post } })}
          >
            <Typography>{post.title}</Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default HomePage;
