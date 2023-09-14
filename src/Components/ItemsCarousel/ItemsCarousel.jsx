import React from "react";
import { Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./ItemsCarousel.css";

function ItemsCarousel({ items, link }) {
  const { imageDivPath, itemsList, order, capText } = items;
  return (
    <div className="items-carousel">
      <div className="image-div" style={{ order: order[0] }}>
        <img src={imageDivPath} alt="item-img" />
      </div>
      <div className="image-carousel" style={{ order: order[1] }}>
        <div className="carousel-list">
          <Carousel data-bs-theme="dark" controls={false} interval={5000}>
            {itemsList.map((item) => (
              <Carousel.Item key={item.itemId}>
                <img
                  className="d-block w-100"
                  src={item.imgPath}
                  alt={item.itemName}
                />
                <Carousel.Caption>
                  <h5>{item.itemName}</h5>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="carousel-title">
          <div className="cap-text">{capText}</div>
          <div className="cap-links">
            <NavLink to={`/catalog/new`}>NEW IN</NavLink>
            <NavLink to={`/catalog/${link}/bags`}>BAGS</NavLink>
            <NavLink to={`/catalog/${link}/shoes`}>SHOES</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemsCarousel;
