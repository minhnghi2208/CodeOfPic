import { useEffect } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Music from "./Music";
import Mail from "./Mail";
const LastMail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Header></Header>
      <Music></Music>
      <Mail></Mail>
      <Footer></Footer>
    </>
  );
};
export default LastMail;
