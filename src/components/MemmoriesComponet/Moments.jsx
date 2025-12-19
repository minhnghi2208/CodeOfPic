import { momentsImages } from "../../assets/momentsPic/momentData.js";
import moingon from "../../assets/momentsPic/moingon.mp4";
import { useNavigate } from "react-router-dom";
import VideoBlock from "./VideoBlock";
const Moments = () => {
  const navigate = useNavigate();
  const goToLink = (link) => navigate(link);
  return (
    <>
      <div class="w-full max-w-[1400px] px-4 md:px-10 pb-8 pt-5">
        <div class="flex flex-wrap gap-4 items-end pt-5">
          <div class="font-comic font-bold text-xl uppercase -rotate-2 mr-4 bg-yellow-300 px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Khoảnh khắc cùng nhau.
          </div>
          {/* <button class="flex h-12 items-center gap-2 bg-black text-white px-6 font-comic font-bold uppercase border-2 border-black shadow-comic hover:-translate-y-1 transition-all">
            <span>Tất cả</span>
          </button>
          <button class="flex h-12 items-center gap-2 bg-white text-black px-6 font-comic font-bold uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-comic hover:-translate-y-1 transition-all">
            <span>Ảnh</span>
          </button>
          <button class="flex h-12 items-center gap-2 bg-white text-black px-6 font-comic font-bold uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-comic hover:-translate-y-1 transition-all">
            <span>Video</span>
          </button>
          <button class="flex h-12 items-center gap-2 bg-white text-black px-6 font-comic font-bold uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-comic hover:-translate-y-1 transition-all">
            <span>Tuổi thơ</span>
          </button> */}
        </div>
      </div>

      <div class="w-full max-w-[1400px] px-4 md:px-10 pb-20">
        <div class="bg-white border-4 border-black p-4 md:p-8 shadow-comic">
          <div class="grid grid-cols-1 md:grid-cols-6 md:grid-rows-4 gap-6 h-auto md:h-[2000px]">
            <div class="col-span-1 md:col-span-3 md:row-span-2 relative group cursor-pointer">
              <div class="absolute -top-3 -left-3 z-20 w-10 h-10 bg-primary rounded-full border-2 border-black flex items-center justify-center text-white font-black font-comic shadow-[2px_2px_0px_0px_#000]">
                1
              </div>
              <div class="absolute inset-0 border-[6px] border-black z-10 pointer-events-none"></div>
              <div
                class="absolute top-0 left-0 w-full h-2 bg-repeat-x z-20"
                style={{
                  background:
                    "repeating-linear-gradient(45deg, #d42426, #d42426 10px, #ffffff 10px, #ffffff 20px)",
                }}
              ></div>
              <div class="w-full h-full overflow-hidden bg-black relative">
                <img
                  alt="Portrait of birthday person smiling with a cake"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter group-hover:contrast-125"
                  src={momentsImages.lego}
                />

                <div class="absolute bottom-0 left-0 bg-white border-t-2 border-r-2 border-black p-3 max-w-[80%]">
                  <p class="font-comic font-bold uppercase text-sm md:text-lg leading-none">
                    Khâu caffe nè
                  </p>
                  <p class="text-xs font-mono mt-1">24.11.2025</p>
                </div>
              </div>
            </div>
            <div class="col-span-1 md:col-span-3 md:row-span-2 relative group cursor-pointer">
              <div class="absolute -top-3 -right-3 z-20 w-8 h-8 bg-yellow-400 rounded-full border-2 border-black flex items-center justify-center text-black font-black font-comic shadow-[2px_2px_0px_0px_#000]">
                2
              </div>
              <div class="absolute inset-0 border-[6px] border-black z-10 pointer-events-none"></div>
              <div class="w-full h-full overflow-hidden bg-black relative">
                <img
                  alt="Graduation ceremony photo"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter sepia-[.3] group-hover:sepia-0"
                  src={momentsImages.banh}
                />
                <div class="absolute top-4 left-4 bg-white border-2 border-black p-2 rotate-2 shadow-sm">
                  <p class="font-comic font-bold text-xs uppercase">
                    Tặng bánh nè
                  </p>
                  <p class="text-xs font-mono mt-1">02.12.2025</p>
                </div>
                <div class="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-gray-300 to-white border-l-2 border-t-2 border-gray-400 group-hover:w-16 group-hover:h-16 transition-all duration-300"></div>
              </div>
            </div>
            <div class="col-span-1 md:col-span-2 md:row-span-1 relative group cursor-pointer">
              <div class="absolute inset-0 border-[6px] border-black z-10 pointer-events-none"></div>
              <div class="absolute top-0 right-0 w-8 h-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aCBmaWxsPSIjMTY1YjMzIiBkPSJNMTAgMEw1IDEwaDEwTDExIDB6bTAgMjBMNSAxMGgxMGwtMSAxMHoiLz48L3N2Zz4=')] bg-no-repeat bg-center z-20"></div>
              <div class="w-full h-full overflow-hidden bg-black relative">
                <img
                  alt="Childhood photo playing in the garden"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={momentsImages.takayaki}
                />
                <div class="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-colors"></div>
                <div class="absolute bottom-4 right-4 bg-white border-2 border-black rounded-full px-3 py-1 -rotate-6">
                  <p class="font-comic font-bold text-xs">Bị dỗi {":(("}</p>
                  <p class="text-xs font-mono mt-1">04.12.2025</p>
                </div>
              </div>
            </div>
            <div class="col-span-1 md:col-span-2 md:row-span-1 relative group cursor-pointer">
              <div class="absolute inset-0 border-[6px] border-black z-10 pointer-events-none"></div>
              <div class="absolute -bottom-4 -left-2 z-30">
                <span class="material-symbols-outlined text-green-700 text-4xl drop-shadow-[2px_2px_0_#000]">
                  grass
                </span>
                <span class="material-symbols-outlined text-red-600 text-xl absolute top-1 left-3 drop-shadow-[1px_1px_0_#000]">
                  circle
                </span>
              </div>
              <div class="w-full h-full overflow-hidden bg-black relative">
                <img
                  alt="Group of friends celebrating at a party"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={momentsImages.hichine}
                />
                {/* <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-16 h-16 bg-primary/90 border-2 border-white rounded-full flex items-center justify-center shadow-[0_0_0_4px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
                    <span class="material-symbols-outlined filled text-white text-3xl">
                      play_arrow
                    </span>
                  </div>
                </div> */}
                <div class="absolute top-0 left-0 bg-yellow-300 border-b-2 border-r-2 border-black px-4 py-1">
                  <p class="font-comic font-black uppercase tracking-widest text-sm">
                    Ở đâu thì cũm biết rùi đó
                  </p>
                  <p class="text-xs font-mono mt-1">05.12.2025</p>
                </div>
              </div>
            </div>
            <div class="col-span-1 md:col-span-2 md:row-span-1 relative group cursor-pointer">
              <div class="absolute inset-0 border-[6px] border-black z-10 pointer-events-none"></div>
              <div class="absolute -bottom-4 -left-2 z-30">
                <span class="material-symbols-outlined text-green-700 text-4xl drop-shadow-[2px_2px_0_#000]">
                  grass
                </span>
                <span class="material-symbols-outlined text-red-600 text-xl absolute top-1 left-3 drop-shadow-[1px_1px_0_#000]">
                  circle
                </span>
              </div>
              <div class="w-full h-full overflow-hidden bg-black relative">
                <img
                  alt="Group of friends celebrating at a party"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={momentsImages.moki2}
                />
                {/* <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-16 h-16 bg-primary/90 border-2 border-white rounded-full flex items-center justify-center shadow-[0_0_0_4px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
                    <span class="material-symbols-outlined filled text-white text-3xl">
                      play_arrow
                    </span>
                  </div>
                </div> */}
                <div class="absolute top-0 left-0 bg-yellow-300 border-b-2 border-r-2 border-black px-4 py-1">
                  <p class="font-comic font-black uppercase tracking-widest text-sm">
                    Moki
                  </p>
                  <p class="text-xs font-mono mt-1">07.12.2025</p>
                </div>
              </div>
            </div>
            <div class="col-span-1 md:col-span-2 md:row-span-1 relative group cursor-pointer">
              <div class="absolute inset-0 border-[6px] border-black z-10 pointer-events-none"></div>
              <div class="w-full h-full overflow-hidden bg-black relative">
                <img
                  alt="Funny moment with face paint"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105  hover:grayscale-0"
                  src={momentsImages.hoixuan}
                />
                <div class="absolute bottom-2 left-2 comic-caption px-2 py-1 rotate-1">
                  <span class="text-xs font-bold text-white">
                    Hồi xuân :{"))"}
                  </span>
                  <p class="text-xs font-mono mt-1 text-white">08.12.2025</p>
                </div>
              </div>
            </div>
            <div class="col-span-1 md:col-span-2 md:row-span-1 relative group cursor-pointer">
              <div class="absolute inset-0 border-[6px] border-black z-10 pointer-events-none"></div>
              <div class="w-full h-full overflow-hidden bg-black relative">
                <img
                  alt="Family trip at the beach"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={momentsImages.sua}
                />
                <div class="absolute top-2 right-2 bg-white border-2 border-black px-2 text-[10px] font-mono">
                  Sữa dâu
                  <p class="text-xs font-mono mt-1">09.12.2025</p>
                </div>
              </div>
            </div>
            <div class="col-span-1 md:col-span-2 md:row-span-1 relative group cursor-pointer">
              <div class="absolute inset-0 border-[6px] border-black z-10 pointer-events-none"></div>
              <div class="w-full h-full overflow-hidden bg-black relative">
                <img
                  alt="Road trip adventure video cover"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={momentsImages.bun}
                />
                <div class="absolute bottom-0 right-0 bg-primary text-white border-t-2 border-l-2 border-black px-3 py-1">
                  <span class="font-comic font-bold text-sm">Down mood</span>
                  <p class="text-xs font-mono mt-1">11.12.2025</p>
                </div>
              </div>
            </div>
            <div class="col-span-1 md:col-span-2 md:row-span-1 relative group cursor-pointer">
              <div class="absolute inset-0 border-[6px] border-black z-10 pointer-events-none"></div>
              <div class="absolute top-0 right-0 w-8 h-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aCBmaWxsPSIjMTY1YjMzIiBkPSJNMTAgMEw1IDEwaDEwTDExIDB6bTAgMjBMNSAxMGgxMGwtMSAxMHoiLz48L3N2Zz4=')] bg-no-repeat bg-center z-20"></div>
              <div class="w-full h-full overflow-hidden bg-black relative">
                <img
                  alt="Childhood photo playing in the garden"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={momentsImages.caulong1}
                />
                <div class="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-colors"></div>
                <div class="absolute bottom-4 right-4 bg-white border-2 border-black rounded-full px-3 py-1 -rotate-6">
                  <p class="font-comic font-bold text-xs">Đi cl</p>
                  <p class="text-xs font-mono mt-1">12.12.2025</p>
                </div>
              </div>
            </div>
            <div class="col-span-1 md:col-span-2 md:row-span-1 relative group cursor-pointer">
              <div class="absolute -top-3 -right-3 z-20 w-8 h-8 bg-yellow-400 rounded-full border-2 border-black flex items-center justify-center text-black font-black font-comic shadow-[2px_2px_0px_0px_#000]"></div>
              <div class="absolute inset-0 border-[6px] border-black z-10 pointer-events-none"></div>
              <div class="w-full h-full overflow-hidden bg-black relative">
                <img
                  alt="Graduation ceremony photo"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter sepia-[.3] group-hover:sepia-0"
                  src={momentsImages.chelien}
                />
                <div class="absolute top-4 left-4 bg-white border-2 border-black p-2 rotate-2 shadow-sm">
                  <p class="font-comic font-bold text-xs uppercase">Chè liên</p>
                  <p class="text-xs font-mono mt-1">12.12.2025</p>
                </div>
                <div class="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-gray-300 to-white border-l-2 border-t-2 border-gray-400 group-hover:w-16 group-hover:h-16 transition-all duration-300"></div>
              </div>
            </div>
            <div class="col-span-1 md:col-span-2 md:row-span-1 relative group cursor-pointer">
              <div class="absolute inset-0 border-[6px] border-black z-10 pointer-events-none"></div>
              <div class="absolute -bottom-4 -left-2 z-30">
                <span class="material-symbols-outlined text-green-700 text-4xl drop-shadow-[2px_2px_0_#000]">
                  grass
                </span>
                <span class="material-symbols-outlined text-red-600 text-xl absolute top-1 left-3 drop-shadow-[1px_1px_0_#000]">
                  circle
                </span>
              </div>
              <div class="w-full h-full overflow-hidden bg-black relative">
                <img
                  alt="Group of friends celebrating at a party"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={momentsImages.phim}
                />
                {/* <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-16 h-16 bg-primary/90 border-2 border-white rounded-full flex items-center justify-center shadow-[0_0_0_4px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
                    <span class="material-symbols-outlined filled text-white text-3xl">
                      play_arrow
                    </span>
                  </div>
                </div> */}
                <div class="absolute top-0 left-0 bg-yellow-300 border-b-2 border-r-2 border-black px-4 py-1">
                  <p class="font-comic font-black uppercase tracking-widest text-sm">
                    Xem phim
                  </p>
                  <p class="text-xs font-mono mt-1">16.12.2025</p>
                </div>
              </div>
            </div>
            <div class="col-span-1 md:col-span-2 md:row-span-1 relative group cursor-pointer">
              <div class="absolute inset-0 border-[6px] border-black z-10 pointer-events-none"></div>
              <div class="w-full h-full overflow-hidden bg-black relative">
                <img
                  alt="Funny moment with face paint"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105  hover:grayscale-0"
                  src={momentsImages.nhau}
                />
                <div class="absolute bottom-2 left-2 comic-caption px-2 py-1 rotate-1">
                  <span class="text-xs font-bold text-white">
                    Hôm này sa đoạ dữ :{"))"}
                  </span>
                  <p class="text-xs font-mono mt-1 text-white">17.12.2025</p>
                </div>
              </div>
            </div>

            {/* <div class="col-span-1 md:col-span-4 md:row-span-1 relative group cursor-pointer h-72">
            
              <div class="absolute inset-0 border-[6px] border-black z-10 pointer-events-none"></div>
              <div class="absolute -bottom-4 -left-2 z-30">
                <span class="material-symbols-outlined text-green-700 text-4xl drop-shadow-[2px_2px_0_#000]">
                  grass
                </span>
                <span class="material-symbols-outlined text-red-600 text-xl absolute top-1 left-3 drop-shadow-[1px_1px_0_#000]">
                  circle
                </span>
              </div>
              <div class="w-full h-full overflow-hidden bg-black relative">
                <video
                  src={karaoke}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  controls
                />
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-16 h-16 bg-primary/90 border-2 border-white rounded-full flex items-center justify-center shadow-[0_0_0_4px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
                    <span class="material-symbols-outlined filled text-white text-3xl">
                      play_arrow
                    </span>
                  </div>
                </div>
                <div class="absolute top-0 left-0 bg-yellow-300 border-b-2 border-r-2 border-black px-4 py-1">
                  <p class="font-comic font-black uppercase tracking-widest text-sm">
                    Action!
                  </p>
                </div>
              </div>
            </div> */}
            <VideoBlock karaoke={moingon}></VideoBlock>
          </div>
        </div>
        <div class="flex justify-end mt-2">
          {/* <button class="font-comic text-sm text-gray-500 italic">
            Còn tiếp ở trang sau...
          </button> */}
          <button
            onClick={() => goToLink("/lastMail")}
            class="pt-5 group flex items-center gap-2 text-primary hover:text-primary-dark font-bold text-lg transition-colors"
          >
            Đến lá thư cuối cùng
            <span class="material-symbols-outlined text-2xl transition-transform group-hover:translate-x-1 group-hover:scale-110">
              arrow_right_alt
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Moments;
