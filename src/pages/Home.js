import React from "react";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Whyus from "../components/Whyus";
import Vouchers from "../components/Vouchers";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <Whyus />
      <Vouchers />
      <Footer />
    </div>
  );
};

export default Home;
