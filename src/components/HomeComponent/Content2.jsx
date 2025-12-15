const Content2 = () => {
  return (
    <>
      <div
        class="w-full bg-christmas-red border-y-[4px] border-ink py-16"
        id="wishes"
      >
        <div class="layout-container flex justify-center w-full">
          <div class="w-full max-w-[1280px] px-4 md:px-10">
            <div class="flex justify-center mb-12">
              <div class="bg-white border-[4px] border-ink px-8 py-3 shadow-comic transform -rotate-2">
                <h2 class="text-4xl md:text-5xl font-comic text-ink uppercase">
                  Wishlist của Khle hehe
                </h2>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-white border-[3px] border-ink shadow-comic p-0 flex flex-col h-full overflow-hidden group hover:-translate-y-2 transition-transform duration-200">
                <div class="bg-christmas-green border-b-[3px] border-ink p-2 flex justify-between items-center">
                  <span class="font-comic text-white tracking-widest text-lg">
                    WISH #01
                  </span>
                  <span class="material-symbols-outlined text-white">park</span>
                </div>
                <div class="p-6 flex flex-col gap-4 grow relative">
                  {/* <div class="size-16 rounded-full border-[3px] border-ink bg-red-100 flex items-center justify-center absolute -top-10 right-4 z-10 shadow-sm">
                    <span class="material-symbols-outlined text-3xl text-christmas-red">
                      favorite
                    </span>
                  </div> */}
                  <h3 class="text-2xl font-comic mt-2">Date with Nhi</h3>
                  <div class="bg-blue-50 border-2 border-dashed border-ink p-4 rounded-lg relative">
                    <p class="text-ink font-medium leading-relaxed">
                      "Mong chúng mình coá nhiều buổi đi chơi hơn và hiểu nhau
                      hơn nè!"
                    </p>
                  </div>
                </div>
              </div>
              <div class="bg-white border-[3px] border-ink shadow-comic p-0 flex flex-col h-full overflow-hidden group hover:-translate-y-2 transition-transform duration-200">
                <div class="bg-christmas-gold border-b-[3px] border-ink p-2 flex justify-between items-center">
                  <span class="font-comic text-ink tracking-widest text-lg">
                    WISH #02
                  </span>
                  <span class="material-symbols-outlined text-ink">
                    sentiment_satisfied
                  </span>
                </div>
                <div class="p-6 flex flex-col gap-4 grow relative">
                  {/* <div class="size-16 rounded-full border-[3px] border-ink bg-yellow-100 flex items-center justify-center absolute -top-10 right-4 z-10 shadow-sm">
                    <span class="material-symbols-outlined text-3xl text-yellow-600">
                      emoji_events
                    </span>
                  </div> */}
                  <h3 class="text-2xl font-comic mt-2">
                    Mong Nhi có nhiều niềm zui hơn
                  </h3>
                  <div class="bg-yellow-50 border-2 border-dashed border-ink p-4 rounded-lg relative">
                    <p class="text-ink font-medium leading-relaxed">
                      "Cười nhiều nhé! Mong nụ cười luôn nở trên môi Nhi mỗi
                      ngày, dù trời có mưa hay nắng ấm hẹ hẹ"
                    </p>
                  </div>
                </div>
              </div>
              <div class="bg-white border-[3px] border-ink shadow-comic p-0 flex flex-col h-full overflow-hidden group hover:-translate-y-2 transition-transform duration-200">
                <div class="bg-christmas-dark-green border-b-[3px] border-ink p-2 flex justify-between items-center">
                  <span class="font-comic text-white tracking-widest text-lg">
                    WISH #03
                  </span>
                  <span class="material-symbols-outlined text-white">star</span>
                </div>
                <div class="p-6 flex flex-col gap-4 grow relative">
                  {/* <div class="size-16 rounded-full border-[3px] border-ink bg-green-100 flex items-center justify-center absolute -top-10 right-4 z-10 shadow-sm">
                    <span class="material-symbols-outlined text-3xl text-christmas-green">
                      trending_up
                    </span>
                  </div> */}
                  <h3 class="text-2xl font-comic mt-2">
                    coá nhiều mùa Giáng sinh zới Nhi hơn
                  </h3>
                  <div class="bg-green-50 border-2 border-dashed border-ink p-4 rounded-lg relative">
                    <p class="text-ink font-medium leading-relaxed">
                      "Mong mùa giáng sinh tới lại được nắm tay Nhi hehe"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="flex justify-center mt-12">
              <button class="bg-white text-ink font-comic text-xl px-8 py-3 border-[3px] border-ink shadow-comic hover:bg-gray-100 transition-colors">
                XEM TẤT CẢ LỜI CHÚC
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content2;
