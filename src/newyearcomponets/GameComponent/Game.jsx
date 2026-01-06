import "./Game.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Question from "./Question";
import HeroSection from "./HeroSection";
import BoxGame from "./BoxGame";
import Money from "./Money";
import { useEffect } from "react";
const Game = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <Question></Question>
      <BoxGame></BoxGame>
      <Money></Money>
      <Footer></Footer>
    </>
  );
};

export default Game;
