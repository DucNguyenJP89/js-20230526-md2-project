import React from "react";
import { Carousel } from "react-bootstrap";
import "./HomeCarousel.css";

function HomeCarousel({ bannerCarousel, isControls }) {
  const carouselData = bannerCarousel;
  return (
    <div className="home-carousel">
      <Carousel data-bs-theme="dark" indicators={false} controls={isControls} interval={3000}>
        {carouselData.map((banner, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={banner.imgPath}
              alt={banner.altText}
            />
            <Carousel.Caption>
              <h5>{banner.captionTitle}</h5>
              <p>DISCOVER MORE</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
