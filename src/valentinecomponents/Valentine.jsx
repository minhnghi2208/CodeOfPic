import "./Valentine.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ptb1 from "../assets/valentinepic/ptb1.JPG";
import ptb2 from "../assets/valentinepic/ptb2.JPG";
import ptb3 from "../assets/valentinepic/ptb3.JPG";
import ptb4 from "../assets/valentinepic/ptb4.JPG";
const Valentine = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const goToLink = (link) => {
    navigate(link);
  };
  return (
    <>
      <body class="bg-pink-pastel font-display overflow-x-hidden min-h-screen relative text-comic-black">
        <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div class="halftone absolute inset-0"></div>
          <span class="material-symbols-outlined absolute top-10 left-[10%] text-cherry sparkle-hand text-4xl opacity-40">
            auto_awesome
          </span>
          <span class="material-symbols-outlined absolute top-1/4 right-[5%] text-cherry sparkle-hand text-6xl opacity-30">
            star
          </span>
          <span class="material-symbols-outlined absolute bottom-1/4 left-[5%] text-cherry sparkle-hand text-5xl opacity-40">
            favorite
          </span>
          <span class="material-symbols-outlined absolute top-2/3 right-[15%] text-cherry sparkle-hand text-4xl opacity-30">
            auto_awesome
          </span>
        </div>
        <div class="relative z-10 flex flex-col min-h-screen">
          <header className="px-6 py-4 flex justify-center">
            <div className="w-full max-w-[960px] flex items-center justify-between comic-stroke bg-white px-6 py-2 comic-shadow relative">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-cherry text-3xl">
                  auto_stories
                </span>
                <h1 className="font-black text-2xl uppercase tracking-tighter italic">
                  Valentine Webtoon
                </h1>
              </div>

              {/* Menu desktop */}
              <div className="hidden md:flex gap-8 font-bold uppercase text-sm">
                <button
                  className="hover:text-cherry transition-colors"
                  onClick={() => goToLink("/valentine")}
                >
                  Trang chủ
                </button>
                <button
                  className="hover:text-cherry transition-colors"
                  onClick={() => goToLink("/option")}
                >
                  Trở lại
                </button>
                <button
                  className="hover:text-cherry transition-colors"
                  onClick={() => goToLink("/")}
                >
                  Đăng xuất
                </button>
              </div>

              {/* Hamburger mobile */}
              <button
                className="md:hidden material-symbols-outlined text-3xl text-cherry"
                onClick={() => setOpenMenu(!openMenu)}
              >
                menu
              </button>

              {/* Dropdown mobile */}
              {openMenu && (
                <div className="absolute top-full left-0 w-full bg-white comic-stroke comic-shadow mt-2 flex flex-col font-bold uppercase text-sm z-50 md:hidden">
                  <button
                    className="px-6 py-3 hover:bg-pink-100"
                    onClick={() => {
                      goToLink("/valentine");
                      setOpenMenu(false);
                    }}
                  >
                    Trang chủ
                  </button>
                  <button
                    className="px-6 py-3 hover:bg-pink-100"
                    onClick={() => {
                      goToLink("/option");
                      setOpenMenu(false);
                    }}
                  >
                    Trở lại
                  </button>
                  <button
                    className="px-6 py-3 hover:bg-pink-100"
                    onClick={() => {
                      goToLink("/");
                      setOpenMenu(false);
                    }}
                  >
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          </header>

          <main class="flex-1 flex flex-col items-center py-8">
            <div class="w-full max-w-[960px] px-4 relative mb-16">
              {/* <div class="absolute -top-10 -left-4 z-20 transform -rotate-12 speech-bubble font-handwriting font-bold text-cherry scale-110">
                Moah~ 💋
              </div>
              <div class="absolute -bottom-8 -right-4 z-20 transform rotate-6 speech-bubble font-handwriting font-bold text-cherry text-xl">
                Love! ❤️
              </div> */}
              <div class="comic-stroke bg-white p-2 comic-shadow overflow-hidden group">
                <div
                  class="bg-cover bg-center min-h-[400px] flex items-end p-8 relative grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  style={{
                    backgroundImage: `
      linear-gradient(to top, #1a1a1a 0%, transparent 60%),
      url(${ptb1})
    `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div class="relative">
                    <h2 class="text-white text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9] mb-2">
                      My Special
                      <br />
                      <span class="text-cherry">Valentine</span>
                    </h2>
                    <p class="text-white font-handwriting text-xl">
                      14.02.2026 - The first valentine
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full max-w-[1300px] px-4 grid grid-cols-2 md:grid-cols-4 gap-6 py-12 relative">
              <div class="comic-stroke comic-shadow bg-white p-2 transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer">
                <div
                  class="aspect-[4/5] bg-cover bg-center"
                  style={{
                    backgroundImage: `
      linear-gradient(to top, #1a1a1a 0%, transparent 60%),
      url(${ptb1})
    `,
                  }}
                ></div>
                <p class="font-handwriting font-bold text-center mt-2">
                  First Meet
                </p>
              </div>
              <div class="comic-stroke comic-shadow bg-white p-2 transform rotate-3 translate-y-4 hover:rotate-0 transition-transform cursor-pointer">
                <div
                  class="aspect-[4/5] bg-cover bg-center"
                  style={{
                    backgroundImage: `
      linear-gradient(to top, #1a1a1a 0%, transparent 60%),
      url(${ptb2})
    `,
                  }}
                ></div>
                <p class="font-handwriting font-bold text-center mt-2">
                  Golden Hour
                </p>
              </div>
              <div class="comic-stroke comic-shadow bg-white p-2 transform -rotate-3 -translate-y-2 hover:rotate-0 transition-transform cursor-pointer">
                <div
                  class="aspect-[4/5] bg-cover bg-center"
                  style={{
                    backgroundImage: `
      linear-gradient(to top, #1a1a1a 0%, transparent 60%),
      url(${ptb3})
    `,
                  }}
                ></div>
                <p class="font-handwriting font-bold text-center mt-2">
                  The Movies
                </p>
              </div>
              <div class="comic-stroke comic-shadow bg-white p-2 transform rotate-2 translate-y-6 hover:rotate-0 transition-transform cursor-pointer">
                <div
                  class="aspect-[4/5] bg-cover bg-center"
                  style={{
                    backgroundImage: `
      linear-gradient(to top, #1a1a1a 0%, transparent 60%),
      url(${ptb4})
    `,
                  }}
                ></div>
                <p class="font-handwriting font-bold text-center mt-2">
                  Adventure!
                </p>
              </div>
            </div>
            <div class="w-full max-w-[860px] px-4 mt-12 mb-20 relative">
              {/* <div class="absolute -right-8 top-1/2 transform -translate-y-1/2 z-20 speech-bubble font-handwriting font-bold text-cherry hidden lg:block rotate-12">
                Chíu chíu! ✨
              </div> */}
              <div class="comic-stroke bg-white comic-shadow p-8 flex flex-col md:flex-row gap-8 items-center">
                <div class="w-full md:w-1/3 comic-stroke rotate-1">
                  <img
                    alt="Comic love art"
                    class="w-full grayscale-[10%]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuChTnQR7D29OwllBU4ey-3ohAHfTo2DOD69N1QK5q1NyeIqaiB5oUmGGcqQf6vYt4QUk8O4jdQu_7IiklLLQ8-SSePooWEO2TrhPmWsCmp6XKCABBgqPFC-lbIjxU7KQve0CMD2XpdD7Y8OHblOUwnpBNompgnSDI7ZuCSk28aRVdoNecNp9z-nuHCnid-BTTOBNXNriOuOLqZw2sSqnMmut9K2nIlOgWxu93--EbWTF9FQ5JqLFulh2rtlLroPzCgMzp38j1CUZHw"
                  />
                </div>
                <div class="w-full md:w-2/3 space-y-4">
                  <h3 class="text-3xl font-black italic uppercase tracking-tight border-b-4 border-cherry inline-block">
                    To My Dearest...
                  </h3>
                  <p class="text-xl font-handwriting leading-relaxed italic">
                    "Giống như một chương truyện Webtoon đầy màu sắc, mỗi ngày
                    bên em đều là một trang vẽ tuyệt đẹp mà anh muốn lưu giữ mãi
                    mãi. Cảm ơn em đã bước vào cuộc đời anh và làm cho nó trở
                    nên rực rỡ hơn bất kỳ bộ truyện tranh nào!"
                  </p>
                  <p class="font-black text-2xl text-cherry">I LOVE YOU! ❤️</p>
                </div>
              </div>
            </div>
            <div class="w-full max-w-[960px] px-4 text-center py-10">
              <h2 class="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 leading-tight">
                Em sẽ cùng anh viết tiếp <br />
                <span class="text-cherry underline decoration-wavy underline-offset-8">
                  Chương Hạnh Phúc
                </span>
                chứ?
              </h2>
              <div class="flex flex-col md:flex-row gap-8 justify-center items-center">
                <button class="bg-red-700 pencil-button min-w-[280px] py-6 px-12 rounded-[40px] text-white text-2xl font-black uppercase italic tracking-wider flex items-center justify-center gap-3">
                  <span class="material-symbols-outlined text-3xl">
                    favorite
                  </span>
                  Đồng ý
                </button>
                <button class="bg-red-700 pencil-button min-w-[280px] py-6 px-12 rounded-[40px] text-white text-2xl font-black uppercase italic tracking-wider flex items-center justify-center gap-3 !bg-cherry">
                  <span class="material-symbols-outlined text-3xl">
                    auto_awesome
                  </span>
                  Yêu anh nhiều
                </button>
              </div>
            </div>
          </main>
          <footer class="w-full py-16 comic-stroke bg-white mt-12 border-b-0 border-l-0 border-r-0 relative">
            <div class="halftone absolute inset-0 opacity-5"></div>
            <div class="flex flex-col items-center gap-4 relative z-10">
              <div class="flex gap-4">
                <span class="material-symbols-outlined text-cherry text-4xl">
                  favorite
                </span>
                <span class="material-symbols-outlined text-cherry text-4xl">
                  auto_awesome
                </span>
                <span class="material-symbols-outlined text-cherry text-4xl">
                  favorite
                </span>
              </div>
              <p class="font-handwriting font-bold text-lg opacity-60">
                Hand-drawn with love for our 14.02
              </p>
            </div>
          </footer>
        </div>
      </body>
    </>
  );
};
export default Valentine;
