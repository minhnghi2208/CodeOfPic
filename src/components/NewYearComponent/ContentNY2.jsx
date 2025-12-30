import { useState } from "react";
const ContentNY2 = () => {
  const [flowers, setFlowers] = useState([]);
  return (
    <>
      <div
          class="w-full bg-[#fdf2f4] dark:bg-[#1a0a0c] border-y border-primary/10 py-16 md:py-24 relative overflow-hidden"
          id="plant-a-wish"
        >
          <div class="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div class="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
          <div class="layout-container relative z-10 flex justify-center">
            <div class="w-full max-w-[800px] px-6 flex flex-col items-center text-center gap-8">
              <div class="size-16 rounded-full bg-white shadow-comic flex items-center justify-center mb-2">
                <span class="material-symbols-outlined text-4xl text-primary">
                  edit
                </span>
              </div>
              <h2 class="text-3xl md:text-5xl font-black text-[#181112] dark:text-white tracking-tight">
                Gieo Mầm Ước Mơ Của Bạn
              </h2>
              <p class="text-lg text-[#5c4a4d] dark:text-gray-300 max-w-lg">
                Viết xuống điều ước chân thành nhất, chọn một loài hoa đại diện
                và để chúng tôi giúp bạn gửi vào vũ trụ mùa xuân.
              </p>
              <div class="w-full bg-white dark:bg-[#221013] p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-white/5 flex flex-col gap-6 relative overflow-hidden">
                <div
                  // class="absolute inset-0 bg-white/95 dark:bg-[#221013]/95 z-20 flex flex-col items-center justify-center opacity-0 pointer-events-none transition-opacity duration-500"
                  className={`absolute inset-0 z-20 flex items-center justify-center transition-opacity ${
                    showSuccess
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }`}
                  id="success-overlay"
                >
                  <div class="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-4 animate-bounce">
                    <span class="material-symbols-outlined text-5xl text-green-600">
                      check_circle
                    </span>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Đã Gieo Hạt Thành Công!
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300 mb-6">
                    Điều ước của bạn đang nở hoa trong khu vườn...
                  </p>
                  {/* <button
                    class="px-6 py-2 bg-primary text-white rounded-full font-bold shadow-comic hover:shadow-none hover:translate-y-1 transition-all"
                    onclick="document.getElementById('success-overlay').classList.remove('opacity-100', 'pointer-events-auto'); window.scrollTo({top: 650, behavior: 'smooth'});"
                  >
                    Xem Vườn Hoa Ngay
                  </button> */}

                  <button
                    onClick={() => setShowSuccess(false)}
                    className="px-6 py-2 bg-primary text-white rounded-full"
                  >
                    Xem Vườn Hoa
                  </button>
                </div>
                <div class="flex flex-wrap justify-center gap-3">
                  <label class="cursor-pointer">
                    <input
                      class="peer sr-only"
                      name="category"
                      type="radio"
                      value="health"
                    />
                    <div class="px-4 py-2 rounded-lg border border-gray-200 dark:border-white/20 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all text-sm font-bold flex items-center gap-2 text-gray-500">
                      <span class="material-symbols-outlined text-lg">
                        health_and_safety
                      </span>{" "}
                      Sức Khỏe
                    </div>
                  </label>
                  <label class="cursor-pointer">
                    <input
                      class="peer sr-only"
                      name="category"
                      type="radio"
                      value="love"
                    />
                    <div class="px-4 py-2 rounded-lg border border-gray-200 dark:border-white/20 peer-checked:bg-pink-500 peer-checked:text-white peer-checked:border-pink-500 transition-all text-sm font-bold flex items-center gap-2 text-gray-500">
                      <span class="material-symbols-outlined text-lg">
                        favorite
                      </span>{" "}
                      Tình Duyên
                    </div>
                  </label>
                  <label class="cursor-pointer">
                    <input
                      checked=""
                      class="peer sr-only"
                      name="category"
                      type="radio"
                      value="career"
                    />
                    <div class="px-4 py-2 rounded-lg border border-gray-200 dark:border-white/20 peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-500 transition-all text-sm font-bold flex items-center gap-2 text-gray-500">
                      <span class="material-symbols-outlined text-lg">
                        work
                      </span>{" "}
                      Sự Nghiệp
                    </div>
                  </label>
                  <label class="cursor-pointer">
                    <input
                      class="peer sr-only"
                      name="category"
                      type="radio"
                      value="money"
                    />
                    <div class="px-4 py-2 rounded-lg border border-gray-200 dark:border-white/20 peer-checked:bg-yellow-500 peer-checked:text-white peer-checked:border-yellow-500 transition-all text-sm font-bold flex items-center gap-2 text-gray-500">
                      <span class="material-symbols-outlined text-lg">
                        savings
                      </span>{" "}
                      Tài Lộc
                    </div>
                  </label>
                </div>
                <textarea
                  class="w-full h-32 p-4 bg-gray-50 dark:bg-white/5 border-2 border-dashed border-gray-300 dark:border-white/20 rounded-xl focus:border-primary focus:ring-0 transition-colors resize-none text-lg font-serif placeholder:text-gray-400 dark:text-white"
                  id="wish-input"
                  value={wish}
                  onChange={(e) => setWish(e.target.value)}
                  placeholder="Năm Bính Ngọ này, tôi ước..."
                ></textarea>
                <button
                  class="w-full h-14 bg-primary text-white rounded-xl font-bold text-lg shadow-comic hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px] transition-all flex items-center justify-center gap-2"
                  onClick={plantWish}
                >
                  <span>Gửi Vào Vườn Xuân</span>
                  <span class="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default ContentNY2;
