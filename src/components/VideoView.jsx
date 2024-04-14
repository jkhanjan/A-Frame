import React, { useState } from "react";
import "aframe"; // Import A-Frame library
import { Entity, Scene } from "aframe-react"; // Import A-Frame React bindings
import video1 from "../assets/video.mp4";
import video2 from "../assets/video2.mp4"; // Another example video

const VideoView = () => {
  // State to track the current video source
  const [videoSource, setVideoSource] = useState(video1);

  // Function to handle changing the video source
  const handleChangeVideo = (newVideo) => {
    setVideoSource(newVideo);
  };

  return (
    <Scene>
      <a-assets>
        {/* Load multiple videos into a-assets */}
        <video id="video1" src={video1} autoPlay loop></video>
        <video id="video2" src={video2} autoPlay loop></video>
      </a-assets>

      {/* Set the video source dynamically */}
      <a-entity>
        <a-videosphere radius="100" src={videoSource} position="0 1 -1" rotation="0 0 0"></a-videosphere>
      </a-entity>

      {/* Example buttons to change the video */}
      <div style={{ position: "absolute", top: "20px", left: "20px", zIndex: "999",display:"flex", gap:"10px" }}>
        <button onClick={() => handleChangeVideo(video1)}>UnderWater</button>
        <button onClick={() => handleChangeVideo(video2)}>Forest View</button>
      </div>
    </Scene>
  );
};

export default VideoView;
