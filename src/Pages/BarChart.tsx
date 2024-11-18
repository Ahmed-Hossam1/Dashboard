import PageHeadingText from "../components/PageHeadingText/PageHeadingText";
import BarCharts from "../components/Barcharts/BarCharts";

const BarChartPage = () => {
  return (
    <div className="barchart h-[79vh]">
      <PageHeadingText h1="bar chart" paragraph="Simple Bar Chart" />
        <BarCharts />
    </div>
  );
};

export default BarChartPage;
