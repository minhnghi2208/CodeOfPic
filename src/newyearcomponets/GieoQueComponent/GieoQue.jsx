import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useState } from "react";
import { dataGieoQue } from "../../assets/data/dataGieoQue";
import "./GieoQue.css";
const GieoQue = () => {
  const [currentQue, setCurrentQue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [usedIndexes, setUsedIndexes] = useState([]);
  const handleGieoQue = () => {
    if (usedIndexes.length === dataGieoQue.length) {
      alert("Bạn đã gieo hết tất cả quẻ rồi 🌸");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      let randomIndex;

      do {
        randomIndex = Math.floor(Math.random() * dataGieoQue.length);
      } while (usedIndexes.includes(randomIndex));

      setCurrentQue(dataGieoQue[randomIndex]);
      setUsedIndexes((prev) => [...prev, randomIndex]);
      setLoading(false);
      setShowPopup(true);
    }, 3000); // 3 giây thiêng ✨
  };

  return (
    <>
      <Header></Header>
      <div class="flex-grow relative flex flex-col justify-center items-center py-12 px-4 sm:px-6 bg-cloud-pattern">
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div class="absolute top-20 right-10 w-32 h-20 bg-accent-cloud/60 rounded-full blur-2xl animate-float-delayed"></div>

          <div class="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/40 rounded-full blur-[1px] animate-float"></div>
          <div class="absolute top-1/3 right-1/3 w-4 h-4 bg-secondary/40 rounded-full blur-[1px] animate-float-delayed"></div>
        </div>
        <div class="relative z-10 max-w-4xl w-full flex flex-col items-center text-center gap-8">
          <div class="space-y-4">
            <div class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-primary/20">
              Chào Xuân Bính Ngọ
            </div>
            <h1 class="text-4xl md:text-6xl font-black text-black dark:text-white leading-tight tracking-tight drop-shadow-sm">
              Gieo Quẻ Đầu Năm <br />
              <span class="bg-clip-text bg-gradient-to-r  text-black from-primary to-secondary">
                Vạn Sự Bình An
              </span>
            </h1>
            <p class="text-lg md:text-xl text-black dark:text-white/70 max-w-2xl mx-auto font-medium">
              "Lắc ống xăm, tâm thành ý nguyện." <br />
              Khám phá vận mệnh năm mới 2026 giữa vườn hoa xuân thơ mộng.
            </p>
          </div>

          <div class="relative w-full max-w-lg aspect-square md:aspect-[4/3] flex flex-col items-center justify-center mt-8 group/interact">
            <div class="relative w-64 h-64 md:w-80 md:h-80 transition-transform duration-500 hover:scale-105">
              <div class="absolute inset-0 bg-yellow-200/50 dark:bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>

              <div
                class={`relative w-full h-full bg-[url('https://play-lh.googleusercontent.com/wKkbqPZDBL0RTXJdd7e7QEFq59p1D4y13F3YKhldXOkRPs8yP-fOSiElDF-rx-PXCyg')]
  bg-contain bg-center bg-no-repeat drop-shadow-2xl 
  cursor-pointer z-10 rounded-full border-4 
  ${loading ? "animate-shake" : ""}`}
                data-alt="Traditional asian ceramic incense burner with smoke rising softly"
              ></div>

              {/* <div class="absolute -top-12 -right-12 bg-white dark:bg-gray-800 border-2 border-text-dark dark:border-gray-600 p-4 rounded-xl shadow-comic transform rotate-6 z-20 w-40 animate-float-delayed hidden md:block">
                <p class="text-sm font-bold text-text-dark dark:text-white">
                  Thành tâm khấn nguyện rồi ấn nút nhé!
                </p>
                <div class="absolute bottom-0 left-0 w-3 h-3 bg-white dark:bg-gray-800 border-b-2 border-l-2 border-text-dark dark:border-gray-600 transform rotate-45 translate-y-1.5 -translate-x-1.5"></div>
              </div> */}
            </div>

            <div class="mt-12 relative z-30">
              {/* <button
                onClick={handleGieoQue}
                class="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-primary font-display text-xl rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-comic hover:shadow-comic-hover hover:translate-x-[2px] hover:translate-y-[2px] overflow-hidden"
              >
                <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                <span class="relative flex items-center gap-3">
                  <span class="material-symbols-outlined text-2xl animate-spin">
                    cyclone
                  </span>
                  Xin Quẻ Ngay
                </span>
              </button> */}

              <button
                onClick={handleGieoQue}
                disabled={loading}
                class="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-primary rounded-full"
              >
                {loading ? (
                  <>
                    <span class="material-symbols-outlined animate-spin">
                      cyclone
                    </span>
                    Đang xin quẻ...
                  </>
                ) : (
                  "Xin Quẻ Ngay"
                )}
              </button>

              <p class="mt-4 text-sm text-text-dark/50 dark:text-white/40 italic">
                Nhấp để gieo quẻ may mắn
              </p>
            </div>
          </div>
        </div>

        {showPopup && currentQue && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn">
            <div className="relative w-full max-w-md animate-scaleIn">
              {/* Nắp phong thư */}
              <div className="absolute -top-24 left-0 w-full h-32 bg-gradient-to-b from-red-700 to-red-800 clip-envelope-top shadow-xl"></div>

              {/* Thân phong thư */}
              <div
                className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 
        rounded-2xl p-10 text-center shadow-[0_25px_70px_rgba(0,0,0,0.5)]
        border-4 border-yellow-400/70 overflow-hidden"
              >
                {/* Họa tiết ánh sáng */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_60%)]"></div>

                {/* Con dấu vàng */}
                <div
                  className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 
          bg-gradient-to-br from-yellow-300 to-yellow-500 
          rounded-full flex items-center justify-center 
          shadow-lg border-4 border-yellow-200"
                >
                  <span className="material-symbols-outlined text-red-700 text-2xl">
                    auto_awesome
                  </span>
                </div>

                <h2 className="relative z-10 text-3xl font-black text-yellow-200 mb-6 tracking-wide drop-shadow">
                  {currentQue.title}
                </h2>

                <p className="relative z-10 whitespace-pre-line italic text-yellow-100 leading-relaxed mb-8 text-lg">
                  {currentQue.content}
                </p>

                <button
                  onClick={() => setShowPopup(false)}
                  className="relative z-10 px-8 py-3 rounded-full 
            bg-yellow-400 text-red-800 font-bold 
            hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer></Footer>
    </>
  );
};

export default GieoQue;
