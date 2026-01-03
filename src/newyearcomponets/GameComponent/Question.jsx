import "./Game.css";
import pic1 from "../../assets/pic/pic1.jpg";
import { useState } from "react";
import { questions } from "../../assets/data/questionDatat";
const Question = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  //   const [gameStarted, setGameStarted] = useState(false);

  const [showResult, setShowResult] = useState(false);
  const chooseAnswer = (answer) => {
    setSelected(answer);
  };

  const nextQuestion = () => {
    if (selected === currentQuestion.CorrectAnswer) {
      setCorrectCount((prev) => prev + 1);
    }

    setSelected(null);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Câu cuối → hiện popup
      setShowResult(true);
    }
  };

  return (
    <>
      <div
        class="flex-grow relative z-10 flex items-center justify-center p-4 py-8 lg:py-12 pt-4"
        id="game-area"
      >
        <div class="max-w-5xl w-full flex flex-col lg:flex-row gap-8 items-start justify-center">
          <div class="hidden lg:flex flex-col w-64 shrink-0 gap-6 mt-10 sticky top-24">
            <div class="relative group cursor-pointer">
              <div class="absolute -top-6 -right-6 bg-white border-2 border-black rounded-xl p-3 shadow-comic transform rotate-6 z-10">
                <p class="text-xs font-bold text-black text-center">
                  Cố lên bạn ơi!
                  <br />
                  Sắp nhận lì xì rồi!
                </p>
                <p className="text-sm">{progress}%</p>
                <div class="absolute bottom-[-6px] left-4 w-3 h-3 bg-white border-b-2 border-r-2 border-black rotate-45"></div>
              </div>
              <div class="w-full aspect-square rounded-full bg-secondary border-4 border-black overflow-hidden relative shadow-comic">
                <img
                  class="w-full h-full object-cover"
                  data-alt="Cartoon stylized horse mascot for Year of the Horse 2026"
                  src={pic1}
                />
              </div>
            </div>

            <div class="bg-white border-2 border-black rounded-xl p-4 shadow-comic">
              <h3 class="font-black text-lg mb-3 uppercase flex items-center gap-2">
                <span class="material-symbols-outlined text-primary">
                  leaderboard
                </span>
                Thành Tích
              </h3>
              <div class="space-y-3">
                {/* <div class="flex justify-between text-sm font-bold">
                  <span class="text-gray-500">Câu đúng</span>
                  <span class="text-tet-green">{correctCount}</span>
                </div> */}
                <div class="flex justify-between text-sm font-bold">
                  <span class="text-gray-500">Tiến độ</span>
                  <span class="text-primary">🔥 {progress}/100%</span>
                </div>
                {/* <div class="flex justify-between text-sm font-bold">
                  <span class="text-gray-500">Thời gian</span>
                  <span class="text-black">{formatTime(seconds)}/ 1:00</span>
                </div> */}
              </div>
            </div>
          </div>
          <div
            className={`flex-1 w-full max-w-2xl transition-all duration-300`}
          >
            <div class="flex-1 w-full max-w-2xl">
              <div class="bg-white border-2 border-black rounded-t-2xl p-6 pb-8 relative z-0">
                <div class="flex flex-col gap-2 mb-6">
                  <div class="flex justify-between items-end">
                    <span class="font-black text-xl text-primary">
                      {currentIndex + 1}/{questions.length}
                    </span>
                  </div>
                </div>

                <div class="flex flex-col gap-4">
                  <h1 class="text-2xl md:text-3xl font-black text-[#181112] leading-snug">
                    {currentQuestion.Question}
                  </h1>
                  {/* <div class="w-full h-48 md:h-64 rounded-xl border-2 border-black overflow-hidden relative shadow-inner">
                    <img
                      class="w-full h-full object-cover"
                      data-alt="Traditional Vietnamese Tet food arrangement illustration abstract"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHVhcy2opZ82bOc7SocrOgBq5ACFaU60qDznii-UMzPVwFcjsl75s2EkGP4W6eDke7Z0GjBHtt1HWWxr6MQq3Gps4g99M3kSZNmhYqeIn7jU9EMaRCDbKymCvNAVzUZbMt-DsOdsDM5ZKY3vwX2odiEZ7FF1WysOpeyDOI8LDzaNcJGL4Y_4LK3oyf6KDsICPkTnY7K4dWVd_HMCAFKw4dtG55KbVqbjzTwIKYI1ZG7RFQ_RvAeyUslOlkSJvxfdq6AVo4-ONSXmY"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                      <p class="text-white font-medium text-sm italic opacity-90">
                        Hình ảnh minh họa
                      </p>
                    </div>
                  </div> */}
                </div>

                <div class="absolute bottom-[-10px] left-8 w-4 h-8 bg-gray-300 border-x-2 border-black z-10"></div>
                <div class="absolute bottom-[-10px] right-8 w-4 h-8 bg-gray-300 border-x-2 border-black z-10"></div>
              </div>

              <div class="bg-gray-100 border-2 border-black rounded-b-2xl p-6 pt-8 relative z-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => chooseAnswer("A")}
                    className={`group relative rounded-xl border-2 border-black p-4 flex gap-4
    ${selected === "A" ? "bg-primary text-white" : "bg-white"}
  `}
                    // class="group relative bg-primary hover:bg-primary-dark active:scale-[0.98] transition-all rounded-xl border-2 border-black p-4 flex items-center gap-4 text-left shadow-[4px_4px_0px_0px_#221013] hover:shadow-[2px_2px_0px_0px_#221013]"
                  >
                    <div class="size-10 shrink-0 bg-secondary rounded-full border-2 border-black flex items-center justify-center font-black text-black text-xl group-hover:rotate-12 transition-transform">
                      A
                    </div>
                    <div class="flex-1">
                      <span class="block text-[#181112] font-bold text-lg">
                        {currentQuestion.A}
                      </span>
                    </div>
                    <span class="absolute top-2 right-2 text-white/30 material-symbols-outlined text-4xl -rotate-12 pointer-events-none">
                      paid
                    </span>
                  </button>
                  <button
                    onClick={() => chooseAnswer("B")}
                    className={`group relative rounded-xl border-2 border-black p-4 flex gap-4
    ${selected === "B" ? "bg-primary text-white" : "bg-white"}
  `}
                    //  class="group relative bg-white hover:bg-gray-50 active:scale-[0.98] transition-all rounded-xl border-2 border-black p-4 flex items-center gap-4 text-left shadow-[4px_4px_0px_0px_#221013] hover:shadow-[2px_2px_0px_0px_#221013]"
                  >
                    <div class="size-10 shrink-0 bg-gray-200 rounded-full border-2 border-black flex items-center justify-center font-black text-black text-xl group-hover:rotate-12 transition-transform">
                      B
                    </div>
                    <div class="flex-1">
                      <span class="block text-[#181112] font-bold text-lg">
                        {currentQuestion.B}
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => chooseAnswer("C")}
                    className={`group relative rounded-xl border-2 border-black p-4 flex gap-4
    ${selected === "C" ? "bg-primary text-white" : "bg-white"}
  `}
                    //  class="group relative bg-white hover:bg-gray-50 active:scale-[0.98] transition-all rounded-xl border-2 border-black p-4 flex items-center gap-4 text-left shadow-[4px_4px_0px_0px_#221013] hover:shadow-[2px_2px_0px_0px_#221013]"
                  >
                    <div class="size-10 shrink-0 bg-gray-200 rounded-full border-2 border-black flex items-center justify-center font-black text-black text-xl group-hover:rotate-12 transition-transform">
                      C
                    </div>
                    <div class="flex-1">
                      <span class="block text-[#181112] font-bold text-lg">
                        {currentQuestion.C}
                      </span>
                    </div>
                  </button>
                  <button
                    onClick={() => chooseAnswer("D")}
                    className={`group relative rounded-xl border-2 border-black p-4 flex gap-4
    ${selected === "D" ? "bg-primary text-white" : "bg-white"}
  `}
                    //  class="group relative bg-white hover:bg-gray-50 active:scale-[0.98] transition-all rounded-xl border-2 border-black p-4 flex items-center gap-4 text-left shadow-[4px_4px_0px_0px_#221013] hover:shadow-[2px_2px_0px_0px_#221013]"
                  >
                    <div class="size-10 shrink-0 bg-gray-200 rounded-full border-2 border-black flex items-center justify-center font-black text-black text-xl group-hover:rotate-12 transition-transform">
                      D
                    </div>
                    <div class="flex-1">
                      <span class="block text-[#181112] font-bold text-lg">
                        {currentQuestion.D}
                      </span>
                    </div>
                  </button>
                </div>

                <div class="mt-8 flex justify-end items-center border-t-2 border-dashed border-gray-300 pt-4">
                  <button
                    class="bg-black text-white px-8 py-3 rounded-lg font-bold text-lg border-2 border-transparent hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                    onClick={nextQuestion}
                  >
                    {currentIndex === questions.length - 1
                      ? "Hoàn Thành"
                      : "Tiếp Tục"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showResult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-white border-4 border-secondary rounded-2xl p-1 shadow-2xl animate-bounce-in">
            <div className="bg-primary rounded-xl p-8 text-center flex flex-col items-center gap-4 relative overflow-hidden">
              <div className="bg-white border-2 border-black rounded-full p-4 mb-2 shadow-comic rotate-3">
                <span className="text-4xl">🐴</span>
              </div>

              <h2 className="text-3xl font-black text-white uppercase">
                Chúc Mừng!
              </h2>

              <p className="text-white/90 font-medium">
                Bạn đã hoàn thành xuất sắc!
              </p>

              <div className="my-4">
                <span className="text-6xl font-black text-secondary">
                  {correctCount}/{questions.length}
                </span>
                <div className="text-sm font-bold text-white uppercase mt-1">
                  Câu trả lời đúng
                </div>
              </div>

              <div className="flex gap-3 w-full mt-2">
                <button
                  onClick={() => {
                    setCurrentIndex(0);
                    setCorrectCount(0);
                    setSelected(null);

                    setShowResult(false);
                  }}
                  className="flex-1 bg-white text-black font-bold py-3 rounded-lg border-2 border-black"
                >
                  Chơi Lại
                </button>

                <button
                  onClick={() => {
                    setShowResult(false);
                    // setGameStarted(true);
                  }}
                  className="flex-1 bg-secondary font-bold py-3 rounded-lg border-2 border-black flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">redeem</span>
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Question;
