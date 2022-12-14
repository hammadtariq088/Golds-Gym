import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Preloader from "../components/Preloader";
import ScrollToTop from "../components/ScrollToTop";
import SideMenu from "../components/SideMenu";

const Index = ({ children }) => {
  return (
    <>
      <Preloader />
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
      <SideMenu />
    </>
  );
};

export default Index;
