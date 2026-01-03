import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import { useEffect } from "react";
import "../component.css";
const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Header></Header>
      <Content1></Content1>
      <Content2></Content2>
      <Content3></Content3>
      <Footer></Footer>
    </>
  );
};

export default Home;
