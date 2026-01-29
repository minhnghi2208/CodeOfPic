import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../component.css";
const Header = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const goToLink = (link) => {
    navigate(link);
    setOpenMenu(false); // click xong tự đóng menu
  };

  return (
    <div className="w-full bg-white border-b-4 border-ink sticky top-0 z-50">
      <div className="layout-container flex justify-center w-full">
        <div className="w-full max-w-[1280px] px-4 md:px-10 py-3">
          <header className="flex items-center justify-between whitespace-nowrap">
            {/* LOGO */}
            <div className="flex items-center gap-4">
              <div className="size-10 flex items-center justify-center rounded-full bg-christmas-green border-2 border-ink shadow-comic-sm text-white">
                <span className="material-symbols-outlined text-2xl">park</span>
              </div>
              <h2 className="text-2xl font-comic tracking-wider text-christmas-red drop-shadow-[1px_1px_0px_#1D1D1D]">
                Yến Nhi
              </h2>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex flex-1 justify-end gap-6 items-center">
              <nav className="flex items-center gap-6 mr-6">
                <button
                  onClick={() => goToLink("/home")}
                  className="text-sm font-bold uppercase hover:text-christmas-red hover:underline decoration-2 underline-offset-4 transition-all"
                >
                  Trang chủ
                </button>
              </nav>
              {/* <nav className="flex items-center gap-6 mr-6">
                <button
                  onClick={() => goToLink("/newyear")}
                  className="text-sm font-bold uppercase hover:text-christmas-red hover:underline decoration-2 underline-offset-4 transition-all"
                >
                  New Year
                </button>
              </nav> */}
              <button
                onClick={() => goToLink("/memories")}
                // className="flex items-center justify-center rounded-lg h-10 px-6 bg-christmas-red text-white text-sm font-bold border-2 border-ink shadow-comic hover:shadow-comic-hover hover:translate-y-[2px] hover:translate-x-[2px] transition-all"
                className="text-sm font-bold uppercase hover:text-christmas-red hover:underline decoration-2 underline-offset-4 transition-all"
              >
                Hành trình
              </button>
              <button
                onClick={() => goToLink("/prepare")}
                // className="flex items-center justify-center rounded-lg h-10 px-6 bg-christmas-red text-white text-sm font-bold border-2 border-ink shadow-comic hover:shadow-comic-hover hover:translate-y-[2px] hover:translate-x-[2px] transition-all"
                className="text-sm font-bold uppercase hover:text-christmas-red hover:underline decoration-2 underline-offset-4 transition-all"
              >
                Chuẩn bị
              </button>
              <button
                onClick={() => goToLink("/option")}
                // className="flex items-center justify-center rounded-lg h-10 px-6 bg-christmas-red text-white text-sm font-bold border-2 border-ink shadow-comic hover:shadow-comic-hover hover:translate-y-[2px] hover:translate-x-[2px] transition-all"
                className="text-sm font-bold uppercase hover:text-christmas-red hover:underline decoration-2 underline-offset-4 transition-all"
              >
                Trở lại
              </button>
              <button
                onClick={() => goToLink("/")}
                className="flex items-center justify-center rounded-lg h-10 px-6 bg-christmas-red text-white text-sm font-bold border-2 border-ink shadow-comic hover:shadow-comic-hover hover:translate-y-[2px] hover:translate-x-[2px] transition-all"
              >
                Đăng xuất
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="lg:hidden">
              <button
                onClick={() => setOpenMenu(!openMenu)}
                className="flex items-center justify-center p-2 text-ink border-2 border-ink rounded bg-white shadow-comic-sm"
              >
                <span className="material-symbols-outlined">
                  {openMenu ? "close" : "menu"}
                </span>
              </button>
            </div>
          </header>

          {/* MOBILE MENU CONTENT */}
          {openMenu && (
            <div className="lg:hidden justify-center mt-4 bg-white border-2 border-ink rounded-xl shadow-comic p-4 space-y-3">
              <button
                onClick={() => goToLink("/home")}
                className="block w-full text-left font-bold hover:text-christmas-red"
              >
                Trang chủ
              </button>
              {/* <button
                onClick={() => goToLink("/newyear")}
                className="block w-full text-left font-bold hover:text-christmas-red"
              >
                New Year
              </button> */}
              <button
                onClick={() => goToLink("/memories")}
                className="block w-full text-left font-bold hover:text-christmas-red"
              >
                Hành trình
              </button>
              <button
                onClick={() => goToLink("/prepare")}
                // className="flex items-center justify-center rounded-lg h-10 px-6 bg-christmas-red text-white text-sm font-bold border-2 border-ink shadow-comic hover:shadow-comic-hover hover:translate-y-[2px] hover:translate-x-[2px] transition-all"
                className="block w-full text-left font-bold hover:text-christmas-red"
              >
                Chuẩn bị
              </button>
              <button
                onClick={() => goToLink("/option")}
                // className="flex items-center justify-center rounded-lg h-10 px-6 bg-christmas-red text-white text-sm font-bold border-2 border-ink shadow-comic hover:shadow-comic-hover hover:translate-y-[2px] hover:translate-x-[2px] transition-all"
                className="block w-full text-left font-bold hover:text-christmas-red"
              >
                Trở lại
              </button>
              {/* <button
                onClick={() => goToLink("/login")}
                className="block w-full text-left font-bold text-christmas-red"
              >
                Đăng xuất
              </button> */}

              <button
                onClick={() => goToLink("/")}
                className="flex items-center justify-center rounded-lg h-10 px-6 bg-christmas-red text-white text-sm font-bold border-2 border-ink shadow-comic hover:shadow-comic-hover hover:translate-y-[2px] hover:translate-x-[2px] transition-all"
              >
                Đăng xuất
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
