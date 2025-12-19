import snowman from "../../assets/pic/snowman.jpg";
import { useState } from "react";
const Mail = () => {
  const [index, setIndex] = useState(0);
  const message = [
    {
      abc: "đây là lá thư cuối cùng của ngày, trước khi quen Nhi thì mỗi ngày của khoa trôi qua khá bình thường không có gì đặc biệt và ngày qua ngày vẫn vậy, từ khi Nhi đến thì mỗi ngày của trở nên đặc biệt hơn. Khoa không cần phải làm gì đó 1 mình nữa, có người để nhắn tin, chia sẻ và thật sự rất vui.",
    },
    {
      abc: "Lúc Nhi đang đọc lá thư này thì hôm nay là giáng sinh đầu tiên mà mình bên nhau và khoa cũng mong Nhi có nhiều hơn những mùa giáng sinh vui vẻ và tất nhiên là cùng khoa hehe. Có lẽ Khoa thích Nhi từ nhiều thứ hiện diện thuộc về Nhi nhưng ...",
    },
    {
      abc: "có thể Nhi cũng đã nghe khoa nói khoa thích nhất ở Nhi là đôi mắt, nên khoa mong đôi mắt đó sẽ luôn có khoa trong và không khóc nhè nữa nha. Đây là những gì khoa đã chuẩn bị và nghĩ ra có thể vì khoa cũng giỏi trong việc ăn nói nhưng mong là những thứ Nhi đang thấy sẽ khiến Nhi vui và thích khoa hơn. Cảm ơn Nhi đã cho Khoa cơ hội để được ở bên Nhi nè. Luv U !",
    },
  ];

  return (
    <>
      <div class="flex-1 flex flex-col items-center justify-center p-4 md:p-8 bg-pattern relative">
        <div class="w-full max-w-[800px] h-8 mb-4 flex justify-center px-10 relative">
          <h6 className="text-xl md:text-3xl font-black text-black">
            Lá thư cuối nè {"<3"}
          </h6>
        </div>
        <div class="relative w-full max-w-5xl bg-white dark:bg-[#2a1a1a] rounded-lg shadow-2xl flex flex-col md:flex-row border-[3px] border-[#181111] dark:border-[#4a3a3a] overflow-hidden group/card z-10 min-h-[550px]">
          <div class="absolute left-1/2 top-0 bottom-0 w-8 -ml-4 bg-gradient-to-r from-transparent via-black/5 to-transparent z-20 pointer-events-none hidden md:block"></div>
          <div class="w-full md:w-1/2 bg-[#fff5f5] dark:bg-[#381e1e] p-8 md:p-12 flex flex-col items-center justify-center text-center border-b-[3px] md:border-b-0 md:border-r-[3px] border-[#181111] dark:border-[#4a3a3a] relative">
            <div class="absolute top-4 left-4 text-primary opacity-80 rotate-[-15deg]">
              <span class="material-symbols-outlined text-4xl">
                notifications_active
              </span>
            </div>
            <div class="w-full max-w-xs aspect-square rounded-full border-[3px] border-[#181111] dark:border-[#4a3a3a] overflow-hidden shadow-[4px_4px_0px_0px_#181111] dark:shadow-[4px_4px_0px_0px_#4a3a3a] mb-6 bg-white">
              <div
                class="w-full h-full bg-cover bg-center"
                data-alt="Cute comic style snowman illustration smiling with a red scarf"
                style={{
                  backgroundImage: `url(${snowman})`,
                }}
              ></div>
            </div>
            <h3 class="text-4xl font-black text-[#181111] dark:text-white uppercase tracking-wider mb-2 drop-shadow-sm font-bangers">
              Happy <br></br>
              <span class="text-primary">Holidays</span>
            </h3>
            <p class="text-xl font-bold text-[#8a6060] dark:text-[#d4baba] uppercase tracking-widest font-comic">
              Best Wishes For You
            </p>
            <div class="absolute bottom-4 right-4 text-green-700 opacity-80 rotate-[15deg]">
              <span class="material-symbols-outlined text-4xl">park</span>
            </div>
          </div>
          <div class="w-full md:w-1/2 bg-white dark:bg-[#2a1a1a] relative flex flex-col">
            <div
              class="flex-1 flex overflow-x-auto snap-x snap-mandatory no-scrollbar w-full h-full items-center"
              style={{
                scrollBehavior: "smooth",
              }}
            >
              <div class="min-w-full h-full snap-center flex flex-col items-center justify-center p-8 md:p-12">
                <div class="bg-[#fff9f9] dark:bg-[#2f1f1f] border-2 border-dashed border-primary/30 p-8 rounded-lg relative w-full shadow-sm">
                  <span class="absolute -top-3 -left-3 text-primary bg-white dark:bg-[#2f1f1f] rounded-full p-1 border border-primary/20">
                    <span class="material-symbols-outlined">format_quote</span>
                  </span>
                  <h4 class="font-bangers text-3xl text-primary mb-4 tracking-wide">
                    Giáng Sinh An Lành
                  </h4>

                  <p className="font-comic text-lg md:text-xl text-[#181111] dark:text-gray-100 leading-relaxed">
                    Dear: Nhi <br />
                    {message[index].abc}
                  </p>
                  <p class="text-right text-gray-500 text-lg mt-2 font-bold">
                    - - Khle - -
                  </p>
                  <div class="mt-8 pt-2 border-t-2 border-dashed border-gray-300 flex items-center justify-end">
                    <button
                      onClick={() =>
                        setIndex((prev) => (prev + 1) % message.length)
                      }
                      className="group flex items-center gap-2 text-primary hover:text-primary-dark font-bold text-lg transition-colors"
                    >
                      Tiếp theo
                      <span className="material-symbols-outlined text-2xl transition-transform group-hover:translate-x-1 group-hover:scale-110">
                        arrow_right_alt
                      </span>
                    </button>
                  </div>
                  <div class="flex justify-end mt-4 text-primary/40 gap-2">
                    <span class="material-symbols-outlined">ac_unit</span>
                    <span class="material-symbols-outlined">forest</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mail;
