import HiChi from "../../assets/pic/HiChi.jpg";
import cfne from "../../assets/pic/cfne.jpg";
const ContentMemories2 = () => {
  return (
    <>
      <div class="mt-16 bg-black/5 p-6 rounded-2xl border-2 border-dashed border-gray-300">
        <div class="flex items-center justify-between mb-4">
          <h4 class="text-xl font-bold text-ink flex items-center gap-2 uppercase">
            <span class="material-symbols-outlined">movie_filter</span>
            Dòng thời gian
          </h4>
          <a class="text-lg font-bold text-primary hover:underline" href="#">
            Xem tất cả
          </a>
        </div>
        <div class="flex gap-6 overflow-x-auto pb-4 snap-x scrollbar-hide px-2">
          <div class="snap-start shrink-0 w-52 group cursor-pointer">
            <div class="relative aspect-[4/3] bg-white border-2 border-ink shadow-comic rounded-lg overflow-hidden mb-3 p-2 group-hover:rotate-1 transition-transform">
              <div
                class="w-full h-full bg-cover bg-center border border-gray-200"
                style={{
                  backgroundImage: `url(${HiChi})`,
                }}
              ></div>
              <div class="absolute top-0 left-0 w-full h-4 flex justify-between px-1 py-1">
                <div class="w-1.5 h-1.5 bg-ink rounded-full"></div>
                <div class="w-1.5 h-1.5 bg-ink rounded-full"></div>
                <div class="w-1.5 h-1.5 bg-ink rounded-full"></div>
              </div>
            </div>
            <p class="text-lg font-bold text-ink text-center leading-tight py-2">
              Ngày gặp gỡ
            </p>
            <p class="text-sm text-center text-gray-500 font-sans font-semibold">
              12/09/2025
            </p>
          </div>
          <div class="snap-start shrink-0 w-52 group cursor-pointer">
            <div class="relative aspect-[4/3] bg-white border-2 border-ink shadow-comic rounded-lg overflow-hidden mb-3 p-2 group-hover:-rotate-1 transition-transform">
              <div
                class="w-full h-full bg-cover bg-center border border-gray-200"
                style={{
                  backgroundImage: `url(${cfne})`,
                }}
              ></div>
            </div>
            <p class="text-lg font-bold text-ink text-center leading-tight py-2">
              Sau đoá
            </p>
            <p class="text-sm text-center text-gray-500 font-sans font-semibold">
              16/09/2025 - 24/12/2025
            </p>
          </div>
          <div class="snap-start shrink-0 w-52 group cursor-pointer">
            <div class="relative aspect-[4/3] bg-primary border-2 border-ink shadow-comic rounded-lg overflow-hidden mb-3 p-1 rotate-2 scale-105 transition-transform">
              <div
                class="w-full h-full bg-cover bg-center border-2 border-white"
                style={{
                  backgroundImage: `url(${HiChi})`,
                }}
              ></div>
              <div class="absolute -top-2 -right-2 bg-xmas-gold border-2 border-ink rounded-full p-1 shadow-sm z-10">
                <span class="material-symbols-outlined text-white text-sm font-bold">
                  star
                </span>
              </div>
            </div>
            <p class="text-lg font-bold text-primary text-center leading-tight mt-2 py-2">
              Chúng ta của hiện tại
            </p>
            <p class="text-sm text-center text-primary/80 font-sans font-semibold">
              25/12/2025
            </p>
          </div>
          <div class="snap-start shrink-0 w-52 group cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
            <div class="relative aspect-[4/3] bg-gray-100 border-2 border-gray-400 border-dashed rounded-lg overflow-hidden mb-3 p-2">
              <div
                class="w-full h-full bg-cover bg-center grayscale"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1bCHBV2RoSs6wQ2WMs991TjY4q2aNxJhCbDt-wBYTqFfLV3VZjm-9-2HU4F-ODSa8D79R3eJUJo7gaEq_WN8JxhhHQV335mNstfPrgrcw_ikvDD5Ge2d8rNNVTFbFVqE-BBgNEGHzq4I3H2ipLQaQUpKRxiYXj2wDSzekCjmxBbya7vVMZMFu6xyjyh6U1BhZBXz8hFwFHd_MjktK8BSq9L4OAP35ObYvzpuSJf9EfYO8L8rlasxSYOgiQRD0--eCpSuViXR2Y')",
                }}
              ></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl text-gray-600 bg-white/80 rounded-full p-2 border border-gray-400">
                  lock
                </span>
              </div>
            </div>
            <p class="text-lg font-bold text-gray-500 text-center leading-tight py-2">
              Tốt nghiệp
            </p>
            <p class="text-sm text-center text-gray-400 font-sans font-semibold">
              Chưa unlock hehe
            </p>
          </div>
          <div class="snap-start shrink-0 w-52 group cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
            <div class="relative aspect-[4/3] bg-gray-100 border-2 border-gray-400 border-dashed rounded-lg overflow-hidden mb-3 p-2">
              <div
                class="w-full h-full bg-cover bg-center grayscale"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1bCHBV2RoSs6wQ2WMs991TjY4q2aNxJhCbDt-wBYTqFfLV3VZjm-9-2HU4F-ODSa8D79R3eJUJo7gaEq_WN8JxhhHQV335mNstfPrgrcw_ikvDD5Ge2d8rNNVTFbFVqE-BBgNEGHzq4I3H2ipLQaQUpKRxiYXj2wDSzekCjmxBbya7vVMZMFu6xyjyh6U1BhZBXz8hFwFHd_MjktK8BSq9L4OAP35ObYvzpuSJf9EfYO8L8rlasxSYOgiQRD0--eCpSuViXR2Y')",
                }}
              ></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl text-gray-600 bg-white/80 rounded-full p-2 border border-gray-400">
                  lock
                </span>
              </div>
            </div>
            <p class="text-lg font-bold text-gray-500 text-center leading-tight py-2">
              Tương lai
            </p>
            <p class="text-sm text-center text-gray-400 font-sans font-semibold ">
              Chưa unlock nốt kkk
            </p>
          </div>
          <div class="shrink-0 w-8"></div>
        </div>
      </div>
    </>
  );
};

export default ContentMemories2;
