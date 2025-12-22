const CardPrepare = ({ title, picture, decription, date }) => {
  return (
    <>
      <article class="group relative flex flex-col h-full bg-white dark:bg-[#1f1212] rounded-xl border-2 border-black dark:border-white shadow-comic hover:shadow-comic-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden">
        <div class="relative w-full aspect-video overflow-hidden border-b-2 border-black dark:border-white">
          <div
            class="absolute top-0 left-0 w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
            data-alt="Making gingerbread cookies in kitchen"
            style={{
              backgroundImage: `url(${picture})`,
            }}
          ></div>
          <div class="absolute top-3 left-3 bg-white text-black border-2 border-black px-3 py-1 font-black text-sm uppercase rotate-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {date}
          </div>
        </div>
        <div class="p-6 flex flex-col flex-1">
          <div class="flex items-start justify-between mb-3">
            <h3 class="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
              {title}
            </h3>
            <span class="material-symbols-outlined text-gray-400 group-hover:text-primary">
              forest
            </span>
          </div>
          <p class="text-gray-600 dark:text-gray-300 font-body text-sm mb-4 line-clamp-3">
            {decription}
          </p>
          <div class="mt-auto pt-4 border-t border-dashed border-gray-300 dark:border-white/20 flex items-center justify-between">
            <div class="flex -space-x-2">
              <div class="size-6 rounded-full bg-blue-100 border border-white flex items-center justify-center text-[10px]">
                ❤️
              </div>
              <div class="size-6 rounded-full bg-red-100 border border-white flex items-center justify-center text-[10px]">
                🎄
              </div>
            </div>
            {/* <button class="text-sm font-bold text-primary flex items-center group/btn">
              Xem chi tiết
              <span class="material-symbols-outlined text-base ml-1 transition-transform group-hover/btn:translate-x-1">
                arrow_forward
              </span>
            </button> */}
          </div>
        </div>
      </article>
    </>
  );
};

export default CardPrepare;
