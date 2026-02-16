import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useNavigate } from "react-router-dom";
const LoiChuc = () => {
  const navigate = useNavigate();

  const goToLink = (link) => {
    navigate(link);
  };
  return (
    <>
      <Header></Header>
      <main class="relative">
        <div class="absolute inset-0 pointer-events-none overflow-hidden halftone"></div>

        <section class="relative px-6 pt-12 pb-20 max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-6 z-10">
              <span class="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                Kỷ Nguyên Mộc Mã
              </span>
              <h2 class="text-6xl md:text-8xl font-black leading-none italic">
                CHÀO XUÂN <br /> <span class="text-primary">BÍNH NGỌ</span>
              </h2>
              <p class="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
                Chào đón năm mới với vó ngựa gỗ thanh tao, lướt qua những rừng
                hoa đào thắm. Một khởi đầu rực rỡ, kiêu hãnh và đầy nhựa sống
                đang chờ đón bạn.
              </p>
              <div class="flex gap-4">
                <button
                  onClick={() => goToLink("/que")}
                  class="comic-border bg-primary text-white px-8 py-4 font-bold text-lg hover:-translate-y-1 transition-all"
                >
                  Gieo Quẻ Ngay
                </button>
              </div>
            </div>
            <div class="relative group">
              <div class="absolute -inset-4 bg-primary/20 rounded-xl rotate-3 group-hover:rotate-0 transition-transform"></div>
              <div class="relative comic-border aspect-[4/3] overflow-hidden rounded-xl bg-white">
                <img
                  alt="Digital illustration of a wood horse galloping through peach blossoms"
                  class="w-full h-full object-cover"
                  data-alt="Digital illustration of a majestic wood horse running through blooming pink peach blossoms in a webtoon style"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1kbCOzn8Xeh0w619VmUCWWpZR-ATlWhrOvw9kyWrK3SpMtvlCBxBatmLXp5WNWR5a1y1oICaexqdzPOE_CfxYTEP46q1oXUvchR7QW4X9n56VUqvj8iNT784q0vf-JOiDNpcabJFCgCRRdgMXWQp97c74qRXHPdTa3V1UNgLkUq4dY5BqkD6cDjyNW-KZp4w2laREJKAHMO1LrkGiPoWVCAkDraK0xl9CwD1B2LAXn38S8_iq1yt45UvEhcsev6RPyjU3PakBWLE"
                />
                <div class="absolute bottom-4 left-4 bg-white comic-border px-4 py-2">
                  <p class="font-bold text-sm">Mã Đáo Thành Công 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section class="max-w-7xl mx-auto px-6 mb-12">
          <div class="flex flex-wrap gap-4 border-b border-gray-200 pb-2">
            <button class="flex items-center gap-2 px-6 py-3 font-bold text-primary border-b-4 border-primary">
              <span class="material-symbols-outlined">family_restroom</span> GIA
              ĐÌNH
            </button>
            <button class="flex items-center gap-2 px-6 py-3 font-bold text-gray-400 border-b-4 border-transparent hover:text-primary transition-colors">
              <span class="material-symbols-outlined">work</span> SỰ NGHIỆP
            </button>
            <button class="flex items-center gap-2 px-6 py-3 font-bold text-gray-400 border-b-4 border-transparent hover:text-primary transition-colors">
              <span class="material-symbols-outlined">favorite</span> TÌNH YÊU
            </button>
            <button class="flex items-center gap-2 px-6 py-3 font-bold text-gray-400 border-b-4 border-transparent hover:text-primary transition-colors">
              <span class="material-symbols-outlined">self_improvement</span>{" "}
              BẢN THÂN
            </button>
          </div>
        </section> */}

        <section class="max-w-7xl mx-auto px-6 pb-24">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <div class="group cursor-pointer">
              <div
                class="comic-border bg-white p-6 h-full flex flex-col gap-4 group-hover:-translate-y-2 transition-transform bg-cover bg-center relative"
                data-alt="Light pattern background with subtle flower outlines"
                style={{
                  backgroundImage: `
      linear-gradient(
        to bottom,
        rgba(255,255,255,0.95),
        rgba(255,255,255,0.95)
      ),
      url(${am})
    `,
                }}
              >
                <div class="flex justify-between items-start">
                  <span class="text-4xl">🧧</span>
                  <span class="material-symbols-outlined text-primary">
                    drag_indicator
                  </span>
                </div>
                <h3 class="text-2xl font-bold leading-tight">
                  An Khang Thịnh Vượng
                </h3>
                <p class="text-gray-600 italic">
                  "Cung chúc tân xuân phước vĩnh cửu. Chúc trong gia quyến được
                  an khương."
                </p>
                <div class="mt-auto pt-4 flex items-center justify-between">
                  <span class="text-xs font-bold uppercase tracking-widest text-primary">
                    Nhấn để mở
                  </span>
                  <div class="size-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span class="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            </div> */}
            <div class="group cursor-pointer">
              <div class="comic-border-gold bg-[#fffcf0] p-6 h-full flex flex-col gap-4 group-hover:-translate-y-2 transition-transform">
                <div class="w-full aspect-video overflow-hidden rounded-lg comic-border-gold mb-2">
                  <img
                    alt="Golden apricot blossoms"
                    class="w-full h-full object-cover"
                    data-alt="Close up of bright yellow apricot blossoms against a soft gold background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9Y1ZmAW0aeeFmTW96L1SRHFkb_SBT5sGely9NyR977842ZHE-DYZiv_hfiiKI70hbGTPldx6JmUKaFfe8QnW-rUonrL2BaD2fhSXoooNy3NE4gk-9VG10X5OQxvGAhyhMoXeYlXn6wRXrI4yFPBHDw1zsgT2PkETn5DnCHGocD-LZjuTd8IyyxCr1lNM60Ey67h8cfmEe72k9-T_zvax7FXDwRGOAg-lY0yzbf7MI7QOkBSC6yT52nuIPHV4poN-grGG4-E4rDGo"
                  />
                </div>
                <h3 class="text-2xl font-bold leading-tight">Vạn Sự Như Ý</h3>
                <p class="text-gray-600 italic">
                  "Chúc cục cưng coá được, làm được mọi điều mình mong muốn nè."
                </p>
              </div>
            </div>
            <div class="group cursor-pointer">
              <div class="comic-border bg-white p-6 h-full flex flex-col gap-4 group-hover:-translate-y-2 transition-transform">
                <div class="flex justify-between items-start">
                  <span class="text-4xl">🌸</span>
                  <span class="material-symbols-outlined text-primary">
                    favorite
                  </span>
                </div>
                <h3 class="text-2xl font-bold leading-tight">
                  Sức Khỏe Dồi Dào
                </h3>
                <p class="text-gray-600 italic">
                  "Sức khỏe dẻo dai như ngựa chiến, tinh thần phấn chấn tựa xuân
                  sang."
                  <br></br>"Ghê khum ghê khum hehehe"
                </p>
              </div>
            </div>
            <div class="group cursor-pointer">
              <div class="comic-border-gold bg-[#fffcf0] p-6 h-full flex flex-col gap-4 group-hover:-translate-y-2 transition-transform">
                <div class="w-full aspect-video overflow-hidden rounded-lg comic-border-gold mb-2">
                  <img
                    alt="Golden apricot blossoms"
                    class="w-full h-full object-cover"
                    data-alt="Close up of bright yellow apricot blossoms against a soft gold background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9Y1ZmAW0aeeFmTW96L1SRHFkb_SBT5sGely9NyR977842ZHE-DYZiv_hfiiKI70hbGTPldx6JmUKaFfe8QnW-rUonrL2BaD2fhSXoooNy3NE4gk-9VG10X5OQxvGAhyhMoXeYlXn6wRXrI4yFPBHDw1zsgT2PkETn5DnCHGocD-LZjuTd8IyyxCr1lNM60Ey67h8cfmEe72k9-T_zvax7FXDwRGOAg-lY0yzbf7MI7QOkBSC6yT52nuIPHV4poN-grGG4-E4rDGo"
                  />
                </div>
                <h3 class="text-2xl font-bold leading-tight">
                  Tình Duyên Đong Đầy
                </h3>
                <p class="text-gray-600 italic">
                  "Chúc chúng mình luôn hạnh phúc bên nhau đón thêm nhiều mùa
                  xuân hơn nà. hihihi"
                </p>
              </div>
            </div>

            <div class="md:col-span-2 group cursor-pointer">
              <div class="comic-border bg-primary p-8 h-full flex flex-col md:flex-row gap-8 group-hover:-translate-y-2 transition-transform overflow-hidden relative">
                <div class="absolute top-0 right-0 opacity-10 scale-150 pointer-events-none">
                  <span class="material-symbols-outlined text-[200px] text-white">
                    flare
                  </span>
                </div>
                <div class="md:w-1/2 space-y-4 z-10">
                  <h3 class="text-3xl font-black text-white italic">
                    Lời Chúc Đặc Biệt Cho Cha Mẹ
                  </h3>
                  <p class="text-white/90 leading-relaxed">
                    "Ơn cha dưỡng dục dường non Thái, Nghĩa mẹ sinh thành tựa
                    biển Đông. Năm mới con chúc Cha Mẹ bách niên giai lão, sống
                    vui cùng con cháu."
                  </p>
                </div>
                <div class="md:w-1/2 comic-border bg-white rounded-lg overflow-hidden h-48 md:h-full">
                  <img
                    alt="Traditional tea set"
                    class="w-full h-full object-cover"
                    data-alt="A warm traditional tea set on a wooden table with soft sunlight and flower petals"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8j7R6LfcBwn1Y1JldEchCZXtwnMpMUAgnxlhM9QUNgGUY2R4oVMITnmXw6c4WL61tGYNGKB52fEm01oHP0g5mlaFVZlJqSGlr6OnBTol4kbvO6AaLwQ9RoatimwWincjrzzubZcQKDANuqRHmBufBrU7L4a-fEx7B-hFmQJqM_-bmQygE7OfRz45yvrt_z6gn59WN0B9KgwKSLv6Y7crKgzkdigvpubGi09XndbOPeVon6N9tIc0jFH5rgXoblIemhRqHGzf0nk4"
                  />
                </div>
              </div>
            </div>

            <div class="group cursor-pointer">
              <div class="comic-border bg-white p-6 h-full flex flex-col gap-4 group-hover:-translate-y-2 transition-transform">
                <div class="flex justify-between items-start">
                  <span class="text-4xl">🐎</span>
                  <span class="material-symbols-outlined text-primary">
                    bolt
                  </span>
                </div>
                <h3 class="text-2xl font-bold leading-tight">
                  Mã Đáo Thành Công
                </h3>
                <p class="text-gray-600 italic">
                  "Ngựa chạy đường xa thêm dũng mãnh. Sự nghiệp vươn cao, rạng
                  rỡ công danh."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <section class="bg-primary/5 py-20 px-6 border-t border-primary/10">
          <div class="max-w-3xl mx-auto text-center space-y-8">
            <div class="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase">
              <span class="h-px w-8 bg-primary"></span>
              Gửi Gắm Niềm Vui
              <span class="h-px w-8 bg-primary"></span>
            </div>
            <h2 class="text-4xl md:text-5xl font-black italic">
              Nhận Lời Chúc Mỗi Ngày
            </h2>
            <p class="text-gray-600 text-lg">
              Đăng ký để nhận những thông điệp yêu thương và bao lì xì may mắn
              trực tiếp vào email của bạn suốt mùa Tết.
            </p>
            <form class="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input
                class="flex-1 px-6 py-4 rounded-xl border-2 border-primary/20 focus:border-primary focus:ring-0 transition-all font-sans"
                placeholder="Địa chỉ email của bạn..."
                type="email"
              />
              <button class="comic-border bg-primary text-white px-8 py-4 font-bold whitespace-nowrap">
                ĐĂNG KÝ
              </button>
            </form>
          </div>
        </section> */}
      </main>
      <Footer></Footer>
    </>
  );
};

export default LoiChuc;
