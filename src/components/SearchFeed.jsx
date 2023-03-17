import React from "react";
import { Videos } from "./";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  // console.log("data", videos);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "82.5vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        mb={2}
        sx={{ color: "white" }}
      >
        Search Results for:
        <span style={{ color: "#F31503" }}> {searchTerm}</span>videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
