import styles from "../styles/Slider.module.css";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "../data";
import React, { useState } from "react";

//onClick={() =>handClick("right")}

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.arrowLef} onClick={() => handClick("left")}>
        <ArrowLeftOutlinedIcon />
      </div>

      <div
        className={styles.wrapper}
        slideIndex={slideIndex}
        style={{ transform: `translateX( ${slideIndex * -100}vw)` }}
      >
        {sliderItems.map((item) => (
          <div
            className={styles.slide}
            style={{ backgroundColor: item.bg }}
            key={item.id}
          >
            <div className={styles.imgContainer}>
              <img src={item.img} alt="img1" />
            </div>
            <div className={styles.infoContainer}>
              <h1 className={styles.title}> {item.title}</h1>
              <p className={styles.desc}> {item.desc} </p>
              <button>SHOW NOW</button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.arrowRig} onClick={() => handClick("right")}>
        <ArrowRightOutlinedIcon />
      </div>
    </div>
  );
};

export default Slider;
