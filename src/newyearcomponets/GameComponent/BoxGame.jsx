import "./BoxGame.css";
import { useState, useEffect } from "react";
const BoxGame = () => {
  const icons = [
    "diamond",
    "potted_plant",
    "local_florist",
    "pets",
    "star",
    "favorite",
    "eco",
    "celebration",
    "emoji_nature",
    "auto_awesome",
  ];

  const createCards = () => {
    return [...icons, ...icons]
      .map((icon, index) => ({
        id: index + "-" + Math.random(),
        icon,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);
  };
  const [isPlaying, setIsPlaying] = useState(false);

  const [cards, setCards] = useState(createCards());
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [lockBoard, setLockBoard] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [resultType, setResultType] = useState("");
  const MAX_MOVES = 30;
  const START_MINUTES = 5;
  const [timeLeft, setTimeLeft] = useState(START_MINUTES * 60); // giây

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const [matchedPairs, setMatchedPairs] = useState(0);
  const [movesUsed, setMovesUsed] = useState(0);

  const [score, setScore] = useState(0);

  const handleCardClick = (card) => {
    if (!isPlaying) return;
    if (lockBoard) return;
    if (card.isFlipped || card.isMatched) return;

    setCards((prev) =>
      prev.map((c) => (c.id === card.id ? { ...c, isFlipped: true } : c))
    );

    if (!firstCard) {
      setFirstCard(card);
    } else {
      setSecondCard(card);
      setLockBoard(true);
    }
  };
  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setLockBoard(false);
  };
  //   const resetGame = () => {
  //     setCards(createCards());
  //     setFirstCard(null);
  //     setSecondCard(null);
  //     setMatchedPairs(0);
  //     setMovesLeft(20);
  //     setScore(0);
  //   };

  //   useEffect(() => {
  //     if (!firstCard || !secondCard) return;

  //     if (firstCard.icon === secondCard.icon) {
  //       // ✅ ĐÚNG
  //       setCards((prev) =>
  //         prev.map((c) =>
  //           c.icon === firstCard.icon ? { ...c, isMatched: true } : c
  //         )
  //       );

  //       setMatchedPairs((p) => p + 1);
  //       setScore((s) => s + 100);
  //       resetTurn();
  //     } else {
  //       // ❌ SAI
  //       setMovesLeft((m) => m - 1);

  //       setTimeout(() => {
  //         setCards((prev) =>
  //           prev.map((c) =>
  //             c.id === firstCard.id || c.id === secondCard.id
  //               ? { ...c, isFlipped: false }
  //               : c
  //           )
  //         );
  //         resetTurn();
  //       }, 800);
  //     }
  //   }, [secondCard]);
  const resetGame = () => {
    setCards(createCards());
    setFirstCard(null);
    setSecondCard(null);
    setMatchedPairs(0);
    setMovesUsed(0);
    setScore(0);
    setTimeLeft(START_MINUTES * 60);
  };

  useEffect(() => {
    if (!firstCard || !secondCard) return;

    setMovesUsed((m) => m + 1); // ✅ mỗi 2 lá = 1 lượt

    if (firstCard.icon === secondCard.icon) {
      setCards((prev) =>
        prev.map((c) =>
          c.icon === firstCard.icon ? { ...c, isMatched: true } : c
        )
      );

      setMatchedPairs((p) => p + 1);
      setScore((s) => s + 10); // ✅ 20 điểm / cặp
      resetTurn();
    } else {
      setTimeout(() => {
        setCards((prev) =>
          prev.map((c) =>
            c.id === firstCard.id || c.id === secondCard.id
              ? { ...c, isFlipped: false }
              : c
          )
        );
        resetTurn();
      }, 800);
    }
  }, [secondCard]);

  //   useEffect(() => {
  //     if (matchedPairs === icons.length) {
  //       alert(`🎉 Bạn thắng!
  // Điểm: ${score}
  // Lượt dùng: ${movesUsed}/${MAX_MOVES}`);
  //     }

  //     if (movesUsed >= MAX_MOVES && matchedPairs !== icons.length) {
  //       alert(`💥 Hết lượt!
  // Cặp tìm được: ${matchedPairs}/${icons.length}
  // Điểm: ${score}`);
  //     }
  //   }, [matchedPairs, movesUsed]);
  useEffect(() => {
    if (matchedPairs === icons.length) {
      setResultType("win");
      setShowResult(true);
    }

    if (movesUsed >= MAX_MOVES && matchedPairs !== icons.length) {
      setResultType("lose");
      setShowResult(true);
    }
  }, [matchedPairs, movesUsed]);

  useEffect(() => {
    if (!isPlaying || showResult) return;

    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 0) return 0;
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying, showResult]);

  useEffect(() => {
    const elapsed = START_MINUTES * 60 - timeLeft;

    // chỉ tính khi đã quá 5 phút
    if (elapsed > 0 && elapsed % 60 === 0) {
      setScore((s) => Math.max(0, s - 5));
    }
  }, [timeLeft]);

  return (
    <>
      <div class="layout-container relative z-10 flex h-full grow flex-col">
        <div class="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-8">
          <div class="layout-content-container flex flex-col w-full max-w-[1200px] flex-1 gap-8">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 bg-white p-6 rounded-2xl comic-border comic-shadow relative overflow-hidden">
              <div class="absolute -right-10 -top-10 opacity-10 pointer-events-none">
                <span class="material-symbols-outlined text-[200px] text-primary">
                  local_florist
                </span>
              </div>
              <div class="flex flex-col gap-3 relative z-10 max-w-2xl">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit">
                  <span class="material-symbols-outlined text-primary text-sm">
                    celebration
                  </span>
                  <span class="text-primary text-xs font-bold uppercase tracking-wide">
                    Mini Game Tết
                  </span>
                </div>
                <h1 class="text-3xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-[#181211]">
                  Vui Xuân Bính Ngọ -
                  <span class="text-primary">Thử Tài Tinh Mắt</span>
                </h1>
                <p class="text-[#896861] text-lg font-medium leading-relaxed italic">
                  "Hoa mai nở rộ, én về chao nghiêng. Tìm cặp hình giống nhau để
                  nhận lì xì may mắn đầu năm!"
                </p>
              </div>
              <div class="flex gap-3 relative z-10">
                <button
                  onClick={() => setShowRules(true)}
                  class="cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-[#f4f1f0] text-[#181211] text-sm font-bold border-2 border-[#181211] hover:bg-[#e6e2e1] transition-colors flex gap-2"
                >
                  <span class="material-symbols-outlined">help</span>
                  <span>Luật chơi</span>
                </button>
                <button
                  onClick={() => {
                    setIsPlaying(true);
                    setShowRules(false);
                  }}
                  class="cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary text-white text-sm font-bold border-2 border-[#181211] comic-shadow active:translate-y-[2px] active:shadow-none flex gap-2"
                >
                  <span class="material-symbols-outlined">play_circle</span>
                  <span>Bắt đầu</span>
                </button>
              </div>
            </div>
            <div class="flex flex-col lg:flex-row gap-8">
              <div class="flex flex-col gap-6 lg:w-1/3 shrink-0">
                <div class="bg-white rounded-2xl p-6 comic-border comic-shadow relative">
                  <div class="absolute -top-3 left-6 bg-[#181211] text-white px-3 py-1 text-xs font-bold rounded uppercase tracking-wider">
                    Thời gian
                  </div>
                  <div class="flex gap-3 mt-2">
                    <div class="flex grow basis-0 flex-col items-center gap-1">
                      <div class="flex size-14 md:size-16 items-center justify-center rounded-xl bg-[#F4F1F0] border-2 border-[#E6DDDB]">
                        <p class="text-[#181211] text-2xl font-black">
                          {String(minutes).padStart(2, "0")}
                        </p>
                      </div>
                      <p class="text-[#896861] text-xs font-bold uppercase">
                        Phút
                      </p>
                    </div>
                    <div class="flex items-center pt-2">
                      <span class="text-2xl font-black text-[#E6DDDB]">:</span>
                    </div>
                    <div class="flex grow basis-0 flex-col items-center gap-1">
                      <div class="flex size-14 md:size-16 items-center justify-center rounded-xl bg-white border-2 border-primary text-primary shadow-inner">
                        <p class="text-2xl font-black">
                          {String(seconds).padStart(2, "0")}
                        </p>
                      </div>
                      <p class="text-primary text-xs font-bold uppercase">
                        Giây
                      </p>
                    </div>
                  </div>
                </div>

                <div class="bg-white rounded-2xl p-6 comic-border comic-shadow flex flex-col gap-4 relative">
                  <div class="absolute -top-3 left-6 bg-[#181211] text-white px-3 py-1 text-xs font-bold rounded uppercase tracking-wider">
                    Thành tích
                  </div>
                  <div class="flex items-center justify-between border-b border-dashed border-[#E6DDDB] pb-4 mt-2">
                    <div class="flex items-center gap-3">
                      <div class="size-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center border border-green-200">
                        <span class="material-symbols-outlined">style</span>
                      </div>
                      <p class="text-sm font-bold text-[#181211]">Cặp đã tìm</p>
                    </div>
                    <p class="text-2xl font-black text-[#181211]">
                      {matchedPairs}/{icons.length}
                    </p>
                  </div>
                  <div class="flex items-center justify-between border-b border-dashed border-[#E6DDDB] pb-4">
                    <div class="flex items-center gap-3">
                      <div class="size-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center border border-blue-200">
                        <span class="material-symbols-outlined">trophy</span>
                      </div>
                      <p class="text-sm font-bold text-[#181211]">Điểm số</p>
                    </div>
                    <p class="text-2xl font-black text-[#181211]">{score}</p>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="size-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center border border-red-200">
                        <span class="material-symbols-outlined">favorite</span>
                      </div>
                      <p class="text-sm font-bold text-[#181211]">
                        Lượt còn lại
                      </p>
                    </div>
                    <p class="text-2xl font-black text-[#181211]">
                      {MAX_MOVES - movesUsed}
                    </p>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                  <button class="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-secondary/20 border-2 border-secondary hover:bg-secondary/30 transition-all group">
                    <div class="size-10 rounded-full bg-secondary text-[#181211] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <span class="material-symbols-outlined">lightbulb</span>
                    </div>
                    <span class="text-sm font-bold text-[#8B6E00]">Gợi ý</span>
                  </button>
                  <button
                    onClick={resetGame}
                    class="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-primary/10 border-2 border-primary/30 hover:bg-primary/20 transition-all group"
                  >
                    <div class="size-10 rounded-full bg-primary text-white flex items-center justify-center shadow-sm group-hover:rotate-12 transition-transform">
                      <span class="material-symbols-outlined">restart_alt</span>
                    </div>
                    <span class="text-sm font-bold text-primary">Chơi lại</span>
                  </button>
                </div>

                {/* <div class="hidden lg:flex grow bg-[#FFD700] rounded-2xl border-2 border-[#181211] shadow-[4px_4px_0px_0px_#181211] p-4 items-center gap-4 relative overflow-hidden">
                  <div
                    class="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(#000 1px, transparent 1px)",
                      backgroundSize: "10px 10px",
                    }}
                  ></div>
                  <img
                    alt="Festive decoration with lanterns"
                    class="size-20 rounded-full border-2 border-[#181211] object-cover bg-white z-10"
                    data-alt="Traditional red lantern decoration close up"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlCuIU0lxkeLmwlh2TNx7VtKsNLEuPZWbOEuc2mZrkXGOo8sDUiU3VX7DAMpcBxIqzGwmS3rgI7UOaEB1ObwYOiiaCPvbn7IVMRhDT_PkxO0I3GoHU4hskB7etGAKaNEkPN6dnJ7m1VwJr4RUzAPqD66d2RUghV2Lj6_8Kh6m4kZPNZjTy0RVc5sHWmypblwvR_FAAn_83wYuDPSCzteSIkKxVfLuGZDuIojNo8bg9mgmnmV6owyZ1PBWenGtFFvB86FRBbqedcSI"
                  />
                  <div class="flex flex-col z-10">
                    <span class="font-black text-[#181211] text-lg uppercase">
                      Cố lên bạn ơi!
                    </span>
                    <span class="text-sm font-medium text-[#181211]">
                      Sắp hoàn thành rồi!
                    </span>
                  </div>
                </div> */}
              </div>
              <div class="lg:w-2/3">
                <div class="bg-[#8B5A2B] p-4 rounded-2xl comic-shadow border-4 border-[#654321] relative">
                  <div class="absolute top-2 left-2 size-3 rounded-full bg-[#D4AF37] shadow-inner border border-[#654321]"></div>
                  <div class="absolute top-2 right-2 size-3 rounded-full bg-[#D4AF37] shadow-inner border border-[#654321]"></div>
                  <div class="absolute bottom-2 left-2 size-3 rounded-full bg-[#D4AF37] shadow-inner border border-[#654321]"></div>
                  <div class="absolute bottom-2 right-2 size-3 rounded-full bg-[#D4AF37] shadow-inner border border-[#654321]"></div>
                  <div class="bg-[#FFF8F6] rounded-xl p-4 md:p-6 border-2 border-[#654321] h-full shadow-inner">
                    <div class="grid grid-cols-5 grid-rows-4 gap-2 md:gap-4 aspect-square md:aspect-[4/3]">
                      {cards.map((card) => (
                        <div
                          key={card.id}
                          onClick={() => handleCardClick(card)}
                          className="game-card cursor-pointer"
                        >
                          <div
                            className={`w-full h-full rounded-lg border-2 flex items-center justify-center
          ${
            card.isFlipped || card.isMatched
              ? "bg-white border-green-500"
              : "bg-primary border-[#181211]"
          }
        `}
                          >
                            {card.isFlipped || card.isMatched ? (
                              <span className="material-symbols-outlined text-4xl text-green-600">
                                {card.icon}
                              </span>
                            ) : (
                              <span className="material-symbols-outlined text-white/40 text-4xl">
                                help
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showResult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white w-[90%] max-w-md rounded-2xl p-6 comic-border comic-shadow text-center animate-scaleIn relative">
            <span className="material-symbols-outlined text-[64px] text-primary mb-2">
              {resultType === "win" ? "emoji_events" : "sentiment_dissatisfied"}
            </span>

            <h2 className="text-3xl font-black mb-3 text-[#181211]">
              {resultType === "win" ? "🎉 Chiến thắng!" : "💥 Hết lượt!"}
            </h2>

            <div className="space-y-2 text-[#181211] text-sm">
              <p>
                🧩 Cặp tìm được:{" "}
                <b>
                  {matchedPairs}/{icons.length}
                </b>
              </p>
              <p>
                ⭐ Điểm số: <b>{score}</b>
              </p>
              <p>
                🔄 Lượt dùng:{" "}
                <b>
                  {movesUsed}/{MAX_MOVES}
                </b>
              </p>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => {
                  setShowResult(false);
                  resetGame();
                }}
                className="flex-1 bg-primary text-white py-3 rounded-xl font-bold border-2 border-[#181211] comic-shadow active:translate-y-[2px]"
              >
                Chơi lại
              </button>

              <button
                onClick={() => setShowResult(false)}
                className="flex-1 bg-[#f4f1f0] text-[#181211] py-3 rounded-xl font-bold border-2 border-[#181211]"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {showRules && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-[90%] max-w-md rounded-2xl p-6 comic-border comic-shadow relative animate-scaleIn">
            {/* Close button */}
            <button
              onClick={() => setShowRules(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-2xl font-black text-[#181211] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                celebration
              </span>
              Luật chơi
            </h2>

            <ul className="space-y-3 text-[#181211] text-sm leading-relaxed">
              <li>
                🎴 Lật <b>2 thẻ</b> mỗi lượt.
              </li>
              <li>
                ✅ Hai thẻ giống nhau → được <b>1 cặp</b> (+10 điểm).
              </li>
              <li>❌ Sai → thẻ sẽ úp lại.</li>
              <li>
                🔢 Tổng số lượt tối đa: <b>{MAX_MOVES}</b>.
              </li>
              <li>
                🏆 Thắng khi tìm đủ <b>{icons.length}</b> cặp.
              </li>
              <li>⏱ Quá 5 phút: mỗi phút -5 điểm!</li>
              <li>💥 Hết lượt mà chưa đủ cặp → thua.</li>
            </ul>

            <button
              onClick={() => setShowRules(false)}
              className="mt-6 w-full bg-primary text-white py-3 rounded-xl font-bold border-2 border-[#181211] comic-shadow active:translate-y-[2px]"
            >
              Đã hiểu, chơi thôi!
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BoxGame;
