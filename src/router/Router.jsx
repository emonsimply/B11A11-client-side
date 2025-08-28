import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";


const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      }
    ]
  },
]);

export default Router;