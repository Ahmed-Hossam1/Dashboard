import LineChart from "../components/LineChart/LineChart";
import PageHeadingText from "../components/PageHeadingText/PageHeadingText";
const LineChartPage = () => {
  return (
    <div className="barchart h-[79vh]">
      <PageHeadingText h1="line chart" paragraph="Simple line Chart" />
      <LineChart />
    </div>
  );
};

export default LineChartPage;
