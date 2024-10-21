import HeaderText from "../components/HeaderText";
import Input from "../components/Input";
import Button from "../components/Button";
import SocialMediaIcons from "../components/SocialMediaIcons";
import "../index.css";

import { IonRouterLink } from "@ionic/react";
import { emailIcon, passwordIcon } from "../Icons/icons";
import { useState, useEffect } from "react";
const Login: React.FC = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const handleLogin = () => {
    console.log("Login clicked");
    console.log("Email:", email);
    console.log("Password:", password);
  };
  const handleEmailOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log("Changed Email:", e.target.value);
  };

  const handlePasswordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    console.log("Changed Password:", e.target.value);
  };

  return (
    <div className="text-black p-8 flex flex-col justify-between h-full w-full">
      <div className="flex flex-col justify-between gap-10">
        <HeaderText text="Welcome Back!" />
        <Input
          icon={emailIcon}
          placeholder="Username or Email"
          type="Text"
          onChange={handleEmailOnChange}
        />
        <Input
          icon={passwordIcon}
          placeholder="Password"
          type="Password"
          onChange={handlePasswordOnChange}
        />
        <IonRouterLink
          routerLink="forgotpassword"
          className="text-[#FF4B26] self-end"
        >
          Forgot Password?
        </IonRouterLink>
        <Button text="Login" onClick={handleLogin} />
      </div>
      <SocialMediaIcons />
      <IonRouterLink
        routerLink="signup"
        className="text-white self-center text-2xl mb-10"
      >
        Signup
      </IonRouterLink>
    </div>
  );
};

export default Login;
