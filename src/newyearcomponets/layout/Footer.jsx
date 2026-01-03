import { useNavigate } from "react-router-dom";

import "./layout.css";
const Footer = () => {
  const navigate = useNavigate();

  const goToLink = (link) => {
    navigate(link);
  };

  return (
    <footer class="w-full bg-[#181111] text-white py-12 px-4 relative overflow-hidden">
      <div class="layout-container max-w-[1200px] mx-auto flex flex-col items-center gap-6 relative z-10">
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined">local_florist</span>
          <h3 class="text-lg font-bold font-display">New Year Diary</h3>
        </div>
        <div class="flex gap-6 text-sm text-gray-400">
          <a class="hover:text-white transition-colors" href="#">
            Về chúng tôi
          </a>
          <a class="hover:text-white transition-colors" href="#">
            Điều khoản
          </a>
          <a class="hover:text-white transition-colors" href="#">
            Riêng tư
          </a>
        </div>
        <div class="text-xs text-gray-600 font-mono mt-4">
          © 2026 New Year Diary. Hope The Best For You, My Honey.
        </div>
      </div>
      {/* <span class="material-symbols-outlined absolute top-4 left-10 text-[100px] text-white/5 rotate-12">
        ac_unit
      </span> */}
      {/* <span class="material-symbols-outlined absolute bottom-4 right-20 text-[80px] text-white/5 -rotate-12">
        ac_unit
      </span> */}
    </footer>
  );
};

export default Footer;
