import React from "react";
import AFrame from "aframe";
import { Entity, Scene } from "aframe-react"; // Import A-Frame React bindings
import image3 from "../assets/image3.jpg";
import image4 from "../assets/sky.jpg";

const CutomEnv = () => {
  return (
    <Scene>
      <a-sky src={image4} rotation="0 300 0"></a-sky>
      <a-plane
        
        material="color: #999999 "
        normal-texture-repeat="5000 5000"
        repeat=" 10 10"
        src={image3}    
        rotation="-90 0 0"
        scale="1000 1000 5"
      ></a-plane>
    </Scene>
  );
};

export default CutomEnv;
