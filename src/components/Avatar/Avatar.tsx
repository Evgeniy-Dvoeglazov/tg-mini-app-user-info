import useTelegram from "../../hooks/useTelegram";

const Avatar = () => {
  const { user, buttonColor, linkColor } = useTelegram();
  return (
    <div className="flex justify-center mb-6">
      <div className="relative">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${linkColor}, ${buttonColor})`,
            boxShadow: `0 10px 30px ${linkColor}30`,
          }}
        >
          <span className="text-2xl font-bold text-white">
            {user?.first_name?.charAt(0).toUpperCase() || "?"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
