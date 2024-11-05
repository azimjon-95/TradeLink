import { lazy } from "react";

// Lazy-load pages
const Home = lazy(() => import("../pages/home/Home"));
const Register = lazy(() => import("../pages/register/Register"));
const Passport = lazy(() => import("../pages/passport/Passport"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashbord"));
const SuccessFeeHistory = lazy(() =>
  import("../pages/successFeeHistory/SuccessFeeHistiry")
);
const NewDeclaration = lazy(() =>
  import("../pages/newDeclaration/NewDeclaration")
);

// Define routes
const routes = [
  { path: "/signup", element: <Register />, protected: false },
  { path: "/passport", element: <Passport />, protected: false },
  { path: "/", element: <Home />, protected: true },
  { path: "*", element: <Home />, protected: false },
  { path: "/dashboard", element: <Dashboard />, protected: false },
  {
    path: "/dashboard/success-fee",
    element: <SuccessFeeHistory />,
    protected: false,
  },
  {
    path: "/dashboard&ctx=product",
    element: <NewDeclaration />,
    protected: false,
  },
];

export default routes;
