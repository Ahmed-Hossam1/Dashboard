import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import ManageTeamPage from "../Pages/ManageTeam";
import DashboardPage from "../Pages/Dashboard";
import BarChartPage from "../Pages/BarChart";
import PieChartPage from "../Pages/PieChart";
import LineChartPage from "../Pages/LineChartPage";
import GeographyPage from "../Pages/Geography";
import ContactPage from "../Pages/Contact";
import ProfileFormPage from "../Pages/ProfileFormPage";
import InvoicesPage from "../Pages/Invoices";
import FAQPage from "../Pages/FAQ";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<DashboardPage />} />
      <Route path="manage team" element={<ManageTeamPage />} />
      <Route path="contacts information" element={<ContactPage />} />
      <Route path="invoices balances" element={<InvoicesPage />} />
      <Route path="profile form" element={<ProfileFormPage />} />
      <Route path="faq page" element={<FAQPage />} />
      <Route path="bar chart" element={<BarChartPage />} />
      <Route path="pie chart" element={<PieChartPage />} />
      <Route path="line chart" element={<LineChartPage />} />
      <Route path="geography chart" element={<GeographyPage />} />
    </Route>
  )
);
export default router;
