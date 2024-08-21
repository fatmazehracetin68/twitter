import { signInWithPopup } from "firebase/auth";
import React from "react";

const GoogleButton = () => {
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Oturum açıldı.");
        navigate("/");
      })
      .catch((err) => toast.err("Hata!:" + err.code));
  };
  return (
    <button
      onClick={handleLogin}
      className="bg-white flex items-center py-2 px-10 rounded-full gap-3 transition hover:bg-gray-300 text-black whitespace-nowrap"
    >
      <img src="G-logo.webp" className="h-[20px]" />
      Google ile Giriş Yap
    </button>
  );
};

export default GoogleButton;
