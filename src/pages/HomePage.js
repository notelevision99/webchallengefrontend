import React from "react";
import BusinessAreas from "../components/layout/user/homePage/BusinessAreas";
import BusinessProduct from "../components/layout/user/homePage/BusinessProduct";
import CounterUp from "../components/layout/user/homePage/CounterUp";
import HomeNews from "../components/layout/user/homePage/HomeNews";
import Introduce from "../components/layout/user/homePage/Introduce";

//Components
import Overview from "../components/layout/user/homePage/Overview";
import Slide from "../components/layout/user/homePage/Slide";
import Technology from "../components/layout/user/homePage/Technology";

function HomePage() {
  return (
    <>
      <Slide />
      <Overview />
      <Introduce />
      <CounterUp />
      <Technology />
      <HomeNews />
      <BusinessProduct />
      <BusinessAreas />
    </>
  );
}

export default HomePage;
