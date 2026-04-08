import useTelegram from "../../hooks/useTelegram";

const UserStatus = () => {
  const { user, buttonTextColor, buttonColor, linkColor } = useTelegram();

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div
          className="w-3 h-3 rounded-full animate-pulse"
          style={{
            backgroundColor: linkColor,
            boxShadow: `0 0 10px ${linkColor}50`,
          }}
        ></div>
        <span
          className="text-sm font-mono tracking-wider"
          style={{ color: linkColor }}
        >
          ONLINE
        </span>
      </div>
      {user?.is_premium && (
        <div
          className="px-3 py-1 rounded-full text-xs font-bold tracking-wide"
          style={{
            backgroundColor: buttonColor,
            color: buttonTextColor,
          }}
        >
          ⭐ PREMIUM
        </div>
      )}
    </div>
  );
};

export default UserStatus;
