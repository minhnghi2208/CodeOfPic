import { useState } from "react";
const CardPrepare = ({ title, picture, decription, date }) => {
  const [selectedPrepare, setSelectedPrepare] = useState(null);
  return (
    <>
      {/* <article class="group relative flex flex-col h-full bg-white dark:bg-[#1f1212] rounded-xl border-2 border-black dark:border-white shadow-comic hover:shadow-comic-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden">
        <div class="relative w-full aspect-[5/3] overflow-hidden border-b-2 border-black dark:border-white">
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
            <button
              onClick={() =>
                setSelectedPrepare({
                  title: title,
                  date: date,
                  image: picture,
                  description: decription,
                })
              }
              class="text-sm font-bold text-primary flex items-center group/btn"
            >
              Xem chi tiết
              <span class="material-symbols-outlined text-base ml-1 transition-transform group-hover/btn:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </article> */}

      <article class="carousel-item-animate snap-center shrink-0 w-[85vw] md:w-[600px] group relative flex flex-col bg-white dark:bg-[#1f1212] rounded-xl border-[3px] border-black dark:border-gray-200 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-comic-hover transition-all duration-300">
        <div class="relative w-full aspect-[16/9] overflow-hidden rounded-t-[0.8rem] border-b-[3px] border-black dark:border-gray-200 bg-black">
          <div
            class="absolute top-0 left-0 w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            data-alt="Making gingerbread cookies in kitchen"
            style={{
              backgroundImage: `url(${picture})`,
            }}
          ></div>
          <div class="absolute top-4 left-4 bg-white text-black border-2 border-black px-3 py-1 font-black text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] z-10 rotate-[2deg]">
            {date}
          </div>
        </div>
        <div class="p-6 md:p-8 flex flex-col flex-1 relative bg-white dark:bg-[#1f1212] rounded-b-xl">
          <h3 class="text-2xl font-black leading-tight group-hover:text-primary transition-colors font-mono tracking-tighter mb-3">
            {title + "."}
            
          </h3>
          <p class="text-gray-600 dark:text-gray-300 font-body text-base lg:text-lg mb-6 line-clamp-3">
            {decription}
          </p>
          <div class="mt-auto pt-4 border-t-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-between">
            {/* <span class="text-sm font-mono text-gray-400 flex items-center gap-1">
              <span class="material-symbols-outlined text-sm">videocam</span>{" "}
              REC 00:24:15
            </span> */}

            <div class="flex -space-x-2">
              <div class="size-6 rounded-full bg-blue-100 border border-white flex items-center justify-center text-[10px]">
                ❤️
              </div>
              <div class="size-6 rounded-full bg-red-100 border border-white flex items-center justify-center text-[10px]">
                🎄
              </div>
            </div>
            <button
              onClick={() =>
                setSelectedPrepare({
                  title: title,
                  date: date,
                  image: picture,
                  description: decription,
                })
              }
              class="px-4 py-1.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors"
            >
              Chi tiết
              
            </button>
          </div>
        </div>
      </article>

      {selectedPrepare && (
        <div class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div class="modal-content-wrapper relative w-full max-w-4xl">
            {/* ❌ Close */}
            <button
              onClick={() => setSelectedPrepare(null)}
              class="absolute z-40 top-2 right-2 md:-top-6 md:-right-6 bg-primary text-white border-2 border-black rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
            >
              <span class="material-symbols-outlined text-2xl">close</span>
            </button>

            <div class="comic-border bg-white p-6 shadow-[10px_10px_0_0_rgba(0,0,0,0.5)]">
              <div class="flex flex-col md:flex-row gap-6">
                {/* IMAGE */}
                <div class="md:w-1/2">
                  <img
                    src={selectedPrepare.image}
                    class="w-full h-auto border-2 border-black"
                  />
                </div>

                {/* CONTENT */}
                <div class="md:w-1/2 font-comic">
                  <h2 class="text-3xl font-black mb-2">
                    {selectedPrepare.title}
                  </h2>
                  <p class="text-sm text-gray-500 mb-4">
                    {selectedPrepare.date}
                  </p>
                  <p class="text-lg">{selectedPrepare.description}</p>
                </div>
              </div>
              <p class="text-right text-gray-500 text-lg mt-2 font-bold">
                - - Khle - -
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardPrepare;
