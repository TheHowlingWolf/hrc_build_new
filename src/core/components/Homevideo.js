import React from "react";
import ReactPlayer from "react-player";
const Homevideo = ({ url }) => {
  return (
    <ReactPlayer
      playsInline
      autoplay
      width="100%"
      height="100vh"
      controls
      url={url}
    />
  );
};
export default Homevideo;
