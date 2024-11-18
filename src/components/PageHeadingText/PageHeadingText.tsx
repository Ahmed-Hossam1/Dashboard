interface IProps {
  h1: string;
  paragraph?: string;
}
const PageHeadingText = ({ h1, paragraph }: IProps) => {
  return (
    <div className="mb-8">
      <h1 className="uppercase font-bold text-2xl tracking-wider">{h1}</h1>
      <p className="text-mainColor"> {paragraph} </p>
    </div>
  );
};

export default PageHeadingText;
