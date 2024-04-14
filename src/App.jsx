// App.jsx

import React from "react";
import VideoView from "./components/VideoView";
import ImageView from "./components/ImageView";
import CutomEnv from "./components/CutomEnv";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/customenv" element={<CutomEnv />} />
      <Route path="/imageview" element={<ImageView />} />
      <Route path="/videoview" element={<VideoView />} />
    </Routes>
  );
};

export default App;
