
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Main from "../pages/Main";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MassWidthCalculator from "../pages/Mass";

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Main /> },
      { path: "register", element: <Register/> },
      { path: "login", element: <Login /> },
      { path: "mass", element: <MassWidthCalculator />},
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
