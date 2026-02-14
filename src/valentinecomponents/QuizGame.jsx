import "./Quiz.css";
import { dataQuiz } from "../assets/data/quizData";
import { useEffect, useState } from "react";
import HeaderVLT from "./HeaderVLT";
const QuizGame = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const percent = Math.round((score / dataQuiz.length) * 100);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const currentQuiz = dataQuiz[currentIndex];
  const [answers, setAnswers] = useState([]);

  const handleSelect = (index) => {
    setSelected(index);
  };

  const handleNext = () => {
    if (selected === null) return;

    const isCorrect = selected === currentQuiz.correctIndex;

    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentIndex] = isCorrect;
      return newAnswers;
    });

    if (isCorrect) {
      setScore((s) => s + 1);
    }

    setSelected(null);
    setCurrentIndex((i) => i + 1);
  };

  const handleFinish = () => {
    if (selected === null) return;

    const isCorrect = selected === currentQuiz.correctIndex;

    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentIndex] = isCorrect;
      return newAnswers;
    });

    if (isCorrect) {
      setScore((s) => s + 1);
    }

    setShowResult(true);
  };

  const getResultMessage = (percent) => {
    if (percent === 100) {
      return "Giỏi đếy cục cưng.";
    }
    if (percent >= 80) {
      return "Cũm bình thường thui";
    }
    if (percent >= 60) {
      return "Dì kì dạ";
    }
    if (percent >= 40) {
      return "Khum ổn zùi đếy";
    }
    return "Có lẽ chúng ta nên bắt đầu lại từ đầu 🌱";
  };

  return (
    <>
      <body class="bg-pink-pastel font-display overflow-x-hidden min-h-screen relative text-comic-black">
        <HeaderVLT></HeaderVLT>
        <div class="min-h-screen relative flex flex-col items-center justify-center p-6">
          <div class="bg-layer"></div>
          <div class="cloud-bg top-[-10%] left-[-10%]"></div>
          <div class="cloud-bg bottom-[-10%] right-[-10%]"></div>
          <span class="material-symbols-outlined sparkle text-xl top-1/4 left-10">
            flare
          </span>
          <span class="material-symbols-outlined sparkle text-sm top-1/3 right-20">
            flare
          </span>
          <span class="material-symbols-outlined sparkle text-lg bottom-1/4 left-32">
            flare
          </span>
          <span class="material-symbols-outlined sparkle text-xs top-10 right-1/4">
            flare
          </span>
          <main class="max-w-5xl w-full z-10 flex flex-col items-center gap-10">
            <header class="text-center space-y-4">
              <h1 class="script-title text-4xl md:text-5xl text-[var(--cherry-red)] drop-shadow-sm">
                Trang Quiz Valentine
              </h1>
              <div class="flex items-center justify-center gap-6">
                <span class="material-symbols-outlined line-art-flower text-3xl">
                  filter_vintage
                </span>
                <p class="text-sm tracking-[0.3em] font-semibold uppercase opacity-70">
                  {currentIndex + 1}/{dataQuiz.length}
                </p>
                <span class="material-symbols-outlined line-art-flower text-3xl">
                  filter_vintage
                </span>
              </div>
            </header>
            <div class="relative w-full max-w-3xl">
              <div class="absolute -left-20 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
                <span class="material-symbols-outlined line-art-flower text-6xl">
                  spa
                </span>
                <span class="material-symbols-outlined line-art-flower text-4xl ml-8">
                  eco
                </span>
              </div>
              <div class="absolute -right-20 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
                <span class="material-symbols-outlined line-art-flower text-6xl">
                  local_florist
                </span>
                <span class="material-symbols-outlined line-art-flower text-4xl mr-8">
                  stylus_laser_pointer
                </span>
              </div>
              <div class="question-bubble p-10 md:p-16 text-center">
                <h2 class="text-2xl md:text-3xl font-medium leading-relaxed">
                  {currentQuiz.question}
                </h2>
              </div>
            </div>
            {/* <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-4">
              <button class="quiz-btn group">
                <span class="handwritten text-3xl mr-6 opacity-40 group-hover:opacity-100 transition-opacity">
                  a.
                </span>
                <span class="flex-1 text-left">Công viên dưới cơn mưa</span>
              </button>
              <button class="quiz-btn group">
                <span class="handwritten text-3xl mr-6 opacity-40 group-hover:opacity-100 transition-opacity">
                  b.
                </span>
                <span class="flex-1 text-left">Quán cà phê quen thuộc</span>
              </button>
              <button class="quiz-btn group">
                <span class="handwritten text-3xl mr-6 opacity-40 group-hover:opacity-100 transition-opacity">
                  c.
                </span>
                <span class="flex-1 text-left">Rạp chiếu phim cuối tuần</span>
              </button>
              <button class="quiz-btn selected group">
                <span class="handwritten text-3xl mr-6 text-[var(--cherry-red)]">
                  d.
                </span>
                <span class="flex-1 text-left">Băng ghế đá sân trường</span>
                <span class="material-symbols-outlined absolute right-4 text-[var(--cherry-red)] fill-1 text-xl">
                  favorite
                </span>
              </button>
            </div> */}

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-4">
              {currentQuiz.options.map((opt, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  class={`quiz-btn group ${
                    selected === index ? "selected" : ""
                  }`}
                >
                  <span class="handwritten text-3xl mr-6 opacity-40 group-hover:opacity-100 transition-opacity">
                    {String.fromCharCode(97 + index)}.
                  </span>
                  <span class="flex-1 text-left">{opt}</span>
                </button>
              ))}
            </div>

            <div class="text-center mt-6">
              {currentIndex < dataQuiz.length - 1 ? (
                <button
                  onClick={handleNext}
                  disabled={selected === null}
                  class="quiz-btn px-8 py-3"
                >
                  Câu tiếp theo
                </button>
              ) : (
                <button
                  onClick={handleFinish}
                  disabled={selected === null}
                  class="quiz-btn px-8 py-3"
                >
                  Hoàn thành
                </button>
              )}
            </div>

            <div class="text-center">
              <p class="handwritten text-3xl opacity-80">
                "Mỗi câu trả lời là một nhịp đập của trái tim..."
              </p>
            </div>
            {/* <div class="flex items-end justify-center gap-4 mt-4 h-12">
              <span class="material-symbols-outlined text-[var(--cherry-red)] text-4xl fill-1">
                local_florist
              </span>
              <span class="material-symbols-outlined text-[var(--cherry-red)] text-4xl fill-1">
                local_florist
              </span>
              <span class="material-symbols-outlined text-[var(--cherry-red)] text-4xl fill-1">
                local_florist
              </span>
              <span class="material-symbols-outlined text-[var(--cherry-red)] text-4xl fill-1">
                local_florist
              </span>
              <span class="material-symbols-outlined text-[var(--cherry-red)] text-4xl fill-1">
                local_florist
              </span>
              <span class="material-symbols-outlined text-[var(--cherry-red)] text-5xl fill-1 -mb-1">
                filter_vintage
              </span>
              <span class="material-symbols-outlined text-[var(--cherry-red)] text-3xl opacity-30">
                spa
              </span>
              <span class="material-symbols-outlined text-[var(--cherry-red)] text-3xl opacity-30">
                spa
              </span>
              <span class="material-symbols-outlined text-[var(--cherry-red)] text-3xl opacity-30">
                spa
              </span>
              <span class="material-symbols-outlined text-[var(--cherry-red)] text-3xl opacity-30">
                spa
              </span>
            </div> */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {dataQuiz.map((_, index) => {
                let icon = "spa";
                let style = "text-3xl opacity-30";

                // câu hiện tại → luôn héo khi đã chọn
                if (index === currentIndex && selected !== null) {
                  icon = "filter_vintage";
                  style = "text-4xl opacity-70";
                }

                // câu đã xác nhận (sau khi Next)
                if (answers[index] === true) {
                  icon = "local_florist";
                  style = "text-5xl fill-1 -mb-1";
                }

                if (answers[index] === false) {
                  icon = "filter_vintage";
                  style = "text-4xl opacity-70";
                }

                return (
                  <span
                    key={index}
                    className={`material-symbols-outlined transition-all duration-500 text-[var(--cherry-red)] ${style}`}
                  >
                    {icon}
                  </span>
                );
              })}
            </div>
          </main>
          <div
            class={`fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-50 
  items-center justify-center p-6 ${showResult ? "flex" : "hidden"}`}
          >
            <div class="bg-white p-12 hand-drawn-border max-w-md w-full text-center relative shadow-2xl overflow-hidden">
              <div class="bg-layer opacity-10"></div>
              <span class="material-symbols-outlined absolute -top-4 -right-4 text-6xl opacity-20 rotate-12">
                auto_awesome
              </span>
              <h3 class="script-title text-3xl mb-4">Mức Độ Thấu Hiểu</h3>
              <p class="text-7xl font-light mb-4">
                {percent}
                <span class="text-2xl font-bold">%</span>
              </p>

              <p class="handwritten text-3xl mb-8">
                {getResultMessage(percent)}
              </p>
              <button
                class="hand-drawn-border px-10 my-5 py-3 font-semibold hover:bg-[var(--cherry-red)] hover:text-white transition-all duration-300"
                onClick={() => {
                  setShowResult(false);
                }}
              >
                Đóng
              </button>
              <button
                class="hand-drawn-border mx-5 my-5 px-10 py-3 font-semibold hover:bg-[var(--cherry-red)] hover:text-white transition-all duration-300"
                onClick={() => {
                  setShowResult(false);
                  setCurrentIndex(0);
                  setSelected(null);
                  setScore(0);
                  setAnswers([]);
                }}
              >
                Chơi lại
              </button>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};
export default QuizGame;
