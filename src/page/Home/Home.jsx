import React from "react";
import Header from "../../components/Header/Header";
import Banner from "./Banner";
import News from "../../components/News/News";
import Content from "./Content";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <News />
      <Content />
    </>
  );
};

export default Home;
