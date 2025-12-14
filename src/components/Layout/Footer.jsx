const Footer = () => {
  return (
    <div class="w-full bg-christmas-dark-green text-white py-12 border-t-[4px] border-ink relative overflow-hidden">
      <div
        class="absolute top-0 left-0 w-full h-4 bg-repeat-x"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10px 10px, white 5px, transparent 6px)",
          backgroundSize: "20px 20px",
        }}
      ></div>
      <div class="flex flex-col items-center justify-center gap-6 text-center px-4 relative z-10">
        <div class="size-16 flex items-center justify-center rounded-full bg-white text-christmas-red border-[3px] border-ink shadow-comic mb-2">
          <span class="material-symbols-outlined text-3xl">cake</span>
        </div>
        <div class="bg-white border-2 border-ink p-4 rounded-lg text-ink max-w-md shadow-comic-sm">
          <p class="font-comic text-lg uppercase">
            "THE END OF CHAPTER 25. TO BE CONTINUED..."
          </p>
        </div>
        <p class="text-gray-300 text-sm mt-4 font-medium">
          © 2023. Gửi tặng Lan với tất cả tình yêu thương mùa Giáng sinh.
        </p>
        <div class="flex gap-4 mt-2">
          <a
            class="bg-white text-ink p-2 border-2 border-ink rounded hover:bg-christmas-red hover:text-white transition-colors"
            href="#"
          >
            <span class="sr-only">Facebook</span>
            <svg
              aria-hidden="true"
              class="h-5 w-5"
              fill="currentColor"
              viewbox="0 0 24 24"
            >
              <path
                clip-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            class="bg-white text-ink p-2 border-2 border-ink rounded hover:bg-christmas-red hover:text-white transition-colors"
            href="#"
          >
            <span class="sr-only">Instagram</span>
            <svg
              aria-hidden="true"
              class="h-5 w-5"
              fill="currentColor"
              viewbox="0 0 24 24"
            >
              <path
                clip-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.315 2zm-3.196 3.213c-.31 0-.56.251-.56.561 0 .31.25.56.56.56h.05c.31 0 .561-.25.561-.56 0-.31-.251-.56-.561-.56h-.05zm4.846 1.623a3.673 3.673 0 00-2.716 1.173 3.673 3.673 0 00-.773 3.992l-.001-.004a3.673 3.673 0 003.49 2.51c2.028 0 3.674-1.646 3.674-3.674 0-2.027-1.646-3.673-3.674-3.673l.001-.324zm0 1.95a1.724 1.724 0 110 3.448 1.724 1.724 0 010-3.448z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
