import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Title from "./Title";
import ContentMemories1 from "./ContentMemories1";
import ContentMemories2 from "./ContentMemories2";
const Memories = () => {
  return (
    <>
      <Header></Header>
      <div class="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Title></Title>
        <ContentMemories1></ContentMemories1>
        <ContentMemories2></ContentMemories2>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Memories;
