import HeaderText from "../components/HeaderText";
import Input from "../components/Input";
import Button from "../components/Button";
import SocialMediaIcons from "../components/SocialMediaIcons";
import "../index.css";

import { IonRouterLink } from "@ionic/react";
import { emailIcon, passwordIcon } from "../Icons/icons";
import { useState, useEffect } from "react";
const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string | null>(null);

  const handleLogin = () => {
    console.log("Login clicked");
    console.log("Email:", email);
  };
  const handleEmailOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log("Changed Email:", e.target.value);
  };

  return (
    <div className="text-black p-8 flex flex-col justify-between h-full w-full">
      <div className="flex flex-col justify-between gap-10">
        <HeaderText text="Forgot Password?" />
        <Input
          icon={emailIcon}
          placeholder="Enter your email address"
          type="email"
          onChange={handleEmailOnChange}
        />

        <Button text="Send code" onClick={handleLogin} />
      </div>
    </div>
  );
};

export default ForgotPassword;
ForgotPassword;
