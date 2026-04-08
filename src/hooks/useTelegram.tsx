const tg = window.Telegram?.WebApp;

const useTelegram = () => {
  const user = tg?.initDataUnsafe?.user;
  const theme = tg?.themeParams;

  const bgColor = theme?.bg_color || "#0a0a0a";
  const textColor = theme?.text_color || "#ffffff";
  const buttonColor = theme?.button_color || "#3b82f6";
  const buttonTextColor = theme?.button_text_color || "#fff";
  const linkColor = theme?.link_color || "#06b6d4";
  const hintColor = theme?.hint_color || "#6b7280";

  return {
    tg,
    user,
    bgColor,
    textColor,
    buttonColor,
    buttonTextColor,
    linkColor,
    hintColor,
  };
};

export default useTelegram;
