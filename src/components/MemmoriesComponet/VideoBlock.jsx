import { useRef, useState } from "react";

const VideoBlock = ({ karaoke }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="col-span-1 md:col-span-2 md:row-span-1 relative group cursor-pointer h-84">
      {/* Border */}
      <div className="absolute inset-0 border-[6px] border-black z-10 pointer-events-none"></div>

      {/* Icon góc dưới */}
      <div className="absolute -bottom-4 -left-2 z-30 pointer-events-none">
        <span className="material-symbols-outlined text-green-700 text-4xl drop-shadow-[2px_2px_0_#000]">
          grass
        </span>
        <span className="material-symbols-outlined text-red-600 text-xl absolute top-1 left-3 drop-shadow-[1px_1px_0_#000]">
          circle
        </span>
      </div>

      {/* Video wrapper */}
      <div
        className="w-full h-full overflow-hidden bg-black relative"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={karaoke}
          className="w-full h-full object-cover"
          // muted
          loop
          playsInline
        />

        {/* Nút play (ẩn khi đang chạy) */}
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-primary/90 border-2 border-white rounded-full flex items-center justify-center shadow-[0_0_0_4px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined filled text-white text-3xl">
                play_arrow
              </span>
            </div>
          </div>
        )}

        {/* Label */}
        <div className="absolute top-0 left-0 bg-yellow-300 border-b-2 border-r-2 border-black px-4 py-1 pointer-events-none">
          <p className="font-comic font-black uppercase tracking-widest text-sm">
            Action!
          </p>
          <p class="text-xs font-mono mt-1">18.12.2025</p>
        </div>
      </div>
    </div>
  );
};

export default VideoBlock;
