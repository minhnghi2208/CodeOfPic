import "../component.css";
import { useState, useEffect, useRef } from "react";
// import Header from "../Layout/Header";
import Header from "../../newyearcomponets/layout/Header";
// import Footer from "../Layout/Footer";
import Footer from "../../newyearcomponets/layout/Footer";
import ContentNY1 from "./ContentNY1";
import Nhi from "../../assets/pic/anh13.jpg";
import Nhi2 from "../../assets/nypic/xinh1.jpg";
import Nhi3 from "../../assets/nypic/xinh2.jpg";
const NewYear = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const gardenRef = useRef(null);

  const [flowers, setFlowers] = useState([]);
  const [wish, setWish] = useState("");
  const [owner, setOwner] = useState("Khoa"); // mặc định

  const [showSuccess, setShowSuccess] = useState(false);
  const plantWish = () => {
    if (!wish.trim()) {
      alert("Hãy viết thành tựu trước nhé!");
      return;
    }

    const top = Math.floor(Math.random() * 60) + 20 + "%";
    const left = Math.floor(Math.random() * 80) + 10 + "%";

    setFlowers((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: wish,
        top,
        left,
        owner,
      },
    ]);

    setWish("");
    setShowSuccess(true);
  };

  return (
    <>
      <Header></Header>
      <div class="pt-24 pb-12 w-full flex flex-col items-center bg-dreamy-pattern  bg-amber-50">
        <ContentNY1></ContentNY1>
        <div class="w-full max-w-[1280px] px-6 mb-16">
          <div className="pb-4">
            <h3 class="text-primary justify-center font-bold text-lg flex items-center gap-2">
              <span class="material-symbols-outlined">yard</span>
              Khu Vườn Thành Tựu
            </h3>
          </div>
          <div
            ref={gardenRef}
            class="relative w-full rounded-3xl bg-gradient-to-br from-[#E6F3FF] via-[#FFF5F7] to-[#FFFBE6] dark:from-[#1a1a2e] dark:via-[#16213e] dark:to-[#1f1b2e] border-4 border-dashed border-primary/20 min-h-[400px] overflow-hidden shadow-inner flex flex-col items-center justify-center"
          >
            <div
              class="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f42547' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
            {/* <div class="absolute top-1/2 left-1/4 -translate-y-1/2 animate-float">
              <div
                class="group relative cursor-pointer active"
                onclick="this.classList.toggle('active')"
              >
                <div class="w-16 h-16 rounded-full bg-pink-400 border-2 border-white shadow-lg flex items-center justify-center transform transition-transform group-hover:scale-110 flower-icon-bg relative z-10">
                  <span class="material-symbols-outlined text-white text-3xl">
                    local_florist
                  </span>
                </div>
                <div class="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-xl text-center z-20 tooltip-arrow border border-pink-200">
                  <p class="text-xs text-gray-500 mb-1 font-bold">
                    @MaiAnh gửi gắm:
                  </p>
                  <p class="text-sm font-medium text-pink-600">
                    "Mong năm Ngọ phi nước đại tới thành công!"
                  </p>
                </div>
              </div>
            </div> */}
            {/* <div
              class="absolute top-1/3 right-1/4 animate-float"
              style={{ animationDelay: "1.5s" }}
            >
              <div class="group relative cursor-pointer">
                <div class="w-14 h-14 rounded-full bg-yellow-400 border-2 border-white shadow-lg flex items-center justify-center transform transition-transform group-hover:scale-110 flower-icon-bg relative z-10">
                  <span class="material-symbols-outlined text-white text-2xl">
                    wb_sunny
                  </span>
                </div>
                <div class="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-xl text-center z-20 tooltip-arrow border border-yellow-200">
                  <p class="text-xs text-gray-500 mb-1 font-bold">
                    @TuanTai ước:
                  </p>
                  <p class="text-sm font-medium text-yellow-600">
                    "Tiền vô như nước, mã đáo thành công"
                  </p>
                </div>
              </div>
            </div> */}
            {/* <div
              class="absolute bottom-1/4 left-1/2 -translate-x-1/2 animate-float"
              style={{ animationDelay: "2.2s" }}
            >
              <div class="group relative cursor-pointer">
                <div class="w-20 h-20 rounded-full bg-red-500 border-2 border-white shadow-lg flex items-center justify-center transform transition-transform group-hover:scale-110 flower-icon-bg relative z-10">
                  <span class="material-symbols-outlined text-white text-4xl">
                    cruelty_free
                  </span>
                </div>
                <div class="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-xl text-center z-20 tooltip-arrow border border-red-200">
                  <p class="text-xs text-gray-500 mb-1 font-bold">
                    @GiaDinhNho:
                  </p>
                  <p class="text-sm font-medium text-red-600">
                    "Cả nhà mạnh khỏe, bình an suốt năm"
                  </p>
                </div>
              </div>
            </div> */}
            <div
              class="absolute inset-0 pointer-events-none"
              id="new-flower-container"
            >
              {/* <div
                class="absolute pointer-events-auto animate-bloom"
                style={{ top: "72%", left: "29%" }}
              >
                <div
                  class="group relative cursor-pointer"
                  onclick="this.classList.toggle('active')"
                >
                  <div class="w-16 h-16 rounded-full bg-blue-500 border-2 border-white shadow-lg flex items-center justify-center transform transition-transform group-hover:scale-110 flower-icon-bg relative z-10">
                    <span class="material-symbols-outlined text-white text-3xl">
                      cruelty_free
                    </span>
                  </div>
                  <div class="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl text-center z-20 tooltip-arrow border border-blue-200">
                    <p class="text-xs text-gray-500 mb-1 font-bold">
                      @Bạn vừa gửi:
                    </p>
                    <p class="text-sm font-medium text-blue-600 line-clamp-3">
                      "m"
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="absolute pointer-events-auto animate-bloom"
                style={{ top: "60%", left: "40%" }}
              >
                <div
                  class="group relative cursor-pointer active"
                  onclick="this.classList.toggle('active')"
                >
                  <div class="w-16 h-16 rounded-full bg-blue-500 border-2 border-white shadow-lg flex items-center justify-center transform transition-transform group-hover:scale-110 flower-icon-bg relative z-10">
                    <span class="material-symbols-outlined text-white text-3xl">
                      cruelty_free
                    </span>
                  </div>
                  <div class="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl text-center z-20 tooltip-arrow border border-blue-200">
                    <p class="text-xs text-gray-500 mb-1 font-bold">
                      @Bạn vừa gửi:
                    </p>
                    <p class="text-sm font-medium text-blue-600 line-clamp-3">
                      "a"
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="absolute pointer-events-auto animate-bloom"
                style={{ top: "24%", left: "61%" }}
              >
                <div
                  class="group relative cursor-pointer"
                  onclick="this.classList.toggle('active')"
                >
                  <div class="w-16 h-16 rounded-full bg-blue-500 border-2 border-white shadow-lg flex items-center justify-center transform transition-transform group-hover:scale-110 flower-icon-bg relative z-10">
                    <span class="material-symbols-outlined text-white text-3xl">
                      cruelty_free
                    </span>
                  </div>
                  <div class="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl text-center z-20 tooltip-arrow border border-blue-200">
                    <p class="text-xs text-gray-500 mb-1 font-bold">
                      @Bạn vừa gửi:
                    </p>
                    <p class="text-sm font-medium text-blue-600 line-clamp-3">
                      "q qqb"
                    </p>
                  </div>
                </div>
              </div> */}

              {flowers.map((flower) => (
                <div
                  key={flower.id}
                  className="absolute pointer-events-auto animate-bloom"
                  style={{ top: flower.top, left: flower.left }}
                >
                  <div className="group relative cursor-pointer">
                    <div
                      className={`w-16 h-16 rounded-full border-2 border-white shadow-lg 
  flex items-center justify-center group-hover:scale-110 transition
  ${flower.owner === "Khoa" ? "bg-blue-500" : "bg-pink-500"}`}
                    >
                      <span class="material-symbols-outlined text-white text-3xl">
                        local_florist
                      </span>
                    </div>
                    <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-4 bg-white rounded-xl shadow-xl text-center">
                      <p className="text-xs text-gray-500 mb-1 font-bold">
                        @{flower.owner} gửi gắm:
                      </p>

                      <p className="text-sm font-medium text-blue-600">
                        "{flower.text}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div class="absolute bottom-4 right-6 text-sm text-gray-400 italic bg-white/50 px-3 py-1 rounded-lg backdrop-blur-sm">
              *Chạm vào hoa để xem điều ước
            </div>
          </div>
        </div>
        {/* <div class="w-full max-w-[960px] px-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 class="text-2xl font-bold text-[#181112] dark:text-white flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">
              filter_vintage
            </span>
            Lời Chúc Đang Nở Rộ
          </h3>
          <div class="flex flex-wrap items-center gap-2">
            <button class="px-4 py-2 rounded-full bg-primary text-white font-bold text-sm shadow-md">
              Tất cả
            </button>
            <button class="px-4 py-2 rounded-full bg-white dark:bg-white/10 text-[#181112] dark:text-white border border-gray-200 dark:border-white/20 hover:border-primary font-medium text-sm transition-all">
              Sức Khỏe
            </button>
            <button class="px-4 py-2 rounded-full bg-white dark:bg-white/10 text-[#181112] dark:text-white border border-gray-200 dark:border-white/20 hover:border-primary font-medium text-sm transition-all">
              Tình Duyên
            </button>
            <button class="px-4 py-2 rounded-full bg-white dark:bg-white/10 text-[#181112] dark:text-white border border-gray-200 dark:border-white/20 hover:border-primary font-medium text-sm transition-all">
              Sự Nghiệp
            </button>
            <button class="px-4 py-2 rounded-full bg-white dark:bg-white/10 text-[#181112] dark:text-white border border-gray-200 dark:border-white/20 hover:border-primary font-medium text-sm transition-all">
              Bình An
            </button>
          </div>
        </div> */}
        <div class="w-full max-w-[1280px] px-6 mb-20 bg-white">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-auto">
            <div class="col-span-1 row-span-1 comic-card rounded-xl bg-white dark:bg-[#2a1518] p-5 flex flex-col gap-4 relative overflow-hidden group">
              <div class="absolute -right-6 -top-6 w-24 h-24 bg-yellow-100 rounded-full z-0 group-hover:scale-125 transition-transform duration-500"></div>
              <div class="relative z-10 flex justify-between items-start">
                <div class="flex items-center gap-2">
                  <div class="size-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <span class="material-symbols-outlined text-lg">work</span>
                  </div>
                  <span class="text-sm font-bold text-gray-500 dark:text-gray-400">
                    Sự Nghiệp
                  </span>
                </div>
                {/* <span class="text-xs font-medium text-gray-400">
                  2 phút trước
                </span> */}
              </div>
              <div class="relative z-10">
                <h4 class="text-xl font-bold text-[#181112] dark:text-white mb-2">
                  Thành công hơn trong việc nè
                </h4>
                <p class="text-base text-[#5c4a4d] dark:text-gray-300 italic leading-relaxed">
                  "Năm mới mong em sẽ có công việc như mong muốn, deadline luôn
                  hoàn thành trước hạn."
                </p>
              </div>
              <div class="relative z-10 mt-auto rounded-lg overflow-hidden border border-gray-100 dark:border-white/10 aspect-[2/3]">
                <div
                  class="w-full h-full bg-cover bg-center"
                  data-alt="Comic illustration of a horse wearing a tie working successfully in an office"
                  style={{
                    backgroundImage: `url(${Nhi})`,
                  }}
                ></div>
              </div>
              <div class="flex items-center gap-3 mt-2">
                <button class="flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-primary transition-colors">
                  <span class="material-symbols-outlined text-[18px]">
                    favorite
                  </span>{" "}
                  100000+
                </button>
                <div class="flex-1 h-[1px] bg-gray-100 dark:bg-white/10"></div>
                <span class="text-xs font-bold text-[#181112] dark:text-white">
                  @Khle
                </span>
              </div>
            </div>
            <div class="col-span-1 row-span-1 h-full min-h-[280px] flex items-center justify-center p-4">
              <div class="flower-bud group relative flex flex-col items-center justify-center gap-4 cursor-pointer">
                <div class="w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(244,37,71,0.4)] animate-pulse">
                  <span class="material-symbols-outlined text-white text-4xl">
                    local_florist
                  </span>
                </div>
                <div class="bg-white dark:bg-[#2a1518] px-4 py-2 rounded-full border border-primary/30 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  <span class="text-[10px] font-bold text-primary whitespace-nowrap">
                    Em là bông hoa xinh nhất trong khu vườn này á hehe
                  </span>
                </div>
                <div class="absolute top-full left-1/2 w-0.5 h-12 bg-green-300 -z-10 origin-top rotate-6"></div>
              </div>
            </div>
            <div class="col-span-1 row-span-1 comic-card rounded-xl bg-white dark:bg-[#2a1518] p-5 flex flex-col gap-4 relative overflow-hidden group">
              <div class="absolute -left-6 -bottom-6 w-32 h-32 bg-pink-100 rounded-full z-0 group-hover:scale-125 transition-transform duration-500"></div>
              <div class="relative z-10 flex justify-between items-start">
                <div class="flex items-center gap-2">
                  <div class="size-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center">
                    <span class="material-symbols-outlined text-lg">
                      favorite
                    </span>
                  </div>
                  <span class="text-sm font-bold text-gray-500 dark:text-gray-400">
                    Tình Duyên
                  </span>
                </div>
              </div>
              <div class="relative z-10">
                <h4 class="text-xl font-bold text-[#181112] dark:text-white mb-2">
                  Hạnh phúc bên anh.
                </h4>
                <p class="text-base text-[#5c4a4d] dark:text-gray-300 italic leading-relaxed">
                  "Mong năm Ngọ chúng mình iu nhau nhìu hơn nè. Hy vọng sẽ có
                  thêm nhiều cái tết cùm nhau nữa nhé."
                </p>
              </div>
              <div class="relative z-10 mt-auto rounded-lg overflow-hidden border border-gray-100 dark:border-white/10 aspect-[2/3]">
                <div
                  class="w-full h-full bg-cover bg-center"
                  data-alt="Cute comic illustration of a couple holding hands under peach blossoms"
                  style={{
                    backgroundImage: `url(${Nhi2})`,
                  }}
                ></div>
              </div>
              <div class="flex items-center gap-3 mt-2">
                <button class="flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-primary transition-colors">
                  <span class="material-symbols-outlined text-[18px] text-pink-500">
                    favorite
                  </span>{" "}
                  10000+
                </button>
                <div class="flex-1 h-[1px] bg-gray-100 dark:bg-white/10"></div>
                <span class="text-xs font-bold text-[#181112] dark:text-white">
                  @Khle
                </span>
              </div>
            </div>
            <div class="col-span-1 row-span-1 h-full min-h-[280px] flex items-center justify-center p-4">
              <div class="flower-bud group relative flex flex-col items-center justify-center gap-4 cursor-pointer">
                <div class="w-20 h-20 rounded-full bg-orange-400 flex items-center justify-center shadow-[0_0_20px_rgba(251,146,60,0.4)]">
                  <span class="material-symbols-outlined text-white text-3xl">
                    attach_money
                  </span>
                </div>
                <div class="bg-white dark:bg-[#2a1518] px-4 py-2 rounded-full border border-orange-200 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  <span class="text-sm font-bold text-orange-500 whitespace-nowrap">
                    Tài lộc ẩn giấu
                  </span>
                </div>
                <div class="absolute top-full left-1/2 w-0.5 h-8 bg-green-400 -z-10 origin-top -rotate-12"></div>
              </div>
            </div>
            <div class="col-span-1 sm:col-span-2 row-span-1 comic-card rounded-xl bg-white dark:bg-[#2a1518] p-5 flex flex-row gap-6 relative overflow-hidden group">
              <div class="absolute right-0 top-0 w-1/2 h-full bg-green-50/50 dark:bg-green-900/10 z-0"></div>
              <div class="relative z-10 flex-1 flex flex-col">
                <div class="flex items-center gap-2 mb-3">
                  <div class="size-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <span class="material-symbols-outlined text-lg">
                      health_and_safety
                    </span>
                  </div>
                  <span class="text-sm font-bold text-gray-500 dark:text-gray-400">
                    Sức Khỏe
                  </span>
                </div>
                <h4 class="text-xl font-bold text-[#181112] dark:text-white mb-2">
                  Bình An Cho Em
                </h4>
                <p class="text-base text-[#5c4a4d] dark:text-gray-300 italic leading-relaxed mb-4">
                  "Mong em luôn khỏe mạnh bên cạnh anh, cười nhiều hơn mỗi ngày.
                  Năm mới không cần gì cao sang, chỉ cần sức khoẻ dồi dào nè."
                </p>
                <div class="mt-auto flex items-center justify-between">
                  <span class="text-xs font-bold text-[#181112] dark:text-white">
                    @Khle
                  </span>
                  <button class="flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-green-600 transition-colors">
                    <span class="material-symbols-outlined text-[18px] text-pink-500">
                      favorite
                    </span>{" "}
                    10000+
                  </button>
                </div>
              </div>
              <div class="relative z-10 w-1/3 hidden sm:block rounded-lg overflow-hidden border border-gray-100 dark:border-white/10">
                <div
                  class="w-full h-full bg-cover bg-center"
                  data-alt="Illustration of a happy family eating Tet dinner together"
                  style={{
                    backgroundImage: `url(${Nhi3})`,
                  }}
                ></div>
              </div>
            </div>
            <div class="col-span-1 row-span-1 h-full min-h-[280px] flex items-center justify-center p-4">
              <div class="flower-bud group relative flex flex-col items-center justify-center gap-4 cursor-pointer">
                <div class="w-20 h-20 rounded-full bg-purple-400 flex items-center justify-center shadow-[0_0_20px_rgba(192,132,252,0.4)]">
                  <span class="material-symbols-outlined text-white text-3xl">
                    school
                  </span>
                </div>
                <div class="bg-white dark:bg-[#2a1518] px-4 py-2 rounded-full border border-purple-200 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  <span class="text-sm font-bold text-purple-500 whitespace-nowrap">
                    Học hành tấn tới
                  </span>
                </div>
              </div>
            </div>
            <div class="col-span-1 row-span-1 comic-card rounded-xl bg-white dark:bg-[#2a1518] p-5 flex flex-col gap-4 relative overflow-hidden group border-primary">
              <div class="absolute inset-0 border-4 border-primary/10 rounded-xl pointer-events-none"></div>
              <div class="relative z-10 flex justify-between items-start">
                <div class="flex items-center gap-2">
                  <div class="size-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                    <span class="material-symbols-outlined text-lg">
                      celebration
                    </span>
                  </div>
                  <span class="text-sm font-bold text-gray-500 dark:text-gray-400">
                    Thư cho em
                  </span>
                </div>
              </div>
              <div class="relative z-10 text-center py-4">
                <h4 class="text-2xl font-black text-primary mb-2 uppercase tracking-tight transform -rotate-2">
                  Vạn Sự Như Ý
                </h4>
                <p class="text-sm text-[#5c4a4d] dark:text-gray-300">
                  Hi em iu của anh, năm mới rồi chúc em có được những gì mình
                  muốn chúc em luôn vui vẻ với những gì em đang có và hơn hết
                  anh mong bênh cạnh anh em sẽ luôn hạnh phúc nè. Cười nhiều hơn
                  nữa nha vì anh muốn thấy em với đôi mắt tươi vui khi cười nè.
                  Luv u, my girl.
                </p>
              </div>
              <div class="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div>
            </div>
          </div>
          {/* <div class="flex justify-center mt-12">
            <button class="group flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-[#2a1518] border border-gray-200 dark:border-gray-700 hover:border-primary text-[#181112] dark:text-white font-bold transition-all shadow-sm hover:shadow-md">
              <span class="material-symbols-outlined group-hover:animate-spin">
                refresh
              </span>
              <span>Tưới Thêm Hoa Mới</span>
            </button>
          </div> */}
        </div>
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
                Gieo Mầm Thành Tựu
              </h2>
              <p class="text-lg text-[#5c4a4d] dark:text-gray-300 max-w-lg">
                Viết xuống thành tựu của bạn, để chúng mình gửi vào vũ trụ mùa
                xuân.
              </p>
              <div class="w-full bg-white dark:bg-[#221013] p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-white/5 flex flex-col gap-6 relative overflow-hidden">
                <div
                  // class="absolute inset-0 bg-white/95 dark:bg-[#221013]/95 z-20 flex flex-col items-center justify-center opacity-0 pointer-events-none transition-opacity duration-500"
                  className={`absolute inset-0 z-20 flex bg-white/95 dark:bg-[#221013]/95 flex-col items-center justify-center  duration-500 transition-opacity ${
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
                    Thành tựu của bạn đang nở hoa trong khu vườn...
                  </p>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => {
                        setShowSuccess(false);
                        gardenRef.current?.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }}
                      className="px-6 py-2 bg-primary text-white rounded-full font-bold shadow-comic hover:shadow-none transition-all"
                    >
                      Xem Vườn Hoa
                    </button>

                    <button
                      onClick={() => setShowSuccess(false)}
                      className="px-6 py-2 bg-white text-primary border border-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all"
                    >
                      Để Sau
                    </button>
                  </div>
                </div>
                <div class="flex flex-wrap justify-center gap-3">
                  <label class="cursor-pointer">
                    <input
                      className="peer sr-only"
                      name="category"
                      type="radio"
                      value="Khoa"
                      checked={owner === "Khoa"}
                      onChange={() => setOwner("Khoa")}
                    />
                    <div class="px-4 py-2 rounded-lg border border-gray-200 dark:border-white/20 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all text-sm font-bold flex items-center gap-2 text-gray-500">
                      {/* <span class="material-symbols-outlined text-lg">
                        health_and_safety
                      </span>{" "} */}
                      Khoa
                    </div>
                  </label>
                  <label class="cursor-pointer">
                    <input
                      className="peer sr-only"
                      name="category"
                      type="radio"
                      value="Nhi"
                      checked={owner === "Nhi"}
                      onChange={() => setOwner("Nhi")}
                    />
                    <div class="px-4 py-2 rounded-lg border border-gray-200 dark:border-white/20 peer-checked:bg-pink-500 peer-checked:text-white peer-checked:border-pink-500 transition-all text-sm font-bold flex items-center gap-2 text-gray-500">
                      {/* <span class="material-symbols-outlined text-lg">
                        favorite
                      </span>{" "} */}
                      Nhi
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
      </div>
      <Footer></Footer>
    </>
  );
};

export default NewYear;
