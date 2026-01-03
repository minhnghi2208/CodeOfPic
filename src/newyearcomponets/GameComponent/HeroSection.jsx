const HeroSection = () => {
  return (
    <>
      {/* <section class="relative px-4 py-12 lg:px-20 lg:py-20 flex justify-center">
        <div class="w-full max-w-6xl">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="flex flex-col gap-6 z-10">
              <div class="inline-flex items-center gap-2 rounded-full border-2 border-black bg-white px-4 py-1.5 w-fit shadow-comic">
                <span class="material-symbols-outlined text-primary text-sm">
                  auto_awesome
                </span>
                <span class="text-xs font-bold uppercase tracking-wider">
                  Phiên bản đặc biệt  Năm Mới
                </span>
              </div>
              <h1 class="text-5xl lg:text-7xl font-black leading-[0.9] text-[#181411] drop-shadow-sm">
                CHÚC MỪNG <br />
                <span class="text-primary text-6xl lg:text-8xl relative inline-block">
                  NĂM MỚI
                  <span class="material-symbols-outlined absolute -top-8 -right-8 text-comic-red text-5xl animate-pulse">
                    explosion
                  </span>
                </span>
                <br />
                2026
              </h1>
              <p class="text-lg font-medium text-gray-700 max-w-md border-l-4 border-primary pl-4 bg-white/50 py-2">
                Mở ra trang truyện mới của cuộc đời bạn. Khám phá những tấm
                thiệp phong cách comic độc đáo và lưu giữ kỷ niệm mùa lễ hội!
              </p>
              <div class="flex flex-wrap gap-4 pt-4">
                <button class="h-14 px-8 rounded-full bg-primary border-2 border-black text-white font-black text-lg shadow-comic hover:shadow-comic-hover hover:-translate-y-1 transition-all flex items-center gap-2">
                  <span class="material-symbols-outlined">menu_book</span>
                  MỞ ALBUM
                </button>
                <button class="h-14 px-8 rounded-full bg-white border-2 border-black text-[#181411] font-bold text-lg shadow-comic hover:shadow-comic-hover hover:-translate-y-1 transition-all">
                  GỬI LỜI CHÚC
                </button>
              </div>
            </div>

            <div class="relative">
              <div class="absolute inset-0 bg-comic-yellow rounded-full blur-3xl opacity-20 transform translate-x-10 translate-y-10"></div>
              <div class="relative grid grid-cols-2 gap-4 p-4 bg-white border-4 border-black shadow-comic rotate-2">
                <div class="col-span-2 aspect-[2/1] bg-gray-100 border-2 border-black overflow-hidden relative group">
                  <div
                    class="absolute inset-0 bg-cover bg-center"
                    data-alt="Comic panel showing fireworks and celebration"
                    // style="
                    //     background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsspT14QiZ9Ltunp_1jMZCadYUK6YxcceQLAkFDoUPkSs8eNvSmuC_k_UA_FeCR0in_EM3xWgml5Vxki5Ev8KMw1yQBUQR5hp_ImUyi8bitHmYkj4aIB7U_Rtj6J0gXFj-2kXPSVGPzJb_YucbGD1jrqvDPksKfyMMKdOu4oAstvtA8HpVNzAN_bapyn4EZq39TANnOMouCDKPikjLJYy9nWzUv_HslwFKBUBmQoM-UarEzxwbEveUNEtpumDi-I1QKUIp7XwkQ44');
                    //   "
                  ></div>
                  <div class="absolute top-2 left-2 bg-white border-2 border-black px-3 py-1 text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    Bùm!
                  </div>
                </div>
                <div class="aspect-square bg-gray-100 border-2 border-black overflow-hidden relative">
                  <div
                    class="absolute inset-0 bg-cover bg-center"
                    data-alt="Comic panel showing a Noel character waving"
                    // style="
                    //     background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUseBGd1Dp4KDm-IYPV-kfd9bbRGbghfvfsGA7Ly75Dt5Mjs-1otu7XHK0HT8CL4IubITZIR3zFcJWgp0fL6Zw7xd9I41ipoNztSXT77F3fYWjRGByBCUudo3eZ1SpmPJ81mA8Qa51G-CBw8Exi8W_HygIZqTX8rDpHgGnYivfNbNR0q46m0-3dZ7OoD04DmMgLXx3UWfkwklQSh7qxyxwzLzXNLW5pwzmt694Ouv0fgUc_bKn6yKDWypHtVAvMmecxUTq24EpoOE');
                    //   "
                  ></div>
                </div>
                <div class="aspect-square bg-primary border-2 border-black flex items-center justify-center p-4">
                  <p class="text-white font-black text-2xl text-center leading-tight uppercase">
                    Happy <br />
                    2026!
                  </p>
                </div>
                <div class="absolute -bottom-6 -left-6 bg-white border-2 border-black rounded-full p-2 shadow-comic rotate-12 z-10">
                  <span class="material-symbols-outlined text-4xl text-comic-red">
                    verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section class="w-full max-w-4xl mx-auto flex flex-col items-center text-center py-16 lg:py-24 relative overflow-hidden lg:overflow-visible">
        <div class="relative z-10 px-4">
          <div class="mb-4 inline-flex items-center gap-2 bg-secondary/30 px-4 py-1.5 rounded-full border-2 border-secondary/50">
            <span class="material-symbols-outlined text-primary text-sm">
              celebration
            </span>
            <span class="text-xs font-bold text-primary tracking-widest uppercase">
              Chào Xuân Mới
            </span>
          </div>
          <h1 class="text-4xl md:text-6xl font-black text-[#181112] uppercase leading-tight drop-shadow-comic mb-4">
            Thử Tài
            <span class="text-primary inline-block relative">
              Đố Vui Tết
              <svg
                class="absolute w-full h-3 -bottom-1 left-0 text-secondary"
                fill="currentColor"
                viewBox="0 0 100 10"
              >
                <path d="M0 5 Q 50 10 100 5 L 100 8 Q 50 13 0 8 Z"></path>
              </svg>
            </span>
            <br class="hidden md:block" />
            Rinh Quà <span class="text-tet-green">Bính Ngọ</span>
          </h1>
          <p class="text-lg md:text-xl font-medium text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Chào mừng Nhi đến với thử thách 10 câu hỏi thú vị về phong tục Tết
            cổ truyền. Hãy cùng chú Ngựa Bính Ngọ khám phá văn hóa và nhận lì xì
            may mắn nhé!
          </p>
        </div>
        <div class="relative w-full max-w-lg mx-auto h-64 md:h-80 flex items-center justify-center mb-10">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-64 h-64 bg-yellow-100 rounded-full border-2 border-dashed border-secondary animate-[spin_10s_linear_infinite]"></div>
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-52 h-52 bg-red-50 rounded-full border-2 border-dashed border-primary animate-[spin_15s_linear_infinite_reverse]"></div>
          </div>
          <div class="relative z-10 w-40 h-40 md:w-56 md:h-56">
            <div class="absolute inset-0 bg-secondary rounded-full border-4 border-black translate-x-2 translate-y-2"></div>
            <div class="absolute inset-0 bg-white rounded-full border-4 border-black overflow-hidden flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform">
              <img
                alt="Year of the Horse Mascot"
                class="w-full h-full object-cover transform scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhBWtAtk_TMEha-DLbwXy4ZvbRsD79JddqmCGaT-EuKD1tXVehrh_BwlQ7CfDTIBm66NhVF8GII4sxuwNDSIuoJIheMvshqzteEKMACMvqlPulGW5sPYr4NFoQLQx7b4ck51TnI5NuVY24SDQLr2j9AQ52MtDF_LhQWnZgIkXnV2oslDTo02fDcOeN9UhdxmAYm-J4W_MRT4D5jcgDHxLGnsYxcn-XXHXziPYlMwEcKOxuMbA92lK-s7WHokLCXVp1UutC75c10Hc"
              />
            </div>
            <div class="absolute -top-6 -right-12 md:-right-16 bg-white border-2 border-black p-3 rounded-xl shadow-comic rotate-6 z-20 hidden sm:block">
              <p class="text-xs font-bold">
                Sẵn sàng chưa?
                <br />
                Lét gâu! 🐎
              </p>
              <div class="absolute bottom-[-6px] left-4 w-3 h-3 bg-white border-b-2 border-r-2 border-black rotate-45"></div>
            </div>
          </div>
          <span class="material-symbols-outlined text-4xl text-primary absolute top-10 left-10 md:left-20 animate-bounce">
            local_florist
          </span>
          <span class="material-symbols-outlined text-4xl text-secondary absolute bottom-10 right-10 md:right-20 animate-bounce delay-300">
            light_mode
          </span>
        </div>
        <a
          class="group relative inline-flex items-center justify-center px-10 py-4 bg-primary text-white text-xl font-black uppercase tracking-wider border-2 border-black rounded-xl shadow-[6px_6px_0px_0px_#181112] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#181112] active:translate-y-[6px] active:shadow-none transition-all"
          href="#game-area"
        >
          <span class="mr-3">Bắt Đầu Ngay</span>
          <span class="material-symbols-outlined text-2xl group-hover:translate-y-1 transition-transform">
            arrow_downward
          </span>
        </a>
      </section>
    </>
  );
};

export default HeroSection;
