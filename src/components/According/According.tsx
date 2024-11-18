interface IProps {
    heading: string;
    content: string;
  }
const According = ({ heading, content }: IProps) => {
  return (
    <div className="collapse collapse-arrow bg-base-200 dark:bg-gray-800 my-8">
    <input type="radio" name="my-accordion-2" defaultChecked />
    <div className="collapse-title  font-medium capitalize text-sm text-mainColor">{heading}</div>
    <div className="collapse-content">
      <p>{content}</p>
    </div>
  </div>
  )
}

export default According