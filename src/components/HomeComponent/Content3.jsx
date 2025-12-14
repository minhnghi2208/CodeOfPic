import pic1 from "../../assets/pic/pic1.jpg";
import pic2 from "../../assets/pic/pic2.jpg";
import pic3 from "../../assets/pic/pic3.jpg";
import pic4 from "../../assets/pic/pic4.jpg";
import pic5 from "../../assets/pic/pic5.jpg";
import pic8 from "../../assets/pic/pic8.jpg";
import pic11 from "../../assets/pic/pic11.jpg";
import pic10 from "../../assets/pic/pic10.jpg";

const Content3 = () => {
  return (
    <>
      <div class="w-full bg-paper py-16" id="gallery">
        <div class="flex justify-center w-full px-4">
          <div class="flex flex-col items-center gap-4 text-center max-w-[720px] mb-12">
            <div class="inline-block bg-christmas-red text-white px-4 py-1 border-2 border-ink shadow-comic-sm transform rotate-2">
              <span class="font-comic text-lg tracking-wider">
                SPECIAL EDITION
              </span>
            </div>
            <h2 class="text-5xl md:text-6xl font-comic text-ink drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
              BEST PHOTO 
            </h2>
            <div class="w-full h-2 bg-ink rounded-full mt-2 relative">
              <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-paper px-4">
                <span class="material-symbols-outlined text-christmas-green">
                  park
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="w-full max-w-[1280px] px-4 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {/* Column 1 */}
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="w-full aspect-[3/4] border-[3px] border-ink shadow-comic bg-white p-2 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div
                    className="w-full h-full bg-cover bg-center border border-ink"
                    style={{
                      backgroundImage: `url(${pic1})`,
                    }}
                  />
                </div>

                <div className="w-full aspect-square border-[3px] border-ink shadow-comic bg-white p-2 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div
                    className="w-full h-full bg-cover bg-center border border-ink"
                    style={{
                      backgroundImage: `url(${pic8})`,
                    }}
                  />
                  <div className="text-center font-comic pt-1 text-sm">
                    YUMMY!
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-4 md:gap-6 md:pt-12">
                <div className="w-full aspect-square border-[3px] border-ink shadow-comic bg-white p-2 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div
                    className="w-full h-full bg-cover bg-center border border-ink"
                    style={{
                      backgroundImage: `url(${pic2})`,
                    }}
                  />
                </div>

                <div className="w-full aspect-[3/4] border-[3px] border-ink shadow-comic bg-white p-2 transform -rotate-1 hover:rotate-0 transition-transform duration-300 relative">
                  <div
                    className="w-full h-full bg-cover bg-center border border-ink"
                    style={{
                      backgroundImage: `url(${pic3})`,
                    }}
                  />
                  <div className="absolute -bottom-3 -right-3 bg-white border-2 border-ink px-2 py-1 font-comic text-xs shadow-sm">
                    Thinking...
                  </div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="w-full aspect-[3/4] border-[3px] border-ink shadow-comic bg-white p-2 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div
                    className="w-full h-full bg-cover bg-center border border-ink"
                    style={{
                      backgroundImage: `url(${pic4})`,
                    }}
                  />
                </div>

                <div className="w-full aspect-square border-[3px] border-ink shadow-comic bg-white p-2 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div
                    className="w-full h-full bg-cover bg-center border border-ink"
                    style={{
                      backgroundImage: `url(${pic10})`,
                    }}
                  />
                  <div className="text-center font-comic pt-1 text-sm">
                    SURPRISE!
                  </div>
                </div>
              </div>

              {/* Column 4 */}
              <div className="flex flex-col gap-4 md:gap-6 md:pt-12">
                <div className="w-full aspect-square border-[3px] border-ink shadow-comic bg-white p-2 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div
                    className="w-full h-full bg-cover bg-center border border-ink"
                    style={{
                      backgroundImage: `url(${pic5})`,
                    }}
                  />
                </div>

                <div className="w-full aspect-[3/4] border-[3px] border-ink shadow-comic bg-white p-2 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div
                    className="w-full h-full bg-cover bg-center border border-ink"
                    style={{
                      backgroundImage: `url(${pic11})`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content3;
