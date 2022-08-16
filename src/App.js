import "./App.css";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import images from "./images";

function App() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []); // with empty array as 2nd parameter --> when renders this function is called

  console.log(images);
  return (
    <div className="App">
      <motion.h1 animate={{ x: 250 }}>Image Slider</motion.h1>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner-carousel"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {images.map((image) => {
            return (
              <motion.div className="item" key={image}>
                <img src={image} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
