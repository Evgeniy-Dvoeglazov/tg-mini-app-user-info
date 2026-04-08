import useTelegram from "../../hooks/useTelegram";

const UserInfo = () => {
  const { user, bgColor, hintColor, buttonColor, linkColor } = useTelegram();

  const fields = [
    {
      label: "NAME",
      value: `${user?.first_name || "Unknown"} ${user?.last_name || ""}`,
    },
    { label: "USERNAME", value: `@${user?.username || "anonymous"}` },
    { label: "USER ID", value: `#${user?.id || "000000"}` },
  ];

  return (
    <div className="space-y-3">
      {fields.map((item, i) => (
        <div
          key={i}
          className="rounded-lg p-3 border"
          style={{
            backgroundColor: `${bgColor}80`,
            borderColor: `${hintColor}30`,
          }}
        >
          <div className="flex justify-between items-center">
            <span className="text-sm font-mono" style={{ color: hintColor }}>
              {item.label}
            </span>
            <span
              className="font-semibold"
              style={{ color: i % 2 ? linkColor : buttonColor }}
            >
              {item.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserInfo;
