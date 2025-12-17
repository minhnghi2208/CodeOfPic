import login1 from "../../assets/loginPic/login1.jpg";
import login2 from "../../assets/loginPic/login2.jpg";
import login3 from "../../assets/loginPic/login3.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const goToLink = (link) => {
    navigate(link);
  };

  const handleLogin = () => {
    if (password === "22082004") {
      goToLink("/home");
    } else {
      setShowIncorectPasssword(true);
    }
  };

  const [password, setPassword] = useState("");
  const [openMenu, setOpenMenu] = useState(false);

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showIncorectPasssword, setShowIncorectPasssword] = useState(false);
  const starBg = `data:image/svg+xml;utf8,
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M50 0 L63 35 L100 35 L70 57 L82 92 L50 70 L18 92 L30 57 L0 35 L37 35 Z"
        fill="%23facc15"
        stroke="%23000"
        stroke-width="2"/>
</svg>`;
  const circleBg = `data:image/svg+xml;utf8,
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle
    cx="50"
    cy="50"
    r="40"
    fill="none"
    stroke="%23f20d0d"
    stroke-width="5"
    stroke-dasharray="10 5"
  />
</svg>`;

  return (
    <>
      <div class="bg-background-light dark:bg-background-dark text-[#181111] dark:text-white font-display overflow-x-hidden transition-colors duration-200">
        <div class="fixed inset-0 pointer-events-none z-0 bg-halftone dark:bg-halftone-dark bg-dots opacity-40"></div>
        <div class="relative flex min-h-screen w-full flex-col z-10">
          <div className="relative">
            <div className="flex items-center justify-between border-b-4 border-[#181111] bg-white dark:bg-[#2a1515] px-6 lg:px-10 py-4 shadow-md sticky top-0 z-50">
              {/* LEFT */}
              <div className="flex items-center gap-4 text-[#181111] dark:text-white">
                <div className="size-8 text-primary animate-bounce">
                  <span className="material-symbols-outlined text-4xl">
                    celebration
                  </span>
                </div>
                <h2 className="text-xl lg:text-2xl font-black uppercase italic">
                  Welcome to my world!
                </h2>
              </div>

              {/* DESKTOP MENU */}
              <div className="hidden md:flex items-center gap-6">
                <p className="text-sm font-bold uppercase text-[#181111] dark:text-gray-200">
                  Khi nào không biết mật khẩu rồi hãy click nhá!
                </p>

                <button
                  onClick={() => setShowPasswordModal(true)}
                  className="h-10 px-6 bg-primary text-white text-sm font-black uppercase border-2 border-[#181111] shadow-[2px_2px_0px_0px_#181111]"
                >
                  Mật khẩu
                </button>
              </div>

              {/* MOBILE BUTTON */}
              <div className="md:hidden">
                <button
                  onClick={() => setOpenMenu(!openMenu)}
                  className="p-2 border-2 border-[#181111] rounded shadow-comic-sm"
                >
                  <span className="material-symbols-outlined">
                    {openMenu ? "close" : "menu"}
                  </span>
                </button>
              </div>
            </div>

            {openMenu && (
              <div className="md:hidden bg-white dark:bg-[#2a1515] border-b-4 border-[#181111] px-6 py-4 space-y-4 shadow-md">
                <p className="text-sm font-bold uppercase text-[#181111] dark:text-gray-200">
                  Khi nào không biết mật khẩu rồi hãy click nhá!
                </p>

                <button
                  onClick={() => {
                    setShowPasswordModal(true);
                    setOpenMenu(false);
                  }}
                  className="w-full h-10 bg-primary text-white font-black uppercase border-2 border-[#181111] shadow-[2px_2px_0px_0px_#181111]"
                >
                  Mật khẩu
                </button>
              </div>
            )}
          </div>

          <div class="flex-1 flex items-center justify-center p-4 lg:p-8 relative">
            <div class="hidden xl:block absolute left-10 top-1/4 -rotate-12 transform opacity-90 hover:scale-105 transition-transform duration-300">
              <div class="relative">
                <div class="absolute -top-16 -right-10 bg-white dark:bg-[#2a1515] p-3 border-2 border-black rounded-full z-20">
                  <p class="font-black text-xs text-center uppercase">
                    Ho Ho Ho!
                  </p>
                </div>
                <div
                  class="w-64 h-64 bg-center bg-contain bg-no-repeat"
                  data-alt="Cartoon Santa Claus peering around a corner"
                  style={{
                    backgroundImage: `url(${login1})`,
                  }}
                ></div>
              </div>
            </div>
            <div class="hidden xl:block absolute right-10 bottom-1/4 rotate-12 transform opacity-90 hover:scale-105 transition-transform duration-300">
              <div class="relative">
                <div class="absolute -top-10 -left-10 bg-white dark:bg-[#2a1515] p-3 border-2 border-black rounded-lg z-20">
                  <p class="font-black text-xs text-center uppercase">
                    Quà đâu??
                  </p>
                </div>
                <div
                  class="w-56 h-56 bg-center bg-contain bg-no-repeat"
                  data-alt="Cartoon Reindeer looking curious"
                  style={{
                    backgroundImage: `url(${login2})`,
                  }}
                ></div>
              </div>
            </div>

            <div class="relative w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 bg-white dark:bg-[#2a1515] comic-border rounded-xl overflow-hidden z-10">
              <div class="hidden md:flex flex-col relative bg-[#f2f2f2] dark:bg-[#3d1f1f] border-r-4 border-[#181111]">
                <div class="absolute top-4 left-4 bg-primary text-white text-xs font-black px-2 py-1 border border-black transform -rotate-2 shadow-[2px_2px_0px_0px_#000]">
                  TẬP #25: NGÀY SINH NHẬT
                </div>
                <div
                  class="w-full h-full min-h-[500px] bg-center bg-cover bg-no-repeat grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  data-alt="Comic book style cover art with christmas theme, presents and colorful background"
                  style={{
                    backgroundImage: `url(${login3})`,
                  }}
                ></div>
                <div class="absolute bottom-0 w-full bg-yellow-400 border-t-4 border-black p-3">
                  <p class="text-black font-black text-center text-sm uppercase italic">
                    "Chỉ những người có chìa khóa mới được vào!"
                  </p>
                </div>
              </div>

              <div class="flex flex-col justify-center p-8 md:p-12 w-full bg-white dark:bg-[#2a1515]">
                <div class="mb-8">
                  <div class="inline-block bg-[#f8f5f5] dark:bg-[#3d1f1f] px-3 py-1 rounded-md border-2 border-[#181111] mb-3 transform -rotate-1">
                    <span class="text-primary font-extrabold uppercase text-xs tracking-wider">
                      Khu vực tuyệt mật
                    </span>
                  </div>
                  <h1 class="text-[#181111] dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-tighter uppercase mb-2 drop-shadow-sm">
                    Đăng Nhập
                  </h1>
                  <p class="text-[#8a6060] dark:text-gray-300 text-base font-medium">
                    Nhập mật khẩu để mở hộp quà bí mật của Khle!
                  </p>
                </div>
                <form
                  class="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                  }}
                >
                  <div class="space-y-2 group">
                    <label class="flex items-center gap-2 text-[#181111] dark:text-white text-sm font-bold uppercase tracking-wide">
                      <span class="material-symbols-outlined text-primary text-lg">
                        person
                      </span>
                      Tên Truy Cập
                    </label>
                    <input
                      class="w-full h-14 px-4 bg-white dark:bg-[#1a0f0f] border-2 border-[#181111] dark:border-gray-600 rounded-lg text-lg font-bold text-[#181111] dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 outline-none focus:ring-0 comic-input transition-all"
                      defaultValue="YenNhi"
                      type="text"
                      readOnly
                    />
                  </div>

                  <div class="space-y-2 group">
                    <label class="flex items-center gap-2 text-[#181111] dark:text-white text-sm font-bold uppercase tracking-wide">
                      <span class="material-symbols-outlined text-primary text-lg">
                        vpn_key
                      </span>
                      Mật Khẩu
                    </label>
                    <input
                      class="w-full h-14 px-4 bg-white dark:bg-[#1a0f0f] border-2 border-[#181111] dark:border-gray-600 rounded-lg text-lg font-bold text-[#181111] dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 outline-none focus:ring-0 comic-input transition-all"
                      placeholder="Mật mã bí mật..."
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* <div class="flex justify-end">
                      <a
                        class="text-xs font-bold text-[#8a6060] hover:text-primary underline decoration-2 underline-offset-2"
                        href="#"
                      >
                        Quên mật mã?
                      </a>
                    </div> */}
                  </div>

                  <button
                    class="w-full h-14 mt-4 bg-primary text-white text-xl font-black uppercase tracking-widest rounded-lg border-2 border-[#181111] shadow-[4px_4px_0px_0px_#181111] hover:bg-red-600 comic-button flex items-center justify-center gap-3"
                    type="submit"
                    // onClick={() => {
                    //   if (password === "22082004") {
                    //     goToLink("/home");
                    //   } else {
                    //     // alert("Sai mật khẩu rồi 😭 thử lại nha!");
                    //     setShowIncorectPasssword(true);
                    //   }
                    // }}
                  >
                    <span>Mở Quà Ngay</span>
                    <span class="material-symbols-outlined font-black">
                      arrow_forward
                    </span>
                  </button>
                </form>
                <div class="mt-8 pt-6 border-t-2 border-dashed border-gray-300 dark:border-gray-700 text-center">
                  <p class="text-[#8a6060] dark:text-gray-400 text-sm font-medium">
                    Mật khẩu là ngày sinh của Khoa {":))"}
                    {/* <a
                      class="text-primary font-black hover:underline uppercase ml-1"
                      href="#"
                    >
                      Đăng ký ngay
                    </a> */}
                  </p>
                </div>
              </div>
            </div>

            <div class="absolute top-20 right-10 lg:right-32 pointer-events-none hidden lg:block">
              <div
                class="w-24 h-24 bg-contain bg-no-repeat opacity-80 rotate-12"
                data-alt="Star shape graphic"
                style={{
                  backgroundImage: `url("${starBg}")`,
                }}
              ></div>
            </div>
            <div class="absolute bottom-10 left-10 lg:left-32 pointer-events-none hidden lg:block">
              <div
                class="w-16 h-16 bg-contain bg-no-repeat opacity-60 -rotate-12"
                data-alt="Circle doodle graphic"
                style={{
                  backgroundImage: `url("${circleBg}")`,
                }}
              ></div>
            </div>
          </div>
          <footer class="text-center py-6 bg-white dark:bg-[#2a1515] border-t-4 border-[#181111] relative z-20">
            <p class="text-xs font-bold text-[#181111] dark:text-gray-400 uppercase tracking-widest">
              © 2025 Món quà tặng Yến Nhi.
            </p>
          </footer>
        </div>
      </div>

      {showPasswordModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-[#2a1515] rounded-xl border-2 border-[#181111] shadow-comic p-6 w-[90%] max-w-sm">
            <p className="text-lg font-bold text-center mb-4">
              Bùn thiệt chứ bae 🔐 Mật khẩu là:{" "}
              <span className="text-primary">22082004</span>
            </p>

            <button
              onClick={() => setShowPasswordModal(false)}
              className="w-full h-10 bg-primary text-white font-black uppercase border-2 border-[#181111]"
            >
              Đóng
            </button>
          </div>
        </div>
      )}

      {showIncorectPasssword && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-[#2a1515] rounded-xl border-2 border-[#181111] shadow-comic p-6 w-[90%] max-w-sm">
            <p className="text-lg font-bold text-center mb-4">
              {/* 🔐 Mật khẩu là: <span className="text-primary">22082004</span> */}
              Không nhớ ngày sinh của Khoa rùi. <br></br> Vào menu chọn mật khẩu
              nhá để có gợi ý!
            </p>

            <button
              onClick={() => setShowIncorectPasssword(false)}
              className="w-full h-10 bg-primary text-white font-black uppercase border-2 border-[#181111]"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
