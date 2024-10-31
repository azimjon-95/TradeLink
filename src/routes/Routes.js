import { lazy } from "react";

// Lazy-load pages
const Home = lazy(() => import("../pages/home/Home"));
const Login = lazy(() => import("../pages/login/Login"));
const Register = lazy(() => import("../pages/register/Register"));
const Passport = lazy(() => import("../pages/passport/Passport"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashbord"));
const SuccessFee = lazy(() =>
  import("../components/dashboard/feeHistory/FeeHistory")
);

// Define routes
const routes = [
  { path: "/login", element: <Login />, protected: false },
  { path: "/signup", element: <Register />, protected: false },
  { path: "/passport", element: <Passport />, protected: false },
  { path: "/", element: <Home />, protected: true },
  { path: "*", element: <Home />, protected: false },
  { path: "/dashboard", element: <Dashboard />, protected: false },
  { path: "/dashboard/success-fee", element: <SuccessFee />, protected: false },
];

export default routes;
