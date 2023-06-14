import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Block/Layout";
import LandingScreen from "../Pages/LandingScreen";
import Sales from "../Pages/RoutesPages/Sales";
import Reviews from "../Pages/RoutesPages/Reviews";
import About from "../Pages/RoutesPages/About";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingScreen />,
      },
      {
        index: true,
        path: "sales",
        element: <Sales />,
      },
      {
        index: true,
        path: "reviews",
        element: <Reviews />,
      },
      {
        index: true,
        path: "about",
        element: <About />,
      },
    ],
  },
]);
