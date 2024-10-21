import HeaderText from "../components/HeaderText";
import Input from "../components/Input";
import Button from "../components/Button";
import "../index.css";
import SocialMediaIcons from "../components/SocialMediaIcons";

import { IonRouterLink } from "@ionic/react";
import { emailIcon, passwordIcon } from "../Icons/icons";
import { useState, useEffect } from "react";
const Login: React.FC = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState<string | null>(null);

  const handleSignup = () => {
    // Check if any fields are null or empty
    if (!email || !password || !confirmPassword) {
      console.log("Please fill in all fields.");
      return; // Exit the function early if any field is empty
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      console.log("Passwords do not match.");
      return; // Exit if passwords do not match
    }

    // Proceed with signup logic
    console.log("Signup clicked");
    console.log("Email:", email);
    console.log("Password:", password);

    // Add your signup logic here (e.g., API call)
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
        <HeaderText text="Create an Account" />
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
        <Button text="Signup" onClick={handleSignup} />
      </div>
      <SocialMediaIcons />
      <IonRouterLink
        routerLink="login"
        className="text-white self-center text-xl mb-10"
      >
        Already have an account? Login
      </IonRouterLink>
    </div>
  );
};

export default Login;
