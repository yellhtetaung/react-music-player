import React from "react";
import VideoItem from "./VideoItems";

const VideoList = ({ videos, onSelectVideo }) => {
  const renderItems = () => {
    return videos.map((item, index) => {
      return (
        <VideoItem video={item} key={index} onSelectVideo={onSelectVideo} />
      );
    });
  };

  return <div>{renderItems()}</div>;
};

export default VideoList;
