import { sendPasswordResetEmail } from "firebase/auth/web-extension";
import React from "react";

const ResetButton = ({ email }) => {
  const handleReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => toast.info("Şifre sıfırlama epostası gönderildi.Mailinizi kontrol edin"))
      .catch(() => toast.error("Mail gönderilemiyor"));
  };
  return (
    <button onClick={handleReset} className="text-red-500">
      Şifrenizi mi unuttunuz?
    </button>
  );
};

export default ResetButton;
