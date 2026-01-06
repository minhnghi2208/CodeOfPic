import { useState } from "react";
// import "./Money.Css";
const Money = () => {
  const [open, setOpen] = useState(false);
  const [money, setMoney] = useState(0);

  const randomMoney = () => {
    const min = 50;
    const max = 200;
    const value = Math.floor(Math.random() * (max - min + 1)) + min;
    return value * 1000;
  };
  return (
    <>
      <div className="bg-white dark:bg-background-dark text-[#181112] font-display overflow-x-hidden min-h-screen flex flex-col relative">
        {/* <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div
            className="absolute -top-4 -left-10 w-64 h-64 md:w-96 md:h-96 opacity-80"
            data-alt="Watercolor peach blossom branch extending from corner"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCziQ6I7weuqFxKXbBlMU39Y7tZvdodJJWlpDFVD_DW0ETNwt3OLvg8xlomFX0ehG0vE-l-jMBV-vjWs9SYN3PR1z5mzo3Acebrr8XQ8hGzZh-WicfkX_85WLa5XbcHojI_cVYKTgUembq99RYxGHg_X_d3eZ3So5IuVpIClpNjjswpVTi6D-IcpkWCtnO9bsDaBuBZLapO8MICeHqJrX5x695faM3ws2ru_UBrPgALPfteFEiqL_OhgiiAuYBygQwttf6nnhFYvRo')",
              backgroundSize: "80% 100%",

              backgroundRepeat: "no-repeat",
            }}
          >
            <svg
              className="w-full h-full fill-pink-300"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40,160 Q80,80 160,40"
                fill="none"
                stroke="#8a6067"
                strokeWidth="2"
              ></path>
              <circle
                className="fill-pink-400"
                cx="160"
                cy="40"
                r="10"
              ></circle>
              <circle className="fill-pink-300" cx="140" cy="60" r="8"></circle>
              <circle
                className="fill-pink-400"
                cx="100"
                cy="100"
                r="12"
              ></circle>
            </svg>
          </div>
          <div
            className="absolute -bottom-10 -right-1/10 w-64 h-64 md:w-96 md:h-96 opacity-80 transform rotate-180"
            data-alt="Watercolor yellow apricot blossom branch"
          >
            <svg
              className="w-full h-full fill-yellow-300"
              viewbox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40,160 Q80,80 160,40"
                fill="none"
                stroke="#8a6067"
                stroke-width="2"
              ></path>
              <circle
                className="fill-yellow-400"
                cx="160"
                cy="40"
                r="10"
              ></circle>
              <circle
                className="fill-yellow-300"
                cx="140"
                cy="60"
                r="8"
              ></circle>
              <circle
                className="fill-yellow-400"
                cx="120"
                cy="90"
                r="12"
              ></circle>
            </svg>
          </div>
        </div> */}
        {/* Background hoa đào và hoa mai - không che content khi scroll */}
        <div className="pointer-events-none">
          {/* Góc trên trái - hoa đào */}
          <div
            className="fixed top-0 left-0 w-64 h-64 md:w-96 md:h-96 opacity-80 z-0"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCziQ6I7weuqFxKXbBlMU39Y7tZvdodJJWlpDFVD_DW0ETNwt3OLvg8xlomFX0ehG0vE-l-jMBV-vjWs9SYN3PR1z5mzo3Acebrr8XQ8hGzZh-WicfkX_85WLa5XbcHojI_cVYKTgUembq99RYxGHg_X_d3eZ3So5IuVpIClpNjjswpVTi6D-IcpkWCtnO9bsDaBuBZLapO8MICeHqJrX5x695faM3ws2ru_UBrPgALPfteFEiqL_OhgiiAuYBygQwttf6nnhFYvRo')",
              backgroundSize: "80% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <svg
              className="w-full h-full fill-pink-300"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40,160 Q80,80 160,40"
                fill="none"
                stroke="#8a6067"
                strokeWidth="2"
              ></path>
              <circle
                className="fill-pink-400"
                cx="160"
                cy="40"
                r="10"
              ></circle>
              <circle className="fill-pink-300" cx="140" cy="60" r="8"></circle>
              <circle
                className="fill-pink-400"
                cx="100"
                cy="100"
                r="12"
              ></circle>
            </svg>
          </div>

          {/* Góc dưới phải - hoa mai */}
          <div className="fixed bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 opacity-80 z-0 transform rotate-180">
            <svg
              className="w-full h-full fill-yellow-300"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40,160 Q80,80 160,40"
                fill="none"
                stroke="#8a6067"
                strokeWidth="2"
              ></path>
              <circle
                className="fill-yellow-400"
                cx="160"
                cy="40"
                r="10"
              ></circle>
              <circle
                className="fill-yellow-300"
                cx="140"
                cy="60"
                r="8"
              ></circle>
              <circle
                className="fill-yellow-400"
                cx="120"
                cy="90"
                r="12"
              ></circle>
            </svg>
          </div>
        </div>

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center p-4 md:p-8">
          <input className="peer hidden" id="lixi-toggle" type="checkbox" />
          <div className="flex flex-col items-center text-center max-w-4xl w-full gap-8">
            <div className="space-y-2 animate-fade-in-up">
              <div className="inline-block px-4 py-1 rounded-full bg-yellow-100 border border-yellow-300 text-yellow-800 text-xs font-bold uppercase tracking-wider mb-2">
                Chào Xuân Bính Ngọ
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-[#181112] leading-tight drop-shadow-sm">
                CHÚC MỪNG NĂM MỚI <br />
                <span className="text-primary text-5xl md:text-7xl">2026</span>
              </h1>
              <p className="text-[#8a6067] text-lg md:text-xl font-medium max-w-lg mx-auto mt-4">
                Nhận lộc đầu xuân - Vạn sự như ý - Tỷ sự như mơ
              </p>
            </div>
            <div
              onClick={() => {
                setMoney(randomMoney());
                setOpen(true);
              }}
              className="cursor-pointer group perspective-1000 mt-8 mb-12"
            >
              <div className="relative w-64 h-96 md:w-80 md:h-[480px] bg-red-500 rounded-xl comic-border comic-shadow animate-float-gentle group-hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center overflow-hidden">
                <div
                  className="absolute top-0 left-0 w-full h-full opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #000 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>
                <div className="absolute top-0 w-full h-32 bg-primary-dark rounded-b-full shadow-lg transform -translate-y-16 border-b-2 border-black/20"></div>
                <div className="relative z-10 size-32 bg-yellow-400 rounded-full border-4 border-black flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                  <div className="flex flex-col items-center">
                    <span className="text-4xl font-black text-primary">
                      TẾT
                    </span>
                    <span className="text-xs font-bold text-black uppercase">
                      Bính Ngọ
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-10 opacity-30 text-black">
                  <span className="material-symbols-outlined text-[120px]">
                    bedroom_baby
                  </span>
                </div>

                <div className="absolute bottom-8 z-20 bg-white border-2 border-black px-4 py-2 rounded-full shadow-[2px_2px_0px_0px_#000]">
                  <span className="text-primary font-bold text-sm uppercase tracking-widest">
                    Chạm để mở
                  </span>
                </div>
              </div>
              <div className="w-48 h-4 bg-black/10 rounded-[100%] mx-auto mt-8 blur-sm animate-pulse"></div>
            </div>
          </div>
          {open && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
              <div className="relative w-full max-w-md bg-white rounded-2xl comic-border comic-shadow overflow-hidden flex flex-col items-center animate-[bounce_0.5s_ease-out]">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-3 right-3 z-20 p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors"
                >
                  <span className="material-symbols-outlined text-gray-500">
                    close
                  </span>
                </button>
                <div className="w-full h-40 bg-gradient-to-b from-yellow-100 to-white relative flex items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0"
                    data-alt="Abstract colorful confetti pattern"
                    style={{
                      backgroundImage:
                        "radial-gradient(#f42547 2px, transparent 2px), radial-gradient(#facc15 2px, transparent 2px)",
                      backgroundSize: "30px 30px",
                      backgroundPosition: "0 0, 15px 15px",
                    }}
                  ></div>
                  <div className="size-20 bg-green-500 rounded-full border-4 border-black flex items-center justify-center shadow-lg z-10 animate-bounce">
                    <span className="material-symbols-outlined text-white text-4xl">
                      check_circle
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center p-8 gap-4 w-full">
                  <h3 className="text-xl font-bold text-gray-500 uppercase tracking-widest">
                    Lì Xì May Mắn
                  </h3>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-sm text-gray-400 font-medium">
                      Bạn nhận được
                    </span>
                    <span className="text-5xl font-black text-primary tracking-tight">
                      {money.toLocaleString("vi-VN")}
                      <span className="text-2xl ml-1 align-top">đ</span>
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium leading-relaxed max-w-[280px]">
                    Chúc bạn năm mới Bính Ngọ tấn tài tấn lộc, vạn sự hanh
                    thông, tiền vào như nước!
                  </p>
                  <div className="w-full h-px bg-gray-100 my-2"></div>
                  <button
                    className="w-full cursor-pointer group"
                    onClick={() => setOpen(false)}
                  >
                    <div className="w-full h-12 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl comic-border flex items-center justify-center gap-2 shadow-[2px_2px_0px_0px_#000] active:translate-y-0.5 active:shadow-none transition-all">
                      <span className="material-symbols-outlined text-xl">
                        favorite
                      </span>
                      <span>Xin cảm ơn!</span>
                    </div>
                  </button>
                  <button className="text-sm font-bold text-gray-400 hover:text-primary mt-2">
                    Chia sẻ lộc này
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Money;
