const arrowIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 8H15"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 1L15 8L8 15"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <div className="flex justify-between w-full items-center">
      <h1 className="text-white text-2xl">{text}</h1>
      <button
        className="rounded-full bg-[#FF4B26] p-4 h-16 w-16 flex items-center justify-center"
        onClick={onClick}
      >
        {arrowIcon}
      </button>
    </div>
  );
};

export default Button;
