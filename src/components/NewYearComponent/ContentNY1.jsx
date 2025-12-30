const ContentNY1 = () => {
  return (
    <>
      <div class="w-full max-w-[1280px] px-6 mb-16">
        <div class="relative w-full rounded-xl overflow-hidden min-h-[500px] flex flex-col items-center justify-center text-center p-8 md:p-16 border-2 border-primary/20 bg-white dark:bg-[#2a1518] shadow-dreamy">
          <div class="absolute inset-0 z-0">
            <div
              class="w-full h-full bg-cover bg-center opacity-30 dark:opacity-20"
              data-alt="Dreamy watercolor background with floating peach blossom petals and soft clouds"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDa-Z67pAB---ae1WSK1Hj1Lh8q4F49UzW514OPD6iEnzQNNGfieCxfZrL28pXAOMi3R24F96_AeajCReqPuzTWk1c7DUMgSpIX6BdaEbCu-WrBlpqtNnydzZKHY4db-a-Ju-buyl1HKGx5jhEczkp4aOu8kHcgXXjBQmV28V2jRHoZ7fdgFuSUQI61yx0yNAVzDenfVvxy0R1fEGllU9767cITAW16poziYGWzFAGnGBXFy3UsTLQScIfwoL4ULUMDgVjZdTyYx4o')",
              }}
            ></div>
            <div class="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white dark:from-black/0 dark:via-black/50 dark:to-[#221013]"></div>
          </div>
          <div class="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm mb-2">
              <span class="material-symbols-outlined text-sm">stars</span>
              <span class="text-sm font-bold uppercase tracking-wider">
                Chào Xuân Mới 2026
              </span>
            </div>
            <h1 class="text-5xl md:text-7xl font-black text-[#181112] dark:text-white leading-[1.1] tracking-tight drop-shadow-sm">
              Vườn Ước Mơ <br></br>
              <span class="text-primary italic font-serif">Năm Bính Ngọ</span>
            </h1>
            <p class="text-lg md:text-xl text-[#5c4a4d] dark:text-gray-300 max-w-2xl font-medium leading-relaxed">
              Chào mừng Nhi đến với khu vườn thành tựu. Hãy gieo những hạt mầm
              thành tựu của Nhi vào đây để khu vườn nở rộ hơn nhé. Chạm vào
              những nụ hoa đang hé nở để xem những thành tựu của mình nè.
            </p>
            {/* <div class="flex flex-wrap justify-center gap-4 mt-4">
              <button class="flex items-center justify-center h-12 px-8 rounded-full bg-primary text-white font-bold shadow-comic hover:scale-105 transition-transform">
                Khám Phá Khu Vườn
              </button>
              <button class="flex items-center justify-center h-12 px-8 rounded-full bg-white text-[#181112] border-2 border-[#181112] font-bold shadow-sm hover:bg-gray-50 transition-colors">
                Xem Video Giới Thiệu
              </button>
            </div> */}
          </div>
          <div class="absolute bottom-4 right-4 md:bottom-10 md:right-10 w-24 md:w-32 aspect-square rounded-full border-2 border-dashed border-primary/40 flex items-center justify-center rotate-12 bg-white/80 dark:bg-black/80 backdrop-blur">
            <div class="text-center">
              <span class="block text-2xl md:text-3xl font-bold text-primary">
                2026
              </span>
              <span class="text-xs font-bold uppercase tracking-widest text-[#181112] dark:text-white">
                Bính Ngọ
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentNY1;
