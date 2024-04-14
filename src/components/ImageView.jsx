import React, { useState } from "react";
import "aframe"; // Import A-Frame library
import { Entity, Scene } from "aframe-react"; // Import A-Frame React bindings
import img1 from "../assets/env.jpg";
import img2 from "../assets/env2.jpg"; // Another example image
import img3 from "../assets/env3.jpg"; // Another example image

const ImageView = () => {
  // State to track the current background image
  const [backgroundImage, setBackgroundImage] = useState(img1);
  // Function to handle changing the background image
  const handleChangeBackground = (newImage) => {
    setBackgroundImage(newImage);
  };

  return (
    <Scene>
      <a-assets>
        {/* Load multiple images into a-assets */}
        <img src={img1} alt="Image 1" id="image1" />
        <img src={img2} alt="Image 2" id="image2" />
      </a-assets>

      {/* Set the background image dynamically */}
      <a-sky src={backgroundImage}></a-sky>

      {/* Example buttons to change the background */}
      <div style={{ position: "absolute", top: "20px", left: "20px", zIndex: "999", display:"flex", gap:"10px" }}>
        <button onClick={() => handleChangeBackground(img1)}>Forest View</button>
        <button onClick={() => handleChangeBackground(img2)}>Country Side</button>
        <button onClick={() => handleChangeBackground(img3)}>Port End</button>
      </div>
    </Scene>
  );
};

export default ImageView;
