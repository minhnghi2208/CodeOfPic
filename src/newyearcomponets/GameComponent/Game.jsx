import "./Game.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Question from "./Question";
import HeroSection from "./HeroSection";
import BoxGame from "./BoxGame";
import Money from "./Money";
const Game = () => {
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
