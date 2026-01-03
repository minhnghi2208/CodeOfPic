import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

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
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b-2 border-[#181112] bg-white px-4 lg:px-10 py-3 shadow-sm">
      <div class="flex items-center gap-3">
        <div class="size-10 bg-primary rounded-full flex items-center justify-center text-secondary border-2 border-[#181112] bg-red-500">
          <span class="material-symbols-outlined text-yellow-300">
            festival
          </span>
        </div>
        <div>
          <h2 class="text-[#181112] text-lg lg:text-xl font-extrabold leading-tight uppercase tracking-wide">
            Tết 2026
          </h2>
          <p class="text-xs font-bold text-primary tracking-widest">
            XUÂN BÍNH NGỌ
          </p>
        </div>
      </div>
      <div class="flex items-center gap-4 lg:gap-8">
        <nav class="hidden md:flex items-center gap-6">
          <a
            class="text-[#181112] text-sm font-bold hover:text-primary transition-colors"
            href="#"
            onClick={() => goToLink("/newyear")}
          >
            Trang Chủ
          </a>
          <a
            class="text-[#181112] text-sm font-bold hover:text-primary transition-colors"
            href="#"
          >
            Lời Chúc
          </a>
          <a
            class="text-primary text-sm font-black border-b-2 border-primary"
            href="#"
            onClick={() => goToLink("/game")}
          >
            Trò Chơi
          </a>
          <a
            class="text-[#181112] text-sm font-bold hover:text-primary transition-colors"
            href="#"
            onClick={() => goToLink("/boi")}
          >
            Bói Vui
          </a>
        </nav>
        <div class="flex items-center gap-2">
          <button
            onClick={() => goToLink("/")}
            class="hidden sm:flex h-10 px-4 bg-primary text-white text-sm font-bold items-center justify-center rounded-lg border-2 border-[#181112] shadow-[2px_2px_0px_0px_#181112] active:translate-y-[2px] active:shadow-none transition-all bg-red-500"
          >
            Đăng xuất
          </button>
          <button class="sm:hidden text-[#181112]">
            <span class="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
