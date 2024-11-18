import PageHeadingText from "../components/PageHeadingText/PageHeadingText";
import { ResponsiveSunburst } from "@nivo/sunburst";
import { PieChart as data } from "../data/data";
const PieChartPage = () => {
  return (
    <div className="piechart h-[79vh]">
      <PageHeadingText h1="pie chart" paragraph="Simple Pie Chart" />
      <ResponsiveSunburst
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        id="name"
        value="loc"
        cornerRadius={2}
        borderColor={{ theme: "background" }}
        colors={{ scheme: "nivo" }}
        childColor={{
          from: "color",
          modifiers: [["brighter", 0.1]],
        }}
        enableArcLabels={true}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 1.4]],
        }}
      />
    </div>
  );
};

export default PieChartPage;
