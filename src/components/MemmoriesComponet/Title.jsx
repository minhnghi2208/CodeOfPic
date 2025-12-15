const Title = () => {
  return (
    <>
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 animate-fade-in-up">
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 bg-white border-2 border-ink px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-3 rotate-[-1deg]">
            <span class="material-symbols-outlined text-primary text-sm">
              bookmark
            </span>
            <span class="font-bold text-primary uppercase tracking-wider text-sm">
              Chương 3 / 5
            </span>
          </div>
          <h2
            class="text-5xl md:text-6xl font-bold tracking-tight text-ink mb-3 drop-shadow-sm uppercase"
            style={{ textShadow: "2px 2px 0px #fff" }}
          >
            Hành Trình Của Chúng Ta
          </h2>
          <p class="text-xl text-gray-700 max-w-xl font-medium bg-white/80 p-2 rounded-lg inline-block border border-dashed border-gray-400">
            Mỗi bức thư là một mảnh ghép kỷ niệm. Hãy mở từng trang để sống lại
            những khoảnh khắc tuyệt vời nhất.
          </p>
        </div>
        {/* <div class="flex items-center gap-3 bg-white p-2 rounded-xl border-2 border-ink shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <span class="text-lg font-bold px-2">Tự động lật</span>
          <button class="bg-gray-200 relative inline-flex h-8 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-ink transition-colors duration-200 ease-in-out focus:outline-none">
            <span
              aria-hidden="true"
              class="translate-x-0 pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white border-2 border-ink shadow-sm ring-0 transition duration-200 ease-in-out mt-0.5 ml-0.5"
            ></span>
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Title;
