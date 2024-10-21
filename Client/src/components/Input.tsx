export interface UserProps {
  icon: any;
  placeholder: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ icon, placeholder, type, onChange }: UserProps) => {
  return (
    <div className="text-sm tracking-wider text-white flex w-full items-center justify-start p-6  bg-[#262626] rounded-lg gap-3">
      <div className="text-white text-3xl w-6 h-6 flex-center">{icon}</div>
      <input
        type={`${type}`}
        placeholder={`${placeholder}`}
        className="bg-transparent"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
