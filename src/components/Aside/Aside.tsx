import { House, MenuIcon } from "lucide-react";
import { Charts, Data, Pages } from "../../data/data";
import { NavLink } from "react-router-dom";
import MenuItemComponent from "../MenuItem/MenuItem";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";

const Aside = () => {
  const themes = {
    light: {
      sidebar: {
        backgroundColor: "#ffffff",
        color: "#607489",
      },
      menu: {
        menuContent: "#fbfcfd",
        icon: "#0098e5",
        disabled: {
          color: "#9fb6cf",
        },
      },
    },
    dark: {
      sidebar: {
        backgroundColor: "#111827 ",
        color: "#8ba1b7",
      },
      menu: {
        menuContent: "#082440",
        icon: "#59d0ff",
        hover: {
          backgroundColor: "#00458b",
          color: "#b6c8d9",
        },
        disabled: {
          color: "#3e5e7e",
        },
      },
    },
  };

  const [isCollapsed, setIsCollapsed] = useState(false);

  const AsideDataItems = Data.map((item, idx) => {
    return (
      <MenuItemComponent name={item.name} favicon={item.favicon} key={idx} />
    );
  });
  const AsidePageItems = Pages.map((item, idx) => {
    return (
      <MenuItemComponent name={item.name} favicon={item.favicon} key={idx} />
    );
  });

  const AsideChartsItems = Charts.map((item, idx) => {
    return (
      <MenuItemComponent name={item.name} favicon={item.favicon} key={idx} />
    );
  });

  const isDark = useSelector((state: RootState) => state.DarkMode.value);

  return (
    <Sidebar
      collapsed={isCollapsed}
      backgroundColor={
        isDark
          ? themes.dark.sidebar.backgroundColor 
          : themes.light.sidebar.backgroundColor
      }
    >
      <Menu className="px-4">
        {!isCollapsed && (
          <>
            <div className="flex justify-between items-center my-5">
              <h1 className=" uppercase text-semibold text-2xl tracking-wide">
                admins
              </h1>
              <MenuIcon
                className="cursor-pointer"
                onClick={() => setIsCollapsed(!isCollapsed)}
              />
            </div>

            <div className="admin flex flex-col items-center capitalize mb-5">
              <div className="profile-img">
                <img
                  src="./Banking-Desktop.webp"
                  alt="AdminImg"
                  className="mb-5 w-[100px] h-[100px] object-cover rounded-full"
                />
              </div>
              <h2 className="admin-name  font-bold text-xl">Ahmed.H</h2>
              <p className="text-mainColor ">vp fancy admin</p>
            </div>
          </>
        )}
        {/* -----DASHBOARD ITEM----- */}
        <MenuItem>
          <NavLink
            to="/"
            className="flex items-center space-x-3 capitalize text-sm"
          >
            <span>
              <House size={20} />
            </span>
            <span>Dashboard</span>
          </NavLink>
        </MenuItem>

        {/* -----DATA ITEMS----- */}
        <div className="data">
          <h2 className="capitalize text-lg text-gray-600 mb-2">data</h2>
          {AsideDataItems}
        </div>

        {/* -----PAGES ITEMS----- */}
        <div className="pages">
          <h2 className="capitalize text-lg text-gray-600 mb-2">pages</h2>
          {AsidePageItems}
        </div>

        {/* -----CHARTS ITEMS----- */}
        <div className="charts">
          <h2 className="capitalize text-lg text-gray-600 mb-2">Charts</h2>
          {AsideChartsItems}
        </div>
      </Menu>
    </Sidebar>
  );
};

export default Aside;
