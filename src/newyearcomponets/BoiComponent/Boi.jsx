import "./Boi.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useState } from "react";

const Boi = () => {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    tob: "",
    sex: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const callTuViAPI = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch("/api/boi-tu-vi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "API error");

      setResult(data);
    } catch (err) {
      alert("Không thể xem tử vi lúc này");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <>
      <Header></Header>
      <main class="flex-grow flex flex-col items-center justify-center relative py-12 px-4 md:px-10">
        <div class="absolute inset-0 z-[-1] overflow-hidden">
          <img
            class="w-full h-full object-cover opacity-20 dark:opacity-10"
            data-alt="Dreamy peach blossoms soft focus background spring sky"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuATMkezRbK3Utcq0F7wleMDQbKYQw-6sCML88bpwp0i3ASjjTZDpo7Lq3wh6Cum6aomhPyD4aODOZjzhGp0CAWwwy6Wr-OVvWY0KEKuhXpYxnBHuhZR-BkLFcxHcbHkfM_K829cjMNy9Qj3JGhKKliuzQ5ih81fficJqoq1mGdG51sPUw7i633t6g35VYyP3BtmgPoC48gYQhfoKcav6X47x1SJHLclUXUj1f8eY3I4VfaxjXNqdeJmFNQbp7r71XMyEsQ3BSLrna0"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-background-light/50 via-background-light/80 to-background-light dark:from-background-dark/50 dark:to-background-dark"></div>
        </div>
        <div class="layout-content-container flex flex-col max-w-[960px] w-full z-10 gap-10">
          <div class="text-center flex flex-col items-center gap-4">
            <div class="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-red-50 text-primary border border-red-100 dark:bg-red-900/20 dark:border-red-900 dark:text-red-200 text-sm font-medium mb-2">
              <span class="material-symbols-outlined text-sm mr-2">
                temp_preferences_custom
              </span>
              Chào xuân Bính Ngọ 2026
            </div>
            <h1 class="text-[#181211] dark:text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">
              Gieo Quẻ Đầu Năm
            </h1>
            <p class="text-[#685855] dark:text-gray-300 text-lg md:text-xl font-medium max-w-2xl text-center leading-relaxed">
              "Én về báo hiệu xuân sang
              <br />
              Mai vàng nở rộ, rộn ràng đón vui."
            </p>
          </div>

          <div class="relative bg-white/90 dark:bg-[#3d2520]/90 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-10 shadow-2xl shadow-red-900/5 border-2 border-white/50 dark:border-white/10 comic-shadow mx-auto w-full max-w-[800px]">
            <div class="absolute -top-6 -left-6 size-16 md:size-24 z-20">
              <img
                class="w-full h-full drop-shadow-lg"
                data-alt="Stylized red camellia flower illustration corner decoration"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsaAcPcIUCIWRJSKDOczUZxkengcQTpQ5SsA1JdlKGJjVh5xyvWS3q4qvtQcyHRq4bZfex4-sUE0Ji_Paoc-zmwpPT0fZPgFdeW0txW9aLDIc6mftMn16zliqNzgN0KKGSWGikDX8aeY1n_q_NH2PfJOBqERzxdYUUdnXB-SGR9s5_3UuJdAGtU5Axs9lK78ky9ZtMhNsvW7Fzkygrh50q0NkWm7nBvZKtYKaIBoJcuBZlBJ4vK7xtMYYbmILjDzjiw3bQkuEytCY"
              />
            </div>
            <div class="absolute -bottom-6 -right-6 size-16 md:size-24 z-20 rotate-180">
              <img
                class="w-full h-full drop-shadow-lg"
                data-alt="Stylized red camellia flower illustration corner decoration"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2pCGNvd9wmzhZYYtZASMOsOH8ie70nTCoero9A__7aRM3nJrP4krEIPc_ZQt7ltHrvItqqIeAv_HThz6PcoLTpUY-MBZ2pe8s05EHIOeh-Y9h8VwjxEwUbs479p9XRxyKjVo7OWCTh6yBfuk9A-eHK4S-ssYxhnCttUZpLcvFCsFc9hTQSWyOEtYmMs4-zulpGhByZaYVCBOYLgcvLtcIW014VJ9-ss5ussvMWhIFuLhHOE1qoR9NXVgP_iL8VKcUJa-pSU-4fHY"
              />
            </div>
            <h3 class="text-center text-xl font-bold text-primary mb-8 flex items-center justify-center gap-2">
              <span class="material-symbols-outlined">edit_note</span> Nhập
              thông tin của bạn
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <label class="flex flex-col gap-2 group">
                <span class="text-[#181211] dark:text-gray-200 text-sm font-bold uppercase tracking-wider ml-2 group-focus-within:text-primary transition-colors">
                  Họ và tên
                </span>
                <div class="relative">
                  <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
                    <span class="material-symbols-outlined">person</span>
                  </div>
                  <input
                    class="w-full h-14 pl-12 pr-4 rounded-2xl border-2 border-gray-100 bg-gray-50 dark:bg-[#4a302a] dark:border-transparent dark:text-white text-[#181211] placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-0 transition-all font-medium"
                    placeholder="Nhập tên của bạn..."
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
              </label>

              <label class="flex flex-col gap-2 group">
                <span class="text-[#181211] dark:text-gray-200 text-sm font-bold uppercase tracking-wider ml-2 group-focus-within:text-primary transition-colors">
                  Ngày sinh (Dương lịch)
                </span>
                <div class="relative">
                  <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
                    <span class="material-symbols-outlined">
                      calendar_month
                    </span>
                  </div>
                  <input
                    class="w-full h-14 pl-12 pr-4 rounded-2xl border-2 border-gray-100 bg-gray-50 dark:bg-[#4a302a] dark:border-transparent dark:text-white text-[#181211] placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-0 transition-all font-medium"
                    type="date"
                    value={form.dob}
                    onChange={(e) => setForm({ ...form, dob: e.target.value })}
                  />
                </div>
              </label>

              <label class="flex flex-col gap-2 group">
                <span class="text-[#181211] dark:text-gray-200 text-sm font-bold uppercase tracking-wider ml-2 group-focus-within:text-primary transition-colors">
                  Giờ sinh
                </span>
                <div class="relative">
                  <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
                    <span class="material-symbols-outlined">schedule</span>
                  </div>
                  <select
                    value={form.tob}
                    onChange={(e) => setForm({ ...form, tob: e.target.value })}
                    class="w-full h-14 pl-12 pr-10 rounded-2xl border-2 border-gray-100 bg-gray-50 dark:bg-[#4a302a] dark:border-transparent dark:text-white text-[#181211] focus:outline-none focus:border-primary focus:ring-0 transition-all font-medium appearance-none"
                  >
                    <option disabled="" selected="" value="">
                      Chọn giờ sinh
                    </option>
                    <option value="ty">Tý (23h - 1h)</option>
                    <option value="suu">Sửu (1h - 3h)</option>
                    <option value="dan">Dần (3h - 5h)</option>
                    <option value="mao">Mão (5h - 7h)</option>
                    <option value="thin">Thìn (7h - 9h)</option>
                    <option value="ti">Tỵ (9h - 11h)</option>
                    <option value="ngo">Ngọ (11h - 13h)</option>
                    <option value="mui">Mùi (13h - 15h)</option>
                    <option value="than">Thân (15h - 17h)</option>
                    <option value="dau">Dậu (17h - 19h)</option>
                    <option value="tuat">Tuất (19h - 21h)</option>
                    <option value="hoi">Hợi (21h - 23h)</option>
                  </select>
                  <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                    <span class="material-symbols-outlined">expand_more</span>
                  </div>
                </div>
              </label>

              <div class="flex flex-col gap-2">
                <span class="text-[#181211] dark:text-gray-200 text-sm font-bold uppercase tracking-wider ml-2">
                  Giới tính
                </span>
                <div class="flex gap-4 h-14">
                  <label class="flex-1 cursor-pointer relative">
                    <input
                      class="peer sr-only"
                      name="gender"
                      type="radio"
                      value="Nam"
                      onChange={(e) =>
                        setForm({ ...form, sex: e.target.value })
                      }
                    />
                    <div class="w-full h-full rounded-2xl border-2 border-gray-100 bg-gray-50 dark:bg-[#4a302a] dark:border-transparent peer-checked:border-primary peer-checked:bg-red-50 dark:peer-checked:bg-red-900/30 flex items-center justify-center gap-2 transition-all hover:bg-gray-100 dark:hover:bg-[#5c3e36]">
                      <span class="material-symbols-outlined text-gray-400 peer-checked:text-primary">
                        male
                      </span>
                      <span class="text-[#181211] dark:text-white font-medium">
                        Nam
                      </span>
                    </div>
                  </label>
                  <label class="flex-1 cursor-pointer relative">
                    <input
                      class="peer sr-only"
                      name="gender"
                      type="radio"
                      value="Nữ"
                      onChange={(e) =>
                        setForm({ ...form, sex: e.target.value })
                      }
                    />
                    <div class="w-full h-full rounded-2xl border-2 border-gray-100 bg-gray-50 dark:bg-[#4a302a] dark:border-transparent peer-checked:border-primary peer-checked:bg-red-50 dark:peer-checked:bg-red-900/30 flex items-center justify-center gap-2 transition-all hover:bg-gray-100 dark:hover:bg-[#5c3e36]">
                      <span class="material-symbols-outlined text-gray-400 peer-checked:text-primary">
                        female
                      </span>
                      <span class="text-[#181211] dark:text-white font-medium">
                        Nữ
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div class="mt-10 flex justify-center">
              <button
                onClick={callTuViAPI}
                disabled={loading}
                class="group relative flex items-center justify-center size-24 md:size-28 rounded-full bg-gradient-to-br from-secondary to-[#e6b800] text-[#856500] font-black shadow-xl shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105 transition-all duration-300 border-4 border-[#fff5cc]"
              >
                <div class="absolute inset-1 rounded-full border border-[#b38f00]/30 border-dashed"></div>
                <div class="flex flex-col items-center">
                  <span class="material-symbols-outlined text-3xl mb-1 group-hover:rotate-12 transition-transform">
                    auto_awesome
                  </span>
                  <span class="text-xs md:text-sm leading-tight text-center uppercase tracking-tighter">
                    {loading ? "Đang xem..." : "Xem Tử Vi"}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>

      <section class="relative w-full py-20 px-4 md:px-10 flex flex-col items-center justify-center bg-[#fff5f5] dark:bg-background-dark overflow-hidden">
        <div class="layout-content-container max-w-[900px] w-full flex flex-col items-center gap-8 relative z-10">
          <h2 class="text-3xl font-bold text-[#181211] dark:text-white flex items-center gap-3">
            <span class="material-symbols-outlined text-primary">
              history_edu
            </span>
            Lời Bình Giải Năm 2026
          </h2>

          <div class="relative w-full flex">
            <div class="hidden md:block w-8 md:w-12 h-auto flex-shrink-0 scroll-end rounded-l-lg z-20 relative shadow-xl">
              <div class="absolute inset-x-0 top-4 h-full border-r border-black/10"></div>
            </div>

            <div class="flex-1 scroll-container min-h-[400px] p-8 md:p-12 text-[#5d4037] font-serif leading-relaxed shadow-lg mx-[-10px] md:mx-0 z-10">
              <div class="border-2 border-[#d4a05f] p-6 md:p-8 h-full rounded-sm relative">
                <div class="absolute top-2 left-2 size-4 border-t-2 border-l-2 border-[#d4a05f]"></div>
                <div class="absolute top-2 right-2 size-4 border-t-2 border-r-2 border-[#d4a05f]"></div>
                <div class="absolute bottom-2 left-2 size-4 border-b-2 border-l-2 border-[#d4a05f]"></div>
                <div class="absolute bottom-2 right-2 size-4 border-b-2 border-r-2 border-[#d4a05f]"></div>
                <div class="flex flex-col gap-6 text-center md:text-left">
                  <div class="flex flex-col md:flex-row gap-6 items-center border-b border-[#d4a05f]/30 pb-6">
                    <div class="size-24 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border-2 border-primary/20">
                      <img
                        class="size-16 object-contain"
                        data-alt="Red stylized horse silhouette icon for Year of the Horse"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOg13_soI20fUUeL73Eytwb7tu7uOKtVrJqedpKGsZ1TWvNifUnOvQeCCAH5CP-q_gUfvxB6zNuVqDkhVjKF6GH4uEQg7nOT_VFzayojlBIv7u-6DM8sK09FfG-rIn4HcKF0xcXOD7ACaD2vUlqZ58FdpYrKxNxFkxB84mkQ7zBbuWVO4da50uJARUEOs5xHqgXUmRkyhR9wioUHWaFFT89rL1XirgTOo_h3a4D04QYOtoAKXIStObVygQVG75wZuSUG-3aX-jssk"
                      />
                    </div>
                    <div>
                      <h3 class="text-2xl font-bold text-[#8b4513] mb-2">
                        Bính Ngọ - Thiên Hà Thủy
                      </h3>
                      <p class="text-lg">
                        Năm 2026 là năm con Ngựa. Mệnh Thủy (Nước trên trời).
                        Đây là một năm tràn đầy năng lượng, sự dịch chuyển và cơ
                        hội mới.
                      </p>
                    </div>
                  </div>
                  <div class="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 class="font-bold text-primary text-lg mb-2 flex items-center gap-2">
                        <span class="material-symbols-outlined text-base">
                          work
                        </span>{" "}
                        Công Danh
                      </h4>
                      <p>{result?.CongDanh}</p>
                    </div>
                    <div>
                      <h4 class="font-bold text-primary text-lg mb-2 flex items-center gap-2">
                        <span class="material-symbols-outlined text-base">
                          favorite
                        </span>{" "}
                        Tình Duyên
                      </h4>
                      <p>{result?.TinhDuyen}</p>
                    </div>
                  </div>
                  <div class="bg-[#fff9e6] p-4 rounded-lg mt-2 border border-[#f0e0b0] flex flex-wrap justify-between items-center gap-4">
                    <div class="flex items-center gap-2">
                      <span class="material-symbols-outlined text-yellow-600">
                        stars
                      </span>
                      <span>
                        Số may mắn: <strong>{result?.SoMayMan}</strong>
                      </span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="material-symbols-outlined text-red-600">
                        palette
                      </span>
                      <span>
                        Màu hợp: <strong>{result?.MauHop}</strong>
                      </span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="material-symbols-outlined text-green-600">
                        explore
                      </span>
                      <span>
                        Hướng tốt: <strong>Đông Nam</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="hidden md:block w-8 md:w-12 h-auto flex-shrink-0 scroll-end rounded-r-lg z-20 relative shadow-xl">
              <div class="absolute inset-x-0 top-4 h-full border-l border-white/20"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Boi;
