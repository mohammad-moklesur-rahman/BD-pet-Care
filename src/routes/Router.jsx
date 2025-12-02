import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Services from "../pages/Services";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import { Suspense } from "react";
import Loading from "../components/Loading";
import ServiceDetails from "../pages/ServiceDetails";
import DetailsLayout from "../layout/DetailsLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Singup from "../pages/Singup";
import Auth from "../pages/Auth";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "../pages/ForgetPassword";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Privacy from "../pages/Privacy";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "blog",
        Component: Blog,
      },
      {
        path: "privacy",
        Component: Privacy,
      },
      {
        path: "/services",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loading />}>
                <Services />
              </Suspense>
            ),
          },
          {
            path: "details/:id",
            element: <DetailsLayout />,
            children: [
              {
                index: true,
                loader: () => fetch("/data.json"),
                hydrateFallbackElement: <Loading />,
                Component: ServiceDetails,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: Auth,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "singup",
        Component: Singup,
      },
      {
        path: "forget-password",
        Component: ForgetPassword,
      },
    ],
  },
  {
    path: "profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
]);

export default router;
