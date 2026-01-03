import "./Game.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Question from "./Question";
import HeroSection from "./HeroSection";
import Money from "./Money";
const Game = () => {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <Question></Question>
      <Money></Money>

      <Footer></Footer>
    </>
  );
};

export default Game;
