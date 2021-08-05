import React from "react";
import "./Slider.css";
import { Carousel } from "react-bootstrap";

import image1 from "../../../assets/slidingimages/1.jpg";
import image2 from "../../../assets/slidingimages/2.jpg";
import image3 from "../../../assets/slidingimages/3.jpg";
import image4 from "../../../assets/slidingimages/4.jpg";
import image5 from "../../../assets/slidingimages/5.jpg";

const Slider = () => {
  return (
    <div className="slider">
      <Carousel fade={true} pause={true}>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={image2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={image3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={image4} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={image5} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <video
            className="slidevideo d-block w-100"
            id="slidevideo"
            autoPlay
            muted
            loop
          >
            <source src="video1.mp4" type="video/mp4" />
          </video>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <video
            className="slidevideo d-block w-100"
            id="slidevideo"
            autoPlay
            muted
            loop
          >
            <source src="video2.mp4" type="video/mp4" />
          </video>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
