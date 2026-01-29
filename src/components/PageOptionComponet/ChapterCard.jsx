const ChapterCard = ({
  onClick,
  bgImage,
  chapter,
  title,
  badge,
  badgePosition = "top-left",
  footerBg = "bg-yellow-50",
}) => {
  return (
    <div
      onClick={onClick}
      className="group h-[400px] perspective-1000 cursor-pointer"
    >
      <div className="relative h-full w-full transition-all duration-700 preserve-3d group-hover:rotate-y-180 shadow-comic rounded-2xl">
        {/* FRONT */}
        <div className="absolute inset-0 h-full w-full backface-hidden rounded-2xl border-4 border-black bg-white overflow-hidden flex flex-col">
          <div
            className="h-2/3 bg-cover bg-center border-b-4 border-black relative"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {chapter && (
              <div className="absolute bottom-2 right-2 bg-white px-2 border-2 border-black text-xs font-bold">
                {chapter}
              </div>
            )}

            {badge && (
              <div
                className={`absolute ${
                  badgePosition === "top-left"
                    ? "top-2 left-2"
                    : "top-2 right-2"
                } bg-comic-red text-white px-2 border-2 border-black text-xs font-bold transform -rotate-3`}
              >
                {badge}
              </div>
            )}
          </div>

          <div
            className={`flex-1 p-6 flex items-center justify-center ${footerBg}`}
          >
            <h3 className="text-2xl font-black text-center uppercase">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterCard;
