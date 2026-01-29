import "./Valentine.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const HeaderVLT = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const goToLink = (link) => {
    navigate(link);
  };
  return (
    <>
      <header className="sticky top-0 z-50 px-6 py-4 flex justify-center">
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
              onClick={() => goToLink("/Quiz")}
            >
              Quiz
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
                  goToLink("/quiz");
                  setOpenMenu(false);
                }}
              >
                Quiz
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
    </>
  );
};
export default HeaderVLT;
