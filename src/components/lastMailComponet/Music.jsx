import { useRef, useState, useEffect } from "react";
import song from "../../assets/Song/Song.m4a";

const Music = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // format thời gian mm:ss
  const formatTime = (time) => {
    if (!time) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setMeta = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setMeta);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setMeta);
    };
  }, []);

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <>
      <div class="flex-1 w-full max-w-[1200px] mx-auto p-4 md:p-8 flex flex-col items-center">
        <div class="w-full max-w-[800px] h-8 mb-4 flex justify-between px-10 relative">
          <div class="absolute top-2 left-0 right-0 h-1 bg-black rounded-full z-0"></div>

          <div class="w-4 h-4 rounded-full bg-red-500 comic-border-thin z-10 light-glow relative -top-1"></div>
          <div class="w-4 h-4 rounded-full bg-yellow-400 comic-border-thin z-10 light-glow relative top-1"></div>
          <div class="w-4 h-4 rounded-full bg-blue-500 comic-border-thin z-10 light-glow relative -top-1"></div>
          <div class="w-4 h-4 rounded-full bg-green-500 comic-border-thin z-10 light-glow relative top-1"></div>
          <div class="w-4 h-4 rounded-full bg-red-500 comic-border-thin z-10 light-glow relative -top-1"></div>
          <div class="w-4 h-4 rounded-full bg-yellow-400 comic-border-thin z-10 light-glow relative top-1"></div>
          <div class="w-4 h-4 rounded-full bg-blue-500 comic-border-thin z-10 light-glow relative -top-1"></div>
          <div class="w-4 h-4 rounded-full bg-green-500 comic-border-thin z-10 light-glow relative top-1"></div>
        </div>

        <div class="w-full max-w-[800px] h-8 mb-4 flex justify-center px-10 relative">
          <h6 className="text-xl md:text-3xl font-black text-black">
            Bật nhạc lên trước khi đọc thư nhá bae!
          </h6>
        </div>
        {/* AUDIO */}

        <audio ref={audioRef}>
          <source src={song} type="audio/mp4" />
        </audio>

        <div className="flex-1 w-full max-w-[1200px] mx-auto p-4 md:p-8 flex flex-col items-center">
          <div className="w-full max-w-[900px] bg-[#e0d6d6] comic-border rounded-[2rem] p-6 md:p-10 shadow-comic relative overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* ĐĨA NHẠC */}
              <div className="relative w-64 h-64 flex-shrink-0">
                <div
                  className={`relative w-full h-full rounded-full bg-[#111] comic-border shadow-xl
                ${isPlaying ? "animate-spin-slow" : ""}`}
                >
                  <div className="absolute inset-8 rounded-full border border-[#222]" />
                  <div className="absolute inset-12 rounded-full border border-[#222]" />

                  <div className="w-1/3 h-1/3 bg-primary rounded-full comic-border-thin flex items-center justify-center absolute inset-0 m-auto">
                    <div className="w-2 h-2 bg-black rounded-full" />
                  </div>
                </div>
              </div>

              {/* INFO */}
              <div className="flex flex-col w-full gap-6">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-5xl font-black text-white">
                    Our beloved winter!
                  </h2>
                  <p className="text-lg font-bold text-white">Nhớ Nhi nên fill ra đoá</p>
                  <p className="text-lg font-bold text-white">Khle</p>
                </div>

                {/* PROGRESS */}
                <div className="w-full space-y-2">
                  <div className="flex justify-between text-xs font-bold opacity-70">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                  <div className="h-6 w-full bg-[#1a0b0b] comic-border-thin rounded-full relative overflow-hidden">
                    <div
                      className="h-full bg-primary absolute top-0 left-0 border-r-2 border-black"
                      style={{
                        width: `${progressPercent}%`,
                        backgroundImage:
                          "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.2) 10px, rgba(255,255,255,0.2) 20px)",
                      }}
                    />
                  </div>
                </div>

                {/* CONTROLS */}
                <div className="flex items-center justify-center gap-6">
                  <button className="w-12 h-12 rounded-full bg-[#2f1b1b] comic-border flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">
                      skip_previous
                    </span>
                  </button>

                  <button
                    onClick={togglePlay}
                    className="w-20 h-20 rounded-full bg-primary comic-border shadow-comic flex items-center justify-center text-white hover:scale-105 transition"
                  >
                    <span className="material-symbols-outlined text-5xl">
                      {isPlaying ? "pause" : "play_arrow"}
                    </span>
                  </button>

                  <button className="w-12 h-12 rounded-full bg-[#2f1b1b] comic-border flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">skip_next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Music;
