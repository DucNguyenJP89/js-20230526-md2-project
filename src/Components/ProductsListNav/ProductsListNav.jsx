import React from "react";
import { useParams } from "react-router-dom";
import "./ProductsListNav.scss";

function ProductsListNav() {
  const param = useParams();
  const men = {
    desc: "The evolution of an aesthetic narrative. Delve into a collection of shared principles and concepts, which are at once modern yet timeless, for effortless essentials designed with every day in mind.",
    shoesImg: "https://www.pedroshoes.com/on/demandware.static/-/Library-Sites-Pedro/default/dwd5aa3782/images/plpbanners/pm/aug23/men-shoes.jpg",
    shoesLink: "./catalog/men/shoes",
    bagsImg: "https://www.pedroshoes.com/on/demandware.static/-/Library-Sites-Pedro/default/dwa13f95e0/images/plpbanners/pm/aug23/men-bags.jpg",
    bagsLink: "./catalog/men/bags",
    accessoriesImg: "https://www.pedroshoes.com/on/demandware.static/-/Library-Sites-Pedro/default/dw0722b854/images/plpbanners/pm/aug23/men-accessories.jpg",
    accessoriesLink: "./catalog/men/accessories", 
  };
  return (
    <div className="products-list-nav">
      {param.type === "new" ? (
        <div className="new-container">
          <img
            src="https://www.pedroshoes.com/on/demandware.static/-/Library-Sites-Pedro/default/dw956c645a/images/plpbanners/plp-slotbanner-desktop.jpg"
            alt="new products banner"
          />
          <div className="new-text">
            <h2>NEW ARRIVALS</h2>
          </div>
        </div>
      ) : (
        <div className="type-container">
          <h2>{param.type.toUpperCase()}'S VIEW ALL</h2>
          <p>{men.desc}</p>
        </div>
      )}
    </div>
  );
}

export default ProductsListNav;
