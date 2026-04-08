import useTelegram from "../../hooks/useTelegram";
import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import UserStatus from "../UserStatus/UserStatus";

const UserCard = () => {
  const { bgColor, linkColor } = useTelegram();
  return (
    <section className="relative max-w-md w-full">
      <div
        className="relative backdrop-blur-sm rounded-2xl p-6 shadow-2xl border"
        style={{
          backgroundColor: `${bgColor}`,
          borderColor: `${linkColor}50`,
        }}
      >
        <UserStatus />
        <Avatar />
        <UserInfo />
      </div>
    </section>
  );
};

export default UserCard;
