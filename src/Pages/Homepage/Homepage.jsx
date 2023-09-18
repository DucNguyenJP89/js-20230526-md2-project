import React, { useEffect } from 'react'
import HomeCarousel from '../../Components/HomeCarousel/HomeCarousel'
import ItemsCarousel from '../../Components/ItemsCarousel/ItemsCarousel';
import "./Homepage.css";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProducts } from '../../redux/actions/productsActions';
import { setOrders } from '../../redux/actions/ordersActions';

function Homepage() {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:8080/products").catch((e) => console.log(e));
    dispatch(setProducts(response.data));
  };
  const fetchOrders = async () => {
    const response = await axios.get("http://localhost:8080/orders").catch((e) => console.log(e));
    dispatch(setOrders(response.data));
  };
  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, [])
  const featureBanner = [{
    imgPath: "https://www.pedroshoes.com/on/demandware.static/-/Library-Sites-Pedro/default/dwd08b7d0c/images/homepage/2023/21aug23/wk34-homepage-a1.jpg",
    altText: "Feature Banner",
    captionTitle: "THE LIVING ART",
  },];
  const bannerCarousel = [
    {
      imgPath: "https://www.pedroshoes.com/on/demandware.static/-/Library-Sites-Pedro/default/dw744fc6cc/images/homepage/2023/21aug23/wk34-homepage-f1.jpg",
      altText: "First slide",
      captionTitle: "THE MONO PRINT",
    },
    {
      imgPath: "https://www.pedroshoes.com/on/demandware.static/-/Library-Sites-Pedro/default/dw6b79b776/images/homepage/2023/14aug23/homepage-journal-f1-1.jpg",
      altText: "Second slide",
      captionTitle: "NEUTRAL FLUIDITY",
    },
    {
      imgPath: "https://www.pedroshoes.com/on/demandware.static/-/Library-Sites-Pedro/default/dw269eeadf/images/homepage/2023/07aug23/homepage-journal-f1-1.jpg",
      altText: "Third slide",
      captionTitle: "AN IMPRINT OF THE FUTURE",
    },
  ];
  const itemsCarouselHer = {
    imageDivPath: "https://www.pedroshoes.com/on/demandware.static/-/Library-Sites-Pedro/default/dwecd4808b/images/homepage/2023/21aug23/wk34-homepage-b1.jpg",
    itemsList: [
      {
        itemId: 1,
        imgPath: "https://www.pedroshoes.com/on/demandware.static/-/Library-Sites-Pedro/default/dw73926089/images/homepage/2023/21aug23/wk34-homepage-b2-1.jpg",
        itemName: "Maisie Bucket Bag",
      },
      {
        itemId: 2,
        imgPath: "https://www.pedroshoes.com/on/demandware.static/-/Library-Sites-Pedro/default/dwff431c79/images/homepage/2023/21aug23/wk34-homepage-b2-6.jpg",
        itemName: "Maisie Leather Derby Shoe",
      },
      {
        itemId: 3,
        imgPath: "https://www.pedroshoes.com/on/demandware.static/-/Library-Sites-Pedro/default/dw91c7f2a9/images/homepage/2023/21aug23/wk34-homepage-b2-5.jpg",
        itemName: "Maggie Shoulder Bag",
      }
    ],
    order: [1,2],
    capText: "HER: AN EXTHUBERANT VITALITY",
  }
  const itemsCarouselHim = {
    imageDivPath: "https://www.pedroshoes.com/on/demandware.static/-/Library-Sites-Pedro/default/dw036b961f/images/homepage/2023/21aug23/wk34-homepage-c2.jpg",
    itemsList: [
      {
        itemId: 4,
        imgPath: "https://www.pedroshoes.com/on/demandware.static/-/Library-Sites-Pedro/default/dwc32fd379/images/homepage/2023/21aug23/wk34-homepage-c1-1.jpg",
        itemName: "Hybrix Leather Loafers",
      },
      {
        itemId: 5,
        imgPath: "https://www.pedroshoes.com/on/demandware.static/-/Library-Sites-Pedro/default/dwb8916bad/images/homepage/2023/21aug23/wk34-homepage-c1-4.jpg",
        itemName: "Cadet Mini Sling Bag",
      },
      {
        itemId: 6,
        imgPath: "https://www.pedroshoes.com/on/demandware.static/-/Library-Sites-Pedro/default/dwab657428/images/homepage/2023/21aug23/wk34-homepage-c1-3.jpg",
        itemName: "Dayflux Sneakers",
      },
      {
        itemId: 7,
        imgPath: "https://www.pedroshoes.com/on/demandware.static/-/Library-Sites-Pedro/default/dw821b7dc2/images/homepage/2023/21aug23/wk34-homepage-c1-6.jpg",
        itemName: "Frank Sling Bag",
      },
    ],
    order: [2,1],
    capText: "HIM: A BUCOLIC NOTE",
  }
  return (
    <div className="homepage">
      <HomeCarousel bannerCarousel={featureBanner} isControls={false}/>
      <ItemsCarousel items={itemsCarouselHer} link="women"/>
      <ItemsCarousel items={itemsCarouselHim} link="men"/>
      <HomeCarousel bannerCarousel={bannerCarousel} isControls={true} />
    </div>
  )
}

export default Homepage