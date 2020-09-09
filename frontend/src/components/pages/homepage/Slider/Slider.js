import React, { useState, useEffect } from "react";
import MakeStyles from "@material-ui/styles/makeStyles";
import "./slider.css";
import deneme from "../../../../assets/slide1.jpeg";
import deneme2 from "../../../../assets/slide2.jpeg";
import deneme4 from "../../../../assets/slide3.jpeg";

const Carousel = () => {
  const [myState, setmyState] = useState(false);
  const [opacity, setopacity] = useState(0);
  const [x, setX] = useState(0);
  const useStyles = MakeStyles({
    images: {
      width: myState ? "130%" : "100%",
      height: myState ? "130%" : "100%",
      strokeOpacity: "initial",
      transition: "35s",
    },
  });

  let classes = useStyles();
  let sliderArr = [
    <img src={deneme} className={classes.images} alt="slide1" />,
    <img src={deneme2} className={classes.images} alt="slide2" />,
    <img src={deneme4} className={classes.images} alt="slide4" />,
  ];

  // const goLeft = () => {
  //   x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  // };
  // const goRight = () => {
  //   x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  // };
  useEffect(() => {
    setopacity(1);
    setTimeout(() => {
      x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
      setmyState(!myState);
    }, 4000);
    return () => {
      setopacity(0);
    };
  }, [x]);

  return (
    <div className="slider" data-aos="fade-in" data-aos-duration="1500">
      {sliderArr.map((item, index) => (
        <div
          key={index}
          className="slide"
          style={{ transform: `translateX(${x}%)` }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
export default Carousel;
