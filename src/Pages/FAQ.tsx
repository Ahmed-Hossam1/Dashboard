import { Fragment } from "react/jsx-runtime";
import According from "../components/According/According";
import { AccordingData } from "../data/data";

const FAQPage = () => {
  return (
    <div className="according">
      {AccordingData.map((data , idx) => (
        <Fragment  key={idx}>
        <According heading={data.header} content={data.content} />
        </Fragment>
      ))}
    </div>
  );
};

export default FAQPage;
