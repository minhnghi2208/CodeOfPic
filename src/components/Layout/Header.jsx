const Header = () => {
  return (
    <div class="w-full bg-white border-b-4 border-ink sticky top-0 z-50">
      <div class="layout-container flex justify-center w-full">
        <div class="w-full max-w-[1280px] px-4 md:px-10 py-3">
          <header class="flex items-center justify-between whitespace-nowrap">
            <div class="flex items-center gap-4">
              <div class="size-10 flex items-center justify-center rounded-full bg-christmas-green border-2 border-ink shadow-comic-sm text-white">
                <span class="material-symbols-outlined text-2xl">park</span>
              </div>
              <h2 class="text-2xl font-comic tracking-wider text-christmas-red drop-shadow-[1px_1px_0px_#1D1D1D]">
                Yến Nhi
              </h2>
            </div>
            <div class="hidden lg:flex flex-1 justify-end gap-6 items-center">
              <nav class="flex items-center gap-6 mr-6">
                <a
                  class="text-sm font-bold uppercase hover:text-christmas-red hover:underline decoration-2 underline-offset-4 transition-all"
                  href="#"
                >
                  Trang chủ
                </a>
                <a
                  class="text-sm font-bold uppercase hover:text-christmas-red hover:underline decoration-2 underline-offset-4 transition-all"
                  href="#gallery"
                >
                  Truyện ảnh
                </a>
                <a
                  class="text-sm font-bold uppercase hover:text-christmas-red hover:underline decoration-2 underline-offset-4 transition-all"
                  href="#wishes"
                >
                  Lời thoại
                </a>
              </nav>
              <button class="flex items-center justify-center rounded-lg h-10 px-6 bg-christmas-red text-white text-sm font-bold border-2 border-ink shadow-comic hover:shadow-comic-hover hover:translate-y-[2px] hover:translate-x-[2px] transition-all">
                <span>Gửi quà ngay!</span>
              </button>
            </div>
            <div class="lg:hidden">
              <button class="flex items-center justify-center p-2 text-ink border-2 border-ink rounded bg-white shadow-comic-sm">
                <span class="material-symbols-outlined">menu</span>
              </button>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};
export default Header;
