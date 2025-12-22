import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const Prepare = () => {
  return (
    <>
      <Header></Header>
      <div class="flex-1 flex flex-col items-center w-full">
        <div class="w-full max-w-[1200px] px-4 py-8 lg:py-12">
          <div class="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-center">
            <div class="flex flex-col gap-6 flex-1 text-center lg:text-left">
              <div class="space-y-4">
                <span class="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                  2025 anh có em {"<3"}
                </span>
                <h1 class="text-4xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                  <span class="text-primary relative inline-block">
                    Mùa Giáng Sinh
                    <svg
                      class="absolute w-full h-3 -bottom-1 left-0 text-primary/30"
                      preserveaspectratio="none"
                      viewbox="0 0 100 10"
                    >
                      <path
                        d="M0 5 Q 50 10 100 5"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                      ></path>
                    </svg>
                  </span>
                  <br />
                  Prepare for chapter noel.
                </h1>
                <p class="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0 font-body leading-relaxed">
                  Đây là quá trình anh chuẩn bị cho ngày 25/12/2025 từ lúc nghĩ
                  đến thực hiện nè! Mong là em sẽ thích hehe.
                </p>
              </div>
              {/* <div class="flex justify-center lg:justify-start gap-4 pt-2">
                <button class="flex items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold shadow-comic hover:shadow-comic-hover hover:-translate-y-1 transition-all border-2 border-black dark:border-white">
                  Bắt đầu viết
                </button>
                <button class="flex items-center justify-center rounded-full h-12 px-8 bg-white dark:bg-[#331a1a] text-[#181111] dark:text-white text-base font-bold border-2 border-[#e5e0e0] dark:border-[#4a2a2a] hover:border-primary transition-colors">
                  Xem album
                </button>
              </div> */}
            </div>
            <div class="w-full lg:w-1/2 relative group">
              <div class="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-comic-yellow/30 rounded-[3rem] blur-xl opacity-70 rotate-3 transition-transform group-hover:rotate-6 duration-500"></div>
              <div
                class="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border-4 border-black dark:border-white shadow-comic bg-white dark:bg-[#1a0d0d]"
                data-alt="Illustration of a cozy Christmas room with a fireplace and comic book style elements"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASnUVGLzvyLIuF4FR-Qr8AGt45Kl1MI7Cr9LpMA82ybX4KUwCp8ftMFnTYmLRCzM5v9wKJgjwCXnFaYxT1YMIM7MLtJaiRFHZJVyinjJtQKnchYjjYC0_GdOtLRtTqImcr5iKmI7FhDl1ufL3-9SLIKKWnJeUbjs7BKGtqSKY1nSLV-I3DeowuVJ4EtvY6AzpcwGDV-r-cUc6WrEEQ0pa9TV5rubi7QjdNS2p5seGh7HlMoab8eQVaxrqFESV3CFBPJHZq5NtIYjc")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div class="absolute bottom-6 right-6 bg-white/95 dark:bg-[#1a0d0d]/95 p-4 rounded-xl border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] max-w-[200px] rotate-[-2deg]">
                  <p class="text-xs font-bold uppercase text-primary mb-1">
                    Chap 12
                  </p>
                  <p class="font-bold text-sm leading-tight">
                    "Tháng 12 của những điều kỳ diệu!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="w-full max-w-[1200px] px-4 py-6 sticky top-[65px] z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 dark:border-white/10 pb-4">
            <div class="flex items-center gap-2 text-sm">
              <a
                class="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                href="#"
              >
                Trang Chủ
              </a>
              <span class="text-gray-400">/</span>
              <span class="font-bold text-[#181111] dark:text-white">
                Nhật Ký Noel
              </span>
            </div>

            <div class="flex gap-2 overflow-x-auto pb-1 no-scrollbar mask-linear">
              <button class="shrink-0 flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black px-4 h-8 text-sm font-bold transition-transform hover:scale-105">
                Tất cả
              </button>
              <button class="shrink-0 flex items-center justify-center rounded-full bg-white border border-gray-200 dark:bg-[#331a1a] dark:border-[#4a2a2a] dark:text-gray-200 px-4 h-8 text-sm font-medium hover:border-primary hover:text-primary transition-all">
                <span class="material-symbols-outlined text-base mr-1">
                  diversity_3
                </span>{" "}
                Gia đình
              </button>
              <button class="shrink-0 flex items-center justify-center rounded-full bg-white border border-gray-200 dark:bg-[#331a1a] dark:border-[#4a2a2a] dark:text-gray-200 px-4 h-8 text-sm font-medium hover:border-primary hover:text-primary transition-all">
                <span class="material-symbols-outlined text-base mr-1">
                  celebration
                </span>{" "}
                Tiệc tùng
              </button>
              <button class="shrink-0 flex items-center justify-center rounded-full bg-white border border-gray-200 dark:bg-[#331a1a] dark:border-[#4a2a2a] dark:text-gray-200 px-4 h-8 text-sm font-medium hover:border-primary hover:text-primary transition-all">
                <span class="material-symbols-outlined text-base mr-1">
                  redeem
                </span>{" "}
                Quà tặng
              </button>
              <button class="shrink-0 flex items-center justify-center rounded-full bg-white border border-gray-200 dark:bg-[#331a1a] dark:border-[#4a2a2a] dark:text-gray-200 px-4 h-8 text-sm font-medium hover:border-primary hover:text-primary transition-all">
                <span class="material-symbols-outlined text-base mr-1">
                  mood
                </span>{" "}
                Cảm xúc
              </button>
            </div>
          </div>
        </div> */}

        <div class="w-full max-w-[1200px] px-4 py-8 pb-20">
          <div class="flex items-center gap-3 mb-8">
            <h2 class="text-3xl font-black tracking-tight">
              Tháng 12 Đáng Nhớ
            </h2>
            <span class="flex-1 h-[2px] bg-gray-200 dark:bg-white/10 rounded-full"></span>
            <span class="material-symbols-outlined text-primary animate-bounce">
              ac_unit
            </span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            <article class="group relative flex flex-col h-full bg-white dark:bg-[#1f1212] rounded-xl border-2 border-black dark:border-white shadow-comic hover:shadow-comic-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div class="relative w-full aspect-video overflow-hidden border-b-2 border-black dark:border-white">
                <div
                  class="absolute top-0 left-0 w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                  data-alt="Decorating Christmas tree with red and gold ornaments"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDd64uPK28y6j88bs7xxYKkAlsMNm_m7w4-5k9VGkNZltMxj5t14XZKRbu1DLeDI9F2Z1UVup65iGfWBVJpOukisJfvieIAidWjAlMDQRSO8bBcYtJE6iBMa_eSEPKMy85k0zMtXKzcQ4nFb2sJ59sb-QHGn85jYl4MBZOnxLyNW548syDMOhAu3G7YLuVL1vYWeELnRmxlOUBUM4oEiQOVyp9doBpMDtaxuXMiyf9A-xVrMSVkBOT4vPfsPhkNvbjjNUUb8dQPamI")',
                  }}
                ></div>

                <div class="absolute top-3 left-3 bg-comic-yellow text-black border-2 border-black px-3 py-1 font-black text-sm uppercase -rotate-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  20 Dec
                </div>
              </div>
              <div class="p-6 flex flex-col flex-1">
                <div class="flex items-start justify-between mb-3">
                  <h3 class="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                    Chuẩn bị cây thông
                  </h3>
                  <span class="material-symbols-outlined text-gray-400 group-hover:text-primary">
                    forest
                  </span>
                </div>
                <p class="text-gray-600 dark:text-gray-300 font-body text-sm mb-4 line-clamp-3">
                  Hôm nay cả nhà cùng nhau đi chọn cây thông. Bố vác cây về, còn
                  mẹ thì tìm lại hộp đồ trang trí cũ. Mình đã treo ngôi sao lên
                  đỉnh cây!
                </p>
                <div class="mt-auto pt-4 border-t border-dashed border-gray-300 dark:border-white/20 flex items-center justify-between">
                  <div class="flex -space-x-2">
                    <div class="size-6 rounded-full bg-blue-100 border border-white flex items-center justify-center text-[10px]">
                      🎄
                    </div>
                    <div class="size-6 rounded-full bg-red-100 border border-white flex items-center justify-center text-[10px]">
                      ❤️
                    </div>
                  </div>
                  <button class="text-sm font-bold text-primary flex items-center group/btn">
                    Xem chi tiết
                    <span class="material-symbols-outlined text-base ml-1 transition-transform group-hover/btn:translate-x-1">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </article>

            <article class="group relative flex flex-col h-full bg-white dark:bg-[#1f1212] rounded-xl border-2 border-black dark:border-white shadow-comic hover:shadow-comic-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div class="relative w-full aspect-video overflow-hidden border-b-2 border-black dark:border-white">
                <div
                  class="absolute top-0 left-0 w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                  data-alt="Making gingerbread cookies in kitchen"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDd64uPK28y6j88bs7xxYKkAlsMNm_m7w4-5k9VGkNZltMxj5t14XZKRbu1DLeDI9F2Z1UVup65iGfWBVJpOukisJfvieIAidWjAlMDQRSO8bBcYtJE6iBMa_eSEPKMy85k0zMtXKzcQ4nFb2sJ59sb-QHGn85jYl4MBZOnxLyNW548syDMOhAu3G7YLuVL1vYWeELnRmxlOUBUM4oEiQOVyp9doBpMDtaxuXMiyf9A-xVrMSVkBOT4vPfsPhkNvbjjNUUb8dQPamI")',
                  }}
                ></div>
                <div class="absolute top-3 left-3 bg-white text-black border-2 border-black px-3 py-1 font-black text-sm uppercase rotate-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  21 Dec
                </div>
              </div>
              <div class="p-6 flex flex-col flex-1">
                <div class="flex items-start justify-between mb-3">
                  <h3 class="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                    Làm bánh gừng
                  </h3>
                  <span class="material-symbols-outlined text-gray-400 group-hover:text-primary">
                    cookie
                  </span>
                </div>
                <p class="text-gray-600 dark:text-gray-300 font-body text-sm mb-4 line-clamp-3">
                  Mùi quế và gừng thơm lừng cả căn bếp. Những chiếc bánh hình
                  người tuyết méo mó nhưng siêu ngon.
                </p>
                <div class="mt-auto pt-4 border-t border-dashed border-gray-300 dark:border-white/20 flex items-center justify-between">
                  <div class="flex -space-x-2">
                    <div class="size-6 rounded-full bg-yellow-100 border border-white flex items-center justify-center text-[10px]">
                      🍪
                    </div>
                  </div>
                  <button class="text-sm font-bold text-primary flex items-center group/btn">
                    Xem chi tiết
                    <span class="material-symbols-outlined text-base ml-1 transition-transform group-hover/btn:translate-x-1">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </article>

            <article class="group relative flex flex-col h-full bg-primary/5 dark:bg-[#2a1515] rounded-xl border-2 border-primary shadow-comic hover:shadow-comic-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden ring-4 ring-primary/10">
              <div class="absolute -top-2 -right-2 z-10">
                <span class="material-symbols-outlined text-4xl text-primary drop-shadow-md rotate-12">
                  cake
                </span>
              </div>
              <div class="relative w-full aspect-video overflow-hidden border-b-2 border-primary">
                <div
                  class="absolute top-0 left-0 w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                  data-alt="Birthday cake with candles lit up in dark room"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDd64uPK28y6j88bs7xxYKkAlsMNm_m7w4-5k9VGkNZltMxj5t14XZKRbu1DLeDI9F2Z1UVup65iGfWBVJpOukisJfvieIAidWjAlMDQRSO8bBcYtJE6iBMa_eSEPKMy85k0zMtXKzcQ4nFb2sJ59sb-QHGn85jYl4MBZOnxLyNW548syDMOhAu3G7YLuVL1vYWeELnRmxlOUBUM4oEiQOVyp9doBpMDtaxuXMiyf9A-xVrMSVkBOT4vPfsPhkNvbjjNUUb8dQPamI")',
                  }}
                ></div>
                <div class="absolute top-3 left-3 bg-primary text-white border-2 border-white px-3 py-1 font-black text-sm uppercase -rotate-3 shadow-md">
                  22 Dec
                </div>
              </div>
              <div class="p-6 flex flex-col flex-1">
                <div class="flex items-start justify-between mb-3">
                  <h3 class="text-xl font-bold leading-tight text-primary">
                    Sinh nhật sớm!
                  </h3>
                </div>
                <p class="text-gray-600 dark:text-gray-300 font-body text-sm mb-4 line-clamp-3">
                  Một bữa tiệc bất ngờ từ những người bạn thân. Cảm ơn mọi người
                  vì chiếc bánh kem tuyệt vời và những lời chúc ấm áp. Tuổi mới
                  rực rỡ!
                </p>
                <div class="mt-auto pt-4 border-t border-dashed border-primary/30 flex items-center justify-between">
                  <div class="flex -space-x-2">
                    <div class="size-6 rounded-full bg-purple-100 border border-white flex items-center justify-center text-[10px]">
                      🎂
                    </div>
                    <div class="size-6 rounded-full bg-pink-100 border border-white flex items-center justify-center text-[10px]">
                      🎉
                    </div>
                    <div class="size-6 rounded-full bg-blue-100 border border-white flex items-center justify-center text-[10px]">
                      🎁
                    </div>
                  </div>
                  <button class="text-sm font-bold text-primary flex items-center group/btn">
                    Xem chi tiết
                    <span class="material-symbols-outlined text-base ml-1 transition-transform group-hover/btn:translate-x-1">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </article>

            <article class="group relative flex flex-col h-full bg-white dark:bg-[#1f1212] rounded-xl border-2 border-black dark:border-white shadow-comic hover:shadow-comic-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div class="relative w-full aspect-video overflow-hidden border-b-2 border-black dark:border-white">
                <div
                  class="absolute top-0 left-0 w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                  data-alt="Pile of wrapped colorful Christmas gifts"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDd64uPK28y6j88bs7xxYKkAlsMNm_m7w4-5k9VGkNZltMxj5t14XZKRbu1DLeDI9F2Z1UVup65iGfWBVJpOukisJfvieIAidWjAlMDQRSO8bBcYtJE6iBMa_eSEPKMy85k0zMtXKzcQ4nFb2sJ59sb-QHGn85jYl4MBZOnxLyNW548syDMOhAu3G7YLuVL1vYWeELnRmxlOUBUM4oEiQOVyp9doBpMDtaxuXMiyf9A-xVrMSVkBOT4vPfsPhkNvbjjNUUb8dQPamI")',
                  }}
                ></div>
                <div class="absolute top-3 left-3 bg-white text-black border-2 border-black px-3 py-1 font-black text-sm uppercase rotate-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  23 Dec
                </div>
              </div>
              <div class="p-6 flex flex-col flex-1">
                <div class="flex items-start justify-between mb-3">
                  <h3 class="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                    Gói ghém yêu thương
                  </h3>
                  <span class="material-symbols-outlined text-gray-400 group-hover:text-primary">
                    card_giftcard
                  </span>
                </div>
                <p class="text-gray-600 dark:text-gray-300 font-body text-sm mb-4 line-clamp-3">
                  Ngồi tỉ mẩn gói từng món quà nhỏ cho bạn bè. Hy vọng mọi người
                  sẽ thích những món quà handmade này.
                </p>
                <div class="mt-auto pt-4 border-t border-dashed border-gray-300 dark:border-white/20 flex items-center justify-between">
                  <div class="flex -space-x-2">
                    <div class="size-6 rounded-full bg-green-100 border border-white flex items-center justify-center text-[10px]">
                      🎀
                    </div>
                  </div>
                  <button class="text-sm font-bold text-primary flex items-center group/btn">
                    Xem chi tiết
                    <span class="material-symbols-outlined text-base ml-1 transition-transform group-hover/btn:translate-x-1">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </article>

            <article class="group relative flex flex-col h-full bg-white dark:bg-[#1f1212] rounded-xl border-2 border-black dark:border-white shadow-comic hover:shadow-comic-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div class="relative w-full aspect-video overflow-hidden border-b-2 border-black dark:border-white">
                <div
                  class="absolute top-0 left-0 w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                  data-alt="Cozy dinner table set for Christmas eve"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDd64uPK28y6j88bs7xxYKkAlsMNm_m7w4-5k9VGkNZltMxj5t14XZKRbu1DLeDI9F2Z1UVup65iGfWBVJpOukisJfvieIAidWjAlMDQRSO8bBcYtJE6iBMa_eSEPKMy85k0zMtXKzcQ4nFb2sJ59sb-QHGn85jYl4MBZOnxLyNW548syDMOhAu3G7YLuVL1vYWeELnRmxlOUBUM4oEiQOVyp9doBpMDtaxuXMiyf9A-xVrMSVkBOT4vPfsPhkNvbjjNUUb8dQPamI")',
                  }}
                ></div>
                <div class="absolute top-3 left-3 bg-primary text-white border-2 border-white px-3 py-1 font-black text-sm uppercase -rotate-1 shadow-md">
                  24 Dec
                </div>
              </div>
              <div class="p-6 flex flex-col flex-1">
                <div class="flex items-start justify-between mb-3">
                  <h3 class="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                    Đêm Bình An
                  </h3>
                  <span class="material-symbols-outlined text-gray-400 group-hover:text-primary">
                    restaurant
                  </span>
                </div>
                <p class="text-gray-600 dark:text-gray-300 font-body text-sm mb-4 line-clamp-3">
                  Bữa tối ấm cúng bên gia đình. Mọi người cùng nâng ly chúc mừng
                  Giáng Sinh an lành.
                </p>
                <div class="mt-auto pt-4 border-t border-dashed border-gray-300 dark:border-white/20 flex items-center justify-between">
                  <div class="flex -space-x-2">
                    <div class="size-6 rounded-full bg-red-100 border border-white flex items-center justify-center text-[10px]">
                      🍷
                    </div>
                    <div class="size-6 rounded-full bg-orange-100 border border-white flex items-center justify-center text-[10px]">
                      🍗
                    </div>
                  </div>
                  <button class="text-sm font-bold text-primary flex items-center group/btn">
                    Xem chi tiết
                    <span class="material-symbols-outlined text-base ml-1 transition-transform group-hover/btn:translate-x-1">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </article>

            <article class="group relative flex flex-col justify-center items-center h-full min-h-[300px] bg-gray-100 dark:bg-[#2a2a2a] rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary transition-all cursor-pointer">
              <div class="size-16 rounded-full bg-white dark:bg-[#333] flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <span class="material-symbols-outlined text-3xl text-primary">
                  edit
                </span>
              </div>
              <h3 class="text-lg font-bold text-gray-500 dark:text-gray-400 mb-2">
                Trang tiếp theo...
              </h3>
              <p class="text-sm text-gray-400 dark:text-gray-500 max-w-[200px] text-center">
                Câu chuyện của ngày hôm nay đang chờ bạn viết nên.
              </p>
            </article>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Prepare;
