import { useEffect } from "react";
import UserCard from "./components/UserCard/UserCard";
import useTelegram from "./hooks/useTelegram";

function App() {
  const { tg, bgColor, textColor } = useTelegram();

  useEffect(() => {
    tg?.ready();
  }, []);

  return (
    <div
      style={{ backgroundColor: bgColor, color: textColor, minHeight: "100vh" }}
      className="p-4 flex items-center justify-center"
    >
      <UserCard />
    </div>
  );
}

export default App;
