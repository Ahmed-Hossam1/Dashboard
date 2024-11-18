import { Outlet } from "react-router-dom";
import Aside from "../components/Aside/Aside";
import Nav from "../components/Nav/Nav";

const RootLayout = () => {
  return (
    <div className="RootLayout flex">
      <Aside />
      <main className="flex-1 px-4 pt-2">
        <Nav />
        <div className="pt-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
