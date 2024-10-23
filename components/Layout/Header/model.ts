import { useEffect, useState } from "react";

export const useHeader = () => {
  const [userName, setUserName] = useState<string>("Ваше имя");
  const [initials, setInitials] = useState<string>("В");

  const updateUserName = () => {
    let storedName = localStorage.getItem("name") || "Ваше имя";
    storedName =
      storedName.charAt(0).toUpperCase() + storedName.slice(1).toLowerCase();

    setUserName(storedName);
    setInitials(storedName.charAt(0).toUpperCase());
  };

  useEffect(() => {
    updateUserName();

    window.addEventListener("storage", updateUserName);

    return () => {
      window.removeEventListener("storage", updateUserName);
    };
  }, []);

  return { userName, initials };
};
