import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from 'react-router-dom'
import "./ItemCard.scss";

function ItemCard({ item }) {
  const { id, imgPath, productName, price } = item;
  const [showControls, setControls] = useState(false);
  return (
    <div
      className="item-card"
      onMouseEnter={() => setControls(true)}
      onMouseLeave={() => setControls(false)}
    >
      <Link to={`/item/${id}`}>
        <div className="img-carousel">
          <Carousel
            data-bs-theme="dark"
            controls={showControls}
            indicators={false}
            interval={null}
          >
            {imgPath.map((img, i) => (
              <Carousel.Item key={i}>
                <img className="d-block w-100" src={img} alt={productName} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="item-info">
          <div className="badge-new"></div>
          <div className="item-name">{productName}</div>
          <div className="item-price">S${price}</div>
        </div>
        <button>ADD TO BAG</button>
      </Link>
    </div>
  );
}

export default ItemCard;
