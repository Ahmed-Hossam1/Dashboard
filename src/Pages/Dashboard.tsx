import { DownloadIcon } from "lucide-react";
import Btn from "../components/UI/Btn";
import PageHeadingText from "../components/PageHeadingText/PageHeadingText";
import { dashdatarow1, DataInvoices } from "../data/data";
import LineChart from "../components/LineChart/LineChart";
import BarCharts from "../components/Barcharts/BarCharts";
import Geography from "../components/Geography/Geography";
import Circle from "../components/circle/Circle";

const DashboardPage = () => {
  return (
    <div className="Dashboard ">
      <div className="flex justify-between items-center">
        <PageHeadingText h1="Dashboard" paragraph="Welcome to your dashboard" />
        <Btn className="text-sm font-bold">
          <DownloadIcon />
          <span>download reports</span>
        </Btn>
      </div>
      <div className="grid grid-cols-12 gap-10">
        {/* ROW -- 1 */}
        {dashdatarow1.map((item, idx) => (
          <div
            className={`box p-5 dark:bg-[#1f2a40] bg-[#f2f0f0] col-span-3`}
            key={idx}
          >
            <div className="flex justify-between items-center">
              <div>
                <span className="text-mainColor"> {item.favicon}</span>
                <span className="font-bold text-lg inline-block mb-2 ">
                  {item.number}
                </span>
              </div>
              <Circle />
            </div>

            <div className="flex  justify-between items-center text-mainColor capitalize">
              <span className="flex-1">{item.description}</span>
              <span>{item.offer}</span>
            </div>
          </div>
        ))}

        {/* ROW -- 2 */}
        <div className="box p-5 dark:bg-[#1f2a40] bg-[#f2f0f0] h-[300px] col-span-8">
          <LineChart />
        </div>

        <div className="box p-5 dark:bg-[#1f2a40] bg-[#f2f0f0] col-span-4 h-[300px] overflow-y-auto">
          <PageHeadingText h1="Recent Transactions" />
          {DataInvoices.map((item) => (
            <div className="flex justify-between items-center my-5">
              <div>
                <div className="text-mainColor">{item.name}</div>
                <div>{item.email}</div>
              </div>

              <p className="date text-center flex-1">{item.date}</p>
              <Btn>
                <span>${item.cost}</span>
              </Btn>
              <hr />
            </div>
          ))}
        </div>

        {/* ROW -- 3 */}
        <div className="box p-5 dark:bg-[#1f2a40] bg-[#f2f0f0] h-[300px] col-span-4">
          <PageHeadingText h1="Campaign" />
          <div className="center-flex my-6 ">
            <Circle />
          </div>
          <div>
            <h2 className="text-mainColor">$48,352 revenue generated</h2>
            <p>Includes extra misc expenditures and costs</p>
          </div>
        </div>

        <div className="box p-5 dark:bg-[#1f2a40] bg-[#f2f0f0]  h-[300px] col-span-4">
          <BarCharts />
        </div>

        <div className="box p-5 dark:bg-[#1f2a40] bg-[#f2f0f0] h-[300px]  col-span-4">
          <PageHeadingText h1="Geography based traffic" />
          <Geography />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
