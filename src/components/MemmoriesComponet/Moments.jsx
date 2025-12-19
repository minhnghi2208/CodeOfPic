import { momentsImages } from "../../assets/momentsPic/momentData.js";
import moingon from "../../assets/momentsPic/moingon.mp4";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import VideoBlock from "./VideoBlock";
const Moments = () => {
  const navigate = useNavigate();
  const goToLink = (link) => navigate(link);
  const [selectedMoment, setSelectedMoment] = useState(null);
  useEffect(() => {
    document.body.style.overflow = selectedMoment ? "hidden" : "auto";
  }, [selectedMoment]);

  return (
    <>
      <div class="w-full max-w-[1400px] px-4 md:px-10 pb-8 pt-5">
        <div class="flex flex-wrap gap-4 items-end pt-5">
          <div class="font-comic font-bold text-xl uppercase -rotate-2 mr-4 bg-yellow-300 px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Khoảnh khắc cùng nhau.
          </div>
          <div class="flex h-12 items-center gap-2 bg-black text-white px-6 font-comic font-bold uppercase border-2 border-black shadow-comic hover:-translate-y-1 transition-all">
            <span> Click vào hình để xem chi tiết hơn nè.</span>
          </div>
          {/* <button class="flex h-12 items-center gap-2 bg-white text-black px-6 font-comic font-bold uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-comic hover:-translate-y-1 transition-all">
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
            <div
              onClick={() =>
                setSelectedMoment({
                  title: "Khâu caffe nè",
                  date: "24.11.2025",
                  image: momentsImages.lego,
                  description:
                    "Hôm này là lần thứ 2 mà tụi mình đi riêng với nhau nè, trời ơi lúc đó hẹn được Nhi đi chơi ngày hôm này là zui lắm á, sau đó về còn đi dạo nữa cười nhiều lắm. Sau hôm đó mình bắt đầu nhắn tin nhiều hơn nè.",
                })
              }
              class="col-span-1 md:col-span-3 md:row-span-2 relative group cursor-pointer"
            >
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
            <div
              onClick={() =>
                setSelectedMoment({
                  title: "Tặng bánh nè",
                  date: "02.12.2025",
                  image: momentsImages.banh,
                  description:
                    "Lúc này mình đã nhắn tin với nhau nhiều hơn rồi nè! Đây là hôm Khoa nhớ Nhi đang học thi nên rất bận. Tối hôm đó Khoa mua bánh tặng Nhi rồi nghe bạn Nhi nói Nhi rất vui hehe.",
                })
              }
              class="col-span-1 md:col-span-3 md:row-span-2 relative group cursor-pointer"
            >
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
            <div
              onClick={() =>
                setSelectedMoment({
                  title: "Làm Nhi giận :((",
                  date: "04.12.2025",
                  image: momentsImages.takayaki,
                  description:
                    "Lúc này khoa làm Nhi giận :((. Đi 5 tiếng mà hong nhắn tin cho Nhi chin chũi Nhi nhiều nhen. ",
                })
              }
              class="col-span-1 md:col-span-2 md:row-span-1 relative group cursor-pointer"
            >
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
            <div
              onClick={() =>
                setSelectedMoment({
                  title: "Hichi",
                  date: "05.12.2025",
                  image: momentsImages.hichine,
                  description:
                    "Hôm này là ngày típ theo mà mình đi chơi. Trời ơi lúc đi thì nói chuyện đúm nhiều vô quán cái sượng luôn :)). Sau đó tụi mình lại đi dạo, hông hiểu sao khi ra khỏi quán tụi mình bằng đầu nói chuyện đúng nhiều kkk.",
                })
              }
              class="col-span-1 md:col-span-2 md:row-span-1 relative group cursor-pointer"
            >
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
            <div
              onClick={() =>
                setSelectedMoment({
                  title: "Đi ăn moki",
                  date: "07.12.2025",
                  image: momentsImages.moki2,
                  description:
                    "Từ đây là chuỗi ngày đi chơi bắt đầu. Trước khi đi ăn mình đi hồi xuân thăm trường cũ của Nhi vô đó lượn quay rồi ra cũng zuiiii. Rồi sau đó đi ăn Moki, bữa đó ăn mấy cục bột mà chắc sau không dám ăn lại luôn quá. Rồi tiếp theo làm gì cũm biết rồi đó, lại đi dạo chớ đi đâu :)). Mà hôm này Khoa được Nhi khen dễ thương hehe ngại quá.",
                })
              }
              class="col-span-1 md:col-span-2 md:row-span-1 relative group cursor-pointer"
            >
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
            <div
              onClick={() =>
                setSelectedMoment({
                  title: "Đi hồi xuân",
                  date: "08.12.2025",
                  image: momentsImages.hoixuan,
                  description:
                    "Hôm này mình đi vào buổi sáng, tính dẫn Nhi đi en quán bún chả mà Khoa thấy ngon mà ai dè nghỉ mất. Lượn một hồi thì hai đứa quyết định hồi xuân ăn cơm gà, ún sữa hehe. Rồi lại đi dạo... Tới chiều hai đứa lại ra Đà Nẵng mà cả ngày hông mưa đâu tới lúc đi ra lại mưa xui điên.",
                })
              }
              class="col-span-1 md:col-span-2 md:row-span-1 relative group cursor-pointer"
            >
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
            <div
              onClick={() =>
                setSelectedMoment({
                  title: "Đi ăn, đi đánh cl, ún sữa bla bla.",
                  date: "09.12.2025",
                  image: momentsImages.sua,
                  description:
                    "Đây là chuỗi 3 ngày ăn chơi của mình hehe. Tối đó tụi mình đi en miếng gà nè đang đi en mà bị dì út điện :)) Dạ út ơi con đang ăn ở nhà kkk. Rùi đi đánh cl. Ún sữa rồi về.",
                })
              }
              class="col-span-1 md:col-span-2 md:row-span-1 relative group cursor-pointer"
            >
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
            <div
              onClick={() =>
                setSelectedMoment({
                  title: "Hôm này bị down mood",
                  date: "11.12.2025",
                  image: momentsImages.bun,
                  description:
                    "Hôm này sau khi đi chơi về thì Nhi có nói là tụi mình giống bạn hơn, tối hôm Khoa suy nghĩ khá nhiều sợ tụi mình không hợp và cũng không biết Nhi cảm thấy thế nào... Nhưng mà Khoa cũng kệ luôn thích quá rồi biết sao nữa :))",
                })
              }
              class="col-span-1 md:col-span-2 md:row-span-1 relative group cursor-pointer"
            >
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
            <div
              onClick={() =>
                setSelectedMoment({
                  title: "Hôm này đi cl",
                  date: "12.12.2025",
                  image: momentsImages.caulong1,
                  description:
                    "Hôm này đi chơi cũng khá zui hehe cúp le bị chụp lén :))",
                })
              }
              class="col-span-1 md:col-span-2 md:row-span-1 relative group cursor-pointer"
            >
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
            <div
              onClick={() =>
                setSelectedMoment({
                  title: "Chè liên",
                  date: "12.12.2025",
                  image: momentsImages.chelien,
                  description:
                    "Này là sau khi đi cl xong rồi đi en chè, rồi rủ team đi nhậu bla bla. Sau đó tụi mình tách đoàn đánh lẻ hehe, đi dạo lên chùa mà mưa chắc bị đuổi về :(( ",
                })
              }
              class="col-span-1 md:col-span-2 md:row-span-1 relative group cursor-pointer"
            >
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
            <div
              onClick={() =>
                setSelectedMoment({
                  title: "Đi xem phim",
                  date: "16.12.2025",
                  image: momentsImages.phim,
                  description:
                    "Tối hôm này đi xem phim con thảo nè, phim dễ thương với vui nữa. Cười đuyên luôn :)))",
                })
              }
              class="col-span-1 md:col-span-2 md:row-span-1 relative group cursor-pointer"
            >
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
            <div
              onClick={() =>
                setSelectedMoment({
                  title: "Nhậu!!!!!!!!!!!",
                  date: "17.12.2025",
                  image: momentsImages.nhau,
                  description:
                    "Rồi đó cái ngày này cũng đến, hôm này mình ăn chơi quá chừng. Đi nhậu xong hát kara xong rồi thuê khách sạn nhậu tiếp nữa chớ, trời ơi may tối đó hết gượu chớ chắc nhậu đến sáng thiệt quá bae.",
                })
              }
              class="col-span-1 md:col-span-2 md:row-span-1 relative group cursor-pointer"
            >
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

            <div
              onClick={() =>
                setSelectedMoment({
                  title: "Coming soon <3",
                  date: "--.--.----",
                  image: momentsImages.outro,
                  description:
                    "Mong chúng mình có thể cùng nhau có thêm nhiều khoảnh khắc hơn trong tương lai nè. ",
                })
              }
              class="col-span-1 md:col-span-2 md:row-span-1 relative group cursor-pointer"
            >
              <div class="absolute inset-0 border-[6px] border-black z-10 pointer-events-none"></div>
              <div class="w-full h-full overflow-hidden bg-black relative">
                <img
                  alt="Family trip at the beach"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={momentsImages.outro}
                />
                <div class="absolute top-2 right-2 bg-white border-2 border-black px-2 text-[10px] font-mono">
                  Unlock vào 1 ngày k xa
                  <p class="text-xs font-mono mt-1">--.--.----</p>
                </div>
              </div>
            </div>
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

      {selectedMoment && (
        <div class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div class="modal-content-wrapper relative w-full max-w-4xl">
            {/* ❌ Close */}
            <button
              onClick={() => setSelectedMoment(null)}
              class="absolute -top-6 -right-6 z-40 bg-primary text-white border-2 border-black rounded-full w-12 h-12 flex items-center justify-center"
            >
              <span class="material-symbols-outlined text-2xl">close</span>
            </button>

            <div class="comic-border bg-white p-6 shadow-[10px_10px_0_0_rgba(0,0,0,0.5)]">
              <div class="flex flex-col md:flex-row gap-6">
                {/* IMAGE */}
                <div class="md:w-1/2">
                  <img
                    src={selectedMoment.image}
                    class="w-full h-auto border-2 border-black"
                  />
                </div>

                {/* CONTENT */}
                <div class="md:w-1/2 font-comic">
                  <h2 class="text-3xl font-black mb-2">
                    {selectedMoment.title}
                  </h2>
                  <p class="text-sm text-gray-500 mb-4">
                    {selectedMoment.date}
                  </p>
                  <p class="text-lg">{selectedMoment.description}</p>
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

export default Moments;
