import { useEffect, useState } from "react";

export const useHeader = () => {
  const [userName, setUserName] = useState<string>("Гость");
  const [initials, setInitials] = useState<string>("Г");

  const updateUserName = () => {
    const storedName = localStorage.getItem("name") || "Гость";
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
