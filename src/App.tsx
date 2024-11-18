import { RouterProvider } from "react-router-dom";
import router from "./router";
import { useSelector } from "react-redux";
import { RootState } from "./store/Store";
import { useEffect } from "react";
import { Toaster } from 'react-hot-toast';
function App() {
  const darkMode = useSelector((state: RootState) => state.DarkMode.value);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="App dark:bg-gray-900 dark:text-white h-[100vh]">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
