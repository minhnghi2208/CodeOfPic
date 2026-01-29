import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const goToLink = (link) => {
    navigate(link);
  };

  return (
    // <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b-2 border-black px-4 py-3 lg:px-10">
    //   <div class="mx-auto flex max-w-7xl items-center justify-between">
    //     <div class="flex items-center gap-4">
    //       <div class="flex size-10 items-center justify-center rounded-full bg-primary border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
    //         <span class="material-symbols-outlined text-white">
    //           celebration
    //         </span>
    //       </div>
    //       <h2 class="text-xl font-black uppercase tracking-tight text-[#181411] hidden sm:block">
    //         ComicYear 2026
    //       </h2>
    //     </div>
    //     <nav class="hidden md:flex items-center gap-8">
    //       <a
    //         class="text-sm font-bold hover:text-primary transition-colors"
    //         onClick={() => goToLink("/newyear")}
    //       >
    //         Trang chủ
    //       </a>
    //       <a
    //         class="text-sm font-bold hover:text-primary transition-colors"
    //         href="#collection"
    //       >
    //         Bộ sưu tập
    //       </a>
    //       <a
    //         class="text-sm font-bold hover:text-primary transition-colors"
    //         href="#memories"
    //       >
    //         Kỷ niệm
    //       </a>
    //       <a
    //         class="text-sm font-bold hover:text-primary transition-colors"
    //         href="#wishes"
    //       >
    //         Lì xì
    //       </a>
    //     </nav>
    //     <div class="flex items-center gap-4">
    //       <button
    //         onClick={() => goToLink("/")}
    //         class="hidden sm:flex h-10 items-center justify-center rounded-full bg-black px-6 text-sm font-bold text-white shadow-[2px_2px_0px_0px_rgba(100,100,100,1)] hover:translate-y-0.5 hover:shadow-none transition-all"
    //       >
    //         Đăng xuất
    //       </button>
    //       <div
    //         class="size-10 rounded-full border-2 border-black bg-gray-200 bg-cover bg-center"
    //         data-alt="Avatar of user"
    //         style={{
    //           backgroundImage: `url(${pic1})`,
    //         }}
    //       ></div>
    //     </div>
    //   </div>
    // </header>
    <>
      <header className="sticky top-0 z-50 bg-white border-b-2 border-[#181112] px-4 lg:px-10 py-3 shadow-sm">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="size-10 bg-primary rounded-full flex items-center justify-center text-secondary border-2 border-[#181112] bg-red-500">
              <span className="material-symbols-outlined text-yellow-300">
                festival
              </span>
            </div>
            <div>
              <h2 className="text-[#181112] text-lg lg:text-xl font-extrabold leading-tight uppercase tracking-wide">
                Tết 2026
              </h2>
              <p className="text-xs font-bold text-primary tracking-widest">
                XUÂN BÍNH NGỌ
              </p>
            </div>
          </div>

          {/* Nav + button */}
          <div className="flex items-center gap-4 lg:gap-8 relative">
            <nav className="hidden md:flex items-center gap-6">
              <a
                className="text-[#181112] text-sm font-bold hover:text-primary transition-colors"
                onClick={() => goToLink("/newyear")}
              >
                Trang Chủ
              </a>
              <a
                className="text-[#181112] text-sm font-bold hover:text-primary transition-colors"
                href="#"
              >
                Lời Chúc
              </a>
              <a
                className="text-[#181112] text-sm font-bold hover:text-primary transition-colors"
                onClick={() => goToLink("/game")}
              >
                Trò Chơi
              </a>
              <a
                className="text-[#181112] text-sm font-bold hover:text-primary transition-colors"
                onClick={() => goToLink("/option")}
              >
                Trở lại
              </a>
              {/* <a
                className="text-primary text-sm font-black border-b-2 border-primary"
                onClick={() => goToLink("/game")}
              >
                Trò Chơi
              </a> */}
            </nav>

            {/* Mobile menu toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => goToLink("/")}
                className="hidden sm:flex h-10 px-4 bg-primary text-white text-sm font-bold items-center justify-center rounded-lg border-2 border-[#181112] shadow-[2px_2px_0px_0px_#181112] active:translate-y-[2px] active:shadow-none transition-all bg-red-500"
              >
                Đăng xuất
              </button>
              <button
                onClick={() => setOpenMenu(!openMenu)}
                className="sm:hidden text-[#181112]"
              >
                <span className="material-symbols-outlined">
                  {openMenu ? "close" : "menu"}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile menu sổ xuống */}
          {openMenu && (
            <div className="absolute top-full left-0 w-full bg-white border-t-2 border-[#181112] shadow-lg flex flex-col p-4 space-y-3 lg:hidden">
              <button
                onClick={() => goToLink("/newyear")}
                className="block w-full text-left font-bold hover:text-christmas-red"
              >
                Trang Chủ
              </button>
              <button
                onClick={() => goToLink("/game")}
                className="block w-full text-left font-bold hover:text-christmas-red"
              >
                Trò Chơi
              </button>
              <button
                onClick={() => goToLink("/option")}
                className="block w-full text-left font-bold hover:text-christmas-red"
              >
                Trở lại
              </button>
              <button
                onClick={() => goToLink("/")}
                className="block w-full text-left font-bold text-white bg-red-500 rounded-lg px-4 py-2 border-2 border-[#181112] shadow-[2px_2px_0px_0px_#181112]"
              >
                Đăng xuất
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
