interface IProps {
  children: React.ReactNode;
  bgcolor?: string;
  className?: string;
  type ? : "submit" | "reset" | "button" 
}
const Btn = ({ children, bgcolor = "#4cceac", className  , type = "button"}: IProps) => {
  return (
    <button
      className={`flex items-center space-x-2  capitalize py-2 px-4 rounded-md ${className}  `}
      style={{ backgroundColor: bgcolor }}
      type={type}
    >
      {children}
    </button>
  );
};

export default Btn;
