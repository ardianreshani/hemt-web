import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gallerIMG } from "../data/Images";
import { wrap } from "popmotion";
import arrowLeft from "../images/arrow.png";
import arrowRight from "../images/arrowRight.png";
const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, gallerIMG.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <>
      <div className="right-hero-images">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={gallerIMG[imageIndex]}
            alt="gallerIMG"
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 300 },
              opacity: { duration: 1 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
          />
        </AnimatePresence>
      </div>
      <div className="arrows">
        <div className="left">
          <motion.button
            whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.8 }}
            onClick={() => paginate(1)}
          >
            <img src={arrowLeft} alt="arrowLeft" />
          </motion.button>
        </div>
        <div className="right">
          <motion.button
            whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.8 }}
            onClick={() => paginate(-1)}
          >
            <img src={arrowRight} alt="arrowRight" />
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Slider;
