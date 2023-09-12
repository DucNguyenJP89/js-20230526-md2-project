import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ItemCard.scss";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, editItemQuantity } from "../../redux/actions/cartActions";

function ItemCard({ item }) {
  const { id, imgPath, productName, price, colour } = item;
  const [showControls, setControls] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.carts);
  const handleCartItem = (e) => {
    e.stopPropagation();
    const item = cart.find((item) => item.product_id === id);
    if (item) {
      console.log("Item found");
      let itemQuantity = item.quantity;
      if (itemQuantity < 5) {
        itemQuantity += 1;
      } else {
        alert('You can only order 5 pieces for each item');
      }
      const newItem = {
        ...item,
        quantity: itemQuantity,
      };
      dispatch(editItemQuantity(newItem));
    } else {
      console.log("No item found");
      const newItem = {
        product_id: id,
        product_name: productName,
        product_img: imgPath[0],
        product_colour: colour,
        product_price: price,
        quantity: 1,
      };
      dispatch(addToCart(newItem));
    }
  };
  return (
    <div
      className="item-card"
      onMouseEnter={() => setControls(true)}
      onMouseLeave={() => setControls(false)}
    >
      <div className="img-carousel">
        <Carousel
          data-bs-theme="dark"
          controls={showControls}
          indicators={false}
          interval={null}
        >
          {imgPath.map((img, i) => (
            <Carousel.Item key={i} onClick={() => navigate(`/item/${id}`)}>
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
      <button onClick={handleCartItem}>ADD TO BAG</button>
    </div>
  );
}

export default ItemCard;
