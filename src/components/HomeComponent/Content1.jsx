const Content1 = () => {
  return (
    <>
      <div class="layout-container flex w-full grow flex-col py-8 md:py-16 px-4 md:px-10">
        <div class="w-full max-w-[1280px] mx-auto">
          <div class="bg-white border-[4px] border-ink shadow-comic p-4 md:p-8 relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4 transform rotate-12">
              <span class="material-symbols-outlined text-christmas-green text-6xl opacity-20">
                ac_unit
              </span>
            </div>
            <div class="absolute bottom-0 left-0 p-4 transform -rotate-12">
              <span class="material-symbols-outlined text-christmas-gold text-6xl opacity-20">
                star
              </span>
            </div>
            <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative z-10">
              <div class="w-full lg:w-1/2 relative">
                <div
                  class="relative w-full aspect-[4/3] bg-center bg-no-repeat bg-cover border-[3px] border-ink shadow-comic bg-gray-200"
                  style={{
                    backgroundImage:
                      "url('https://scontent.fhan5-3.fna.fbcdn.net/v/t1.15752-9/593212249_1146621630563795_7981322303993727563_n.png?stp=dst-png_s480x480&_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Lj8S5JoUBP0Q7kNvwGMy4Cf&_nc_oc=AdmhOzpYZTkOyTBIe5OJV3M3AKJMwglEQrONsx-TIJhToUioAd3K_RYvChqY-UsHgGwyQAJmzAbuVFdlQMBNo_Ep&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fhan5-3.fna&oh=03_Q7cD4AErdn4dFvKOcrASOi5eXgb16xXEa0qG7GOAU3cyRgk9Bg&oe=6965DE9C')",
                  }}
                >
                  <div class="absolute -top-4 -left-4 bg-christmas-gold border-[3px] border-ink px-4 py-1 shadow-comic-sm transform -rotate-2">
                    <span class="font-comic text-xl text-ink">CHAPTER 25</span>
                  </div>
                  <div class="absolute bottom-4 right-4 bg-white border-[3px] border-ink px-3 py-2 flex items-center gap-2 shadow-comic-sm">
                    <span class="material-symbols-outlined text-christmas-red">
                      favorite
                    </span>
                    <span class="font-bold text-sm">Main Character</span>
                  </div>
                </div>
                <div class="absolute -top-6 right-10 text-christmas-green animate-bounce">
                  <span class="material-symbols-outlined text-3xl">
                    ac_unit
                  </span>
                </div>
              </div>
              <div class="w-full lg:w-1/2 flex flex-col gap-6">
                <div class="relative bg-white border-[3px] border-ink p-6 rounded-[2rem] shadow-comic-sm mb-4">
                  <div class="absolute top-full left-10 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-ink"></div>
                  <div class="absolute top-full left-[43px] w-0 h-0 border-l-[17px] border-l-transparent border-r-[17px] border-r-transparent border-t-[17px] border-t-white -mt-[3px] z-10"></div>
                  <div class="flex items-center gap-2 mb-2">
                    <span class="material-symbols-outlined text-christmas-red">
                      celebration
                    </span>
                    <span class="font-bold text-christmas-green uppercase tracking-wider text-xs">
                      Season's Greetings
                    </span>
                  </div>
                  <h1 class="text-5xl md:text-6xl lg:text-7xl font-comic text-ink leading-[0.9]">
                    MERRY <span class="text-christmas-red">CHRISMAST</span>
                    <br />
                    <span class="text-christmas-green">NHI!</span>
                  </h1>
                </div>
                <div class="bg-paper border-[3px] border-ink p-5 shadow-comic-sm mt-4 transform rotate-1">
                  <p class="text-lg font-medium leading-relaxed font-comic tracking-wide text-ink">
                    "Chào mừng Lan đến với tuổi 25 rực rỡ! Giữa không khí Giáng
                    sinh ấm áp, mong bạn luôn tỏa sáng như ngôi sao trên đỉnh
                    cây thông Noel. Hãy viết tiếp câu chuyện tuyệt vời của mình
                    nhé!"
                  </p>
                </div>
                <div class="flex flex-wrap gap-4 pt-4">
                  <button class="flex cursor-pointer items-center justify-center h-14 px-8 bg-christmas-red text-white text-lg font-comic tracking-wider border-[3px] border-ink shadow-comic hover:shadow-comic-hover hover:translate-y-1 hover:translate-x-1 transition-all">
                    <span>GỬI LỜI CHÚC</span>
                  </button>
                  <button class="flex cursor-pointer items-center justify-center h-14 px-8 bg-white text-ink text-lg font-comic tracking-wider border-[3px] border-ink shadow-comic hover:shadow-comic-hover hover:translate-y-1 hover:translate-x-1 transition-all">
                    <span>XEM ALBUM</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8 grid grid-cols-3 gap-4">
            <div class="bg-christmas-green border-[3px] border-ink p-4 shadow-comic-sm text-white text-center rounded-lg">
              <p class="font-comic text-3xl">LEVEL 25</p>
              <p class="text-xs font-bold uppercase">Unlocked</p>
            </div>
            <div class="bg-white border-[3px] border-ink p-4 shadow-comic-sm text-center rounded-lg transform -translate-y-2">
              <p class="font-comic text-3xl text-christmas-red">100+</p>
              <p class="text-xs font-bold uppercase">Tin nhắn</p>
            </div>
            <div class="bg-christmas-gold border-[3px] border-ink p-4 shadow-comic-sm text-center rounded-lg">
              <p class="font-comic text-3xl">MAX</p>
              <p class="text-xs font-bold uppercase">Yêu thương</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content1;
