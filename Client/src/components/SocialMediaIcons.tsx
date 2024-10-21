import { GoogleIcon } from "../Icons/socialmediaIcons";
import { AppleIcon } from "../Icons/socialmediaIcons";
import { FacebookIcon } from "../Icons/socialmediaIcons";

const SocialMediaIcons = () => {
  return (
    <div className=" text-white flex flex-col items-center justify-center gap-10">
      <h1 className="text-[#676767]">sign up with</h1>
      <div className="text-white flex w-full justify-center gap-5">
        <div className="">{GoogleIcon()}</div>
        <div className="">{AppleIcon()}</div>
        <div className="">{FacebookIcon()}</div>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
