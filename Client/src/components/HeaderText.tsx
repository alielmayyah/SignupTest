export interface UserProps {
  text: string;
}
const HeaderText = ({ text }: UserProps) => {
  return <div className="text-3xl text-white">{text}</div>;
};

export default HeaderText;
