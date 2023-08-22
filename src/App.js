import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Box, Typography } from "@mui/material";
const Post = lazy(() => import("./pages/Post"));
const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  const SuspenseFall = () => {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        height={"70vh"}
      >
        <Typography
          variant="h3"
        >
          Loading...
        </Typography>
      </Box>
    );
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<SuspenseFall />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
