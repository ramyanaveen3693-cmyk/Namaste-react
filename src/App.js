import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import AboutComponent from "./components/AboutComponent";
import ContactUsComponent from "./components/ContactusComponent";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantMenuComponent from "./components/RestaurantMenuComponent";
import RestMenyComponent from "./components/RestMenyComponent";

// import Grocery from "./components/Grocery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <BodyComponent /> },
      { path: "/about", element: <AboutComponent /> },
      { path: "/contactus", element: <ContactUsComponent /> },
      { path: "/restaurant/:resId", element: <RestMenyComponent/> },
      { path: "/grocery", element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>}
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
