import { BellIcon, Settings, User } from "lucide-react";
import DarkModeToggle from "../UI/DarkModeToggle";

const Nav = () => {
  return (
    <nav>
      <div className="flex justify-between items-center ">
        <div className="search">
          <form className="w-full">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                required
              />
            </div>
          </form>
        </div>
        <div className="icons flex items-center space-x-2">
          <div className="hover:bg-gray-200 hover:dark:bg-[#0b2948] h-10 w-10 rounded-full center-flex">
            <DarkModeToggle />
          </div>
          <div className="hover:bg-gray-200  hover:dark:bg-[#0b2948] h-10 w-10 rounded-full center-flex cursor-pointer">
            <BellIcon />
          </div>
          <div className="hover:bg-gray-200  hover:dark:bg-[#0b2948] h-10 w-10 rounded-full center-flex cursor-pointer">
            <Settings />
          </div>
          <div className="hover:bg-gray-200  hover:dark:bg-[#0b2948] h-10 w-10 rounded-full center-flex cursor-pointer">
            <User />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
