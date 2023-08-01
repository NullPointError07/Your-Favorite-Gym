import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./style.css";
import Home from "./Components/Home/Home.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
import AppliedPackages from "./Components/Applied Packages/AppliedPackages.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import FrontPage from "./Components/FrontPage/FrontPage";
import PackageDetails, {
  packageDetailsLoader,
} from "./Components/Available Package/PackageDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <FrontPage></FrontPage>,
        loader: () => fetch("/data.json"),
      },
      {
        path: ":id",
        element: <PackageDetails></PackageDetails>,
        loader: packageDetailsLoader,
      },
      {
        path: "Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "AppliedPackages",
        element: <AppliedPackages></AppliedPackages>,
      },
      {
        path: "/Blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
