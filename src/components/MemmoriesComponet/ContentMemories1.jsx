import pic1 from "../../assets/pic/pic1.jpg";

const ContentMemories1 = () => {
  return (
    <>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-[600px]">
        <div class="lg:col-span-3 hidden lg:block">
          <div class="sticky top-28 bg-white rounded-xl border-[3px] border-ink shadow-comic-lg p-6 relative">
            <div class="absolute -top-4 -right-4 bg-white rounded-full p-1 border-2 border-ink z-10 shadow-comic-sm">
              <span class="material-symbols-outlined text-xmas-green text-3xl">
                emoji_nature
              </span>
            </div>
            <h3 class="text-xl font-bold text-ink uppercase tracking-wider mb-6 border-b-2 border-dashed border-gray-300 pb-2 flex items-center gap-2">
              <span class="material-symbols-outlined text-primary">
                format_list_bulleted
              </span>
              Mục Lục
            </h3>
            <div class="space-y-6">
              <div class="group flex gap-3 relative">
                <div class="absolute left-[11px] top-8 bottom-[-24px] w-0.5 bg-ink border-l-2 border-dashed border-gray-300"></div>
                <div class="relative z-10 flex-shrink-0 size-6 rounded-full bg-xmas-green border-2 border-ink text-white flex items-center justify-center shadow-comic-sm">
                  <span class="material-symbols-outlined text-sm font-bold">
                    check
                  </span>
                </div>
                <div>
                  <p class="text-ink font-bold text-lg leading-none group-hover:text-primary transition-colors">
                    Ngày Khoa falling in luv
                  </p>
                  <span class="text-sm text-gray-500 font-sans">
                    12/09/2025
                  </span>
                </div>
              </div>
              <div class="group flex gap-3 relative">
                <div class="absolute left-[11px] top-8 bottom-[-24px] w-0.5 bg-ink border-l-2 border-dashed border-gray-300"></div>
                <div class="relative z-10 flex-shrink-0 size-6 rounded-full bg-xmas-green border-2 border-ink text-white flex items-center justify-center shadow-comic-sm">
                  <span class="material-symbols-outlined text-sm font-bold">
                    check
                  </span>
                </div>
                <div>
                  <p class="text-ink font-bold text-lg leading-none group-hover:text-primary transition-colors">
                    Những ngày sau đó
                  </p>
                  <span class="text-sm text-gray-500 font-sans">
                    16/09/2025 - 24/12/2025
                  </span>
                </div>
              </div>
              <div class="group flex gap-3 relative">
                <div class="absolute left-[11px] top-8 bottom-[-24px] w-0.5 bg-ink border-l-2 border-dotted border-gray-300 opacity-50"></div>
                <div class="relative z-10 flex-shrink-0 size-8 -ml-1 rounded-full bg-primary border-[2.5px] border-ink text-white flex items-center justify-center shadow-comic animate-pulse">
                  <span class="text-sm font-bold font-sans">3</span>
                </div>
                <div class="pt-1">
                  <p class="text-primary font-bold text-xl leading-none underline decoration-wavy decoration-xmas-green decoration-2">
                    In love
                  </p>
                  <div class="mt-1 inline-flex items-center gap-1 bg-yellow-100 border border-ink px-2 py-0.5 rounded-md text-xs font-bold transform -rotate-2">
                    <span class="material-symbols-outlined text-[14px]">
                      location_on
                    </span>
                    Hiện tại
                  </div>
                </div>
              </div>
              <div class="group flex gap-3 relative opacity-60">
                <div class="absolute left-[11px] top-8 bottom-[-24px] w-0.5 bg-ink border-l-2 border-dashed border-gray-300"></div>
                <div class="relative z-10 flex-shrink-0 size-6 rounded-full bg-white border-2 border-ink flex items-center justify-center"></div>
                <div>
                  <p class="text-gray-500 font-bold text-lg leading-none">
                    Hong biết hihi
                  </p>
                </div>
              </div>
              {/* <div class="group flex gap-3 relative opacity-60">
                <div class="relative z-10 flex-shrink-0 size-6 rounded-full bg-white border-2 border-ink flex items-center justify-center"></div>
                <div>
                  <p class="text-gray-500 font-bold text-lg leading-none">
                    Lời chúc hôm nay
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div class="lg:col-span-9 flex flex-col">
          <div class="relative flex-1 w-full flex items-center justify-center py-4 perspective-[1000px]">
            <div class="absolute w-[95%] h-full top-6 bg-white border-2 border-ink rounded-xl transform rotate-1 translate-y-2 -z-10 shadow-md"></div>
            <div class="relative w-full min-h-[500px] comic-panel comic-card-open flex flex-col md:flex-row group/card">
              <div class="absolute inset-y-0 left-1/2 -translate-x-1/2 w-16 bg-gradient-to-r from-transparent via-black/5 to-transparent hidden md:block z-0 pointer-events-none"></div>
              <div class="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px border-l-2 border-dashed border-gray-300 hidden md:block z-0 pointer-events-none"></div>
              <div class="absolute top-0 left-0 w-24 h-24 overflow-hidden z-20 pointer-events-none">
                <div class="absolute top-[-40px] left-[-40px] w-20 h-20 bg-primary rotate-45 border-b-2 border-ink"></div>
                <span class="absolute top-1 left-1 text-white material-symbols-outlined text-lg">
                  ac_unit
                </span>
              </div>
              <div class="absolute bottom-0 right-0 w-24 h-24 overflow-hidden z-20 pointer-events-none">
                <div class="absolute bottom-[-40px] right-[-40px] w-20 h-20 bg-xmas-green rotate-45 border-t-2 border-ink"></div>
                <span class="absolute bottom-1 right-1 text-white material-symbols-outlined text-lg">
                  star
                </span>
              </div>
              <div class="w-full md:w-1/2 p-6 md:p-10 relative z-10 flex flex-col items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">
                <div class="polaroid bg-white p-3 pb-10 border-2 border-ink shadow-comic rotate-[-3deg] mb-6 max-w-sm w-full mx-auto relative group-hover/card:rotate-[-1deg] transition-all duration-500">
                  <div class="aspect-[4/3] w-full overflow-hidden border border-gray-200 bg-gray-100 relative">
                    <div
                      class="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${pic1})`,
                      }}
                    ></div>
                  </div>
                  <div class="absolute bottom-3 left-0 w-full text-center">
                    <span class="font-comic text-xl text-ink font-bold">
                      Kỷ niệm Đà Lạt ❤️
                    </span>
                  </div>
                  <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-yellow-100/80 border border-yellow-200 rotate-1 shadow-sm backdrop-blur-sm"></div>
                </div>
                <div class="absolute bottom-6 left-8 rotate-6 animate-pulse">
                  <div class="border-2 border-primary text-primary rounded-full px-4 py-1 font-bold text-lg uppercase tracking-widest border-dashed opacity-80 mix-blend-multiply">
                    2018 - DEC 25
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 p-8 md:p-10 flex flex-col relative z-10">
                <div class="relative self-start mb-6">
                  <div class="bg-primary text-white border-2 border-ink px-4 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative z-10 transform -rotate-1">
                    <h3 class="text-2xl font-bold uppercase tracking-wide">
                      Chuyến đi đầu tiên
                    </h3>
                  </div>
                  <div class="absolute top-0 left-0 w-full h-full bg-black translate-x-1 translate-y-1 -z-0"></div>
                </div>
                <div class="flex-1 prose prose-xl text-ink font-comic leading-relaxed">
                  <p class="mb-4 first-letter:text-4xl first-letter:text-primary first-letter:font-bold first-letter:mr-1">
                    Nhớ không em, cái lạnh đầu đông ở Đà Lạt năm ấy? Đó là lần
                    đầu tiên hai đứa mình cùng nhau đi xa đến thế.
                  </p>
                  <p class="mb-4">
                    Anh vẫn nhớ như in nụ cười của em khi nhìn thấy đồi chè Cầu
                    Đất trong sương sớm.
                    <span class="inline-block px-1 bg-yellow-200 transform -rotate-1">
                      Em bảo rằng muốn thời gian ngừng lại
                    </span>
                    ở khoảnh khắc đó mãi mãi.
                  </p>
                  <div class="speech-bubble bg-blue-50 border-blue-900 text-blue-900 text-lg mb-2 mx-4">
                    "Bức ảnh này anh chụp lén lúc em đang mải mê ngắm hoa dã
                    quỳ!"
                    <div class="absolute -bottom-[10px] left-6 w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-ink border-r-[10px] border-r-transparent"></div>
                    <div class="absolute -bottom-[6px] left-[26px] w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-white border-r-[8px] border-r-transparent"></div>
                  </div>
                  <p class="text-right text-gray-500 text-lg mt-2 font-bold">
                    - Ký tên: Anh -
                  </p>
                </div>
                <div class="mt-8 pt-6 border-t-2 border-dashed border-gray-300 flex items-center justify-between">
                  {/* <div class="flex items-center gap-2">
                    <div class="flex -space-x-3">
                      <div
                        class="w-10 h-10 rounded-full border-2 border-white ring-2 ring-ink bg-gray-300 bg-cover bg-center"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1bCHBV2RoSs6wQ2WMs991TjY4q2aNxJhCbDt-wBYTqFfLV3VZjm-9-2HU4F-ODSa8D79R3eJUJo7gaEq_WN8JxhhHQV335mNstfPrgrcw_ikvDD5Ge2d8rNNVTFbFVqE-BBgNEGHzq4I3H2ipLQaQUpKRxiYXj2wDSzekCjmxBbya7vVMZMFu6xyjyh6U1BhZBXz8hFwFHd_MjktK8BSq9L4OAP35ObYvzpuSJf9EfYO8L8rlasxSYOgiQRD0--eCpSuViXR2Y')",
                        }}
                      ></div>
                      <div
                        class="w-10 h-10 rounded-full border-2 border-white ring-2 ring-ink bg-gray-300 bg-cover bg-center"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1bCHBV2RoSs6wQ2WMs991TjY4q2aNxJhCbDt-wBYTqFfLV3VZjm-9-2HU4F-ODSa8D79R3eJUJo7gaEq_WN8JxhhHQV335mNstfPrgrcw_ikvDD5Ge2d8rNNVTFbFVqE-BBgNEGHzq4I3H2ipLQaQUpKRxiYXj2wDSzekCjmxBbya7vVMZMFu6xyjyh6U1BhZBXz8hFwFHd_MjktK8BSq9L4OAP35ObYvzpuSJf9EfYO8L8rlasxSYOgiQRD0--eCpSuViXR2Y')",
                        }}
                      ></div>
                    </div>
                    <span class="text-sm font-bold bg-white border border-ink px-2 py-0.5 rounded-md shadow-sm">
                      +2 ảnh khác
                    </span>
                  </div> */}
                  {/* <button class="group flex items-center gap-2 text-primary hover:text-primary-dark font-bold text-lg transition-colors">
                    Xem thêm
                    <span class="material-symbols-outlined text-2xl transition-transform group-hover:translate-x-1 group-hover:scale-110">
                      arrow_right_alt
                    </span>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center mt-8 px-2 py-5">
            <button class="flex items-center gap-2 px-6 py-2 rounded-xl bg-white border-2 border-ink shadow-comic hover:translate-y-[2px] hover:shadow-comic-hover transition-all group font-bold text-lg">
              <span class="material-symbols-outlined group-hover:-translate-x-1 transition-transform">
                arrow_back
              </span>
              <span>Quay lại</span>
            </button>
            <span class="text-lg font-comic font-bold text-gray-500 hidden sm:block bg-white px-4 py-1 rounded-full border border-gray-300">
              Sử dụng phím mũi tên để điều hướng
            </span>
            <button class="flex items-center gap-2 px-6 py-2 rounded-xl bg-primary text-white border-2 border-ink shadow-comic hover:translate-y-[2px] hover:shadow-comic-hover transition-all group font-bold text-lg">
              <span>Tiếp theo</span>
              <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentMemories1;
