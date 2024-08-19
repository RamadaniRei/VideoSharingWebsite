import React from "react";
import Grid from "@mui/material/Grid";
import VideoItem from "./VideoItem.jsx";

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video) => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
