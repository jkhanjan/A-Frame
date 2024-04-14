import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for routing

const Home = () => {
  return (
    <div>
      <a-scene>
        {/* Your A-Frame scene components */}
        <a-box
          position="-1 0.5 -3"
          animation="property: rotation; to:0 360 0; dur: 4000; easing: linear; loop: true"
          rotation="0 45 0"
          color="#4CC3D9"
        ></a-box>
        <a-sphere
          position="0 1.25 -5"
          radius="1.25"
          color="#EF2D5E"
          animation__bounce="property: position; from: 0 1.25 -5; to: 0 2 -5; dur: 2000; easing: easeInOutQuad; loop: true"
        ></a-sphere>
        <a-cylinder
          position="1 0.75 -3"
          radius="0.5"
          height="1.5"
          color="#FFC65D"
        ></a-cylinder>
        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="4"
          height="4"
          color="#7BC8A4"
        ></a-plane>
        <a-sky color="#ECECEC"></a-sky>

        {/* Button links */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            zIndex: "999",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <Link to="/imageview">
            <button>Different 3D scenes</button>
          </Link>
         
          <Link to="/videoview">
            <button>View a 3d video</button>
          </Link>
          <Link to="/customenv">
            <button>View a custom 3d Environment</button>
          </Link>
        </div>
      </a-scene>
    </div>
  );
};

export default Home;
