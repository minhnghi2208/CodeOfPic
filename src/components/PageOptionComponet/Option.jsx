import "./Option.css";
import noelbg from "../../assets/pic/noelbg.png";
import nyoption from "../../assets/nypic/nyoption.png";
import ChapterCard from "./ChapterCard";
import { dataOption } from "../../assets/data/optionData";
import { useNavigate } from "react-router-dom";
const Option = () => {
  const navigate = useNavigate();
  const goToLink = (link) => {
    navigate(link);
  };
  return (
    <>
      <section class="px-4 py-8 lg:px-20 max-w-7xl mx-auto">
        <div class="flex items-end justify-between mb-8 px-4">
          <div>
            <h2 class="text-3xl font-black uppercase tracking-tight text-[#181411] flex items-center gap-2">
              <span class="material-symbols-outlined text-primary text-4xl">
                local_activity
              </span>
              Our Beleloved Memories
            </h2>
            <p class="text-gray-600 mt-2 font-medium">
              Chọn chapter để xem kỷ niệm
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* <ChapterCard
            onClick={() => goToLink("/home")}
            bgImage={noelbg}
            chapter="CHAPTER 1"
            title="Christmas Chapter"
          />

          <ChapterCard
            onClick={() => goToLink("/valentine")}
            bgImage={noelbg}
            chapter="CHAPTER 1"
            title="Valentine Chapter"
          />

          <ChapterCard
            onClick={() => goToLink("/newyear")}
            bgImage={nyoption}
            chapter="CHAPTER 2"
            title="Xin chào 2026!"
            badge="HOT"
            footerBg="bg-orange-50"
          /> */}

          {dataOption.map((item) => (
            <ChapterCard
              key={item.id}
              onClick={() => goToLink(item.route)}
              bgImage={item.bgImage}
              chapter={item.chapter}
              title={item.title}
              badge={item.badge}
              footerBg={item.footerBg}
            />
          ))}
          <div class="group h-[400px] perspective-1000 cursor-pointer">
            <div class="relative h-full w-full transition-all duration-700 preserve-3d group-hover:rotate-y-180 shadow-comic rounded-2xl">
              <div class="absolute inset-0 h-full w-full backface-hidden rounded-2xl border-4 border-black bg-white overflow-hidden flex flex-col">
                <div
                  class="h-2/3 bg-cover bg-center border-b-4 border-black relative"
                  data-alt="Cartoon illustration of a gift box"
                  //   style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCr3pW5tO79Sw_szkdlrxcemOeHes--_UJQDPKHTb88X0xjMkL8-h8V5isCC6XPy-RxnjdSV8wYC7emCJL5bUuXYVt0r7K7fEUr8f2jhbGAic-EvvI4DPeXXakXkXv7CxEbUpzmm35ZtaSgc10Ft2nvWqGNchFA1-JwmuaZH0RVrJeIq14el556Uszg6Jg_lTigTn7NuM7l_gPRAobRsv-7d6n71IPAgWE0PLi8evMc5z0O7uVNrB0whZ-5USix-uDIErnNejh0cjM");'
                ></div>
                <div class="flex-1 p-6 flex items-center justify-center bg-blue-50">
                  <h3 class="text-2xl font-black text-center uppercase">
                    Quà tặng bất ngờ
                  </h3>
                </div>
              </div>

              <div class="absolute inset-0 h-full w-full backface-hidden rotate-y-180 rounded-2xl border-4 border-comic-blue bg-white p-6 flex flex-col items-center justify-center text-center gap-4">
                <div class="size-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <span class="material-symbols-outlined text-blue-600 text-3xl">
                    card_giftcard
                  </span>
                </div>
                <p class="font-bold text-lg text-gray-800">
                  "Món quà lớn nhất năm nay chính là sức khỏe và nụ cười của
                  bạn. Keep smiling!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Option;
