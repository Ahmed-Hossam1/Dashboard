interface IProps {
  children: React.ReactNode;
  className ?: string
  Cols?: string;
}
const DashBoardBox = ({ children, Cols , className }: IProps) => {
  return (
    <div className={`box p-5 dark:bg-[#1f2a40] bg-[#f2f0f0] ${className} col-span-${Cols}`}>{children}</div>
  );
};

export default DashBoardBox;
