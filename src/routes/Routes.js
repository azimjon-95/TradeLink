import { lazy } from "react";

// Lazy-load pages
const Home = lazy(() => import("../pages/home/Home"));
const Register = lazy(() => import("../pages/register/Register"));
const Passport = lazy(() => import("../pages/passport/Passport"));
const Faq = lazy(() => import("../pages/FAQ/Faq"));
const UserProfile = lazy(() => import("../components/UserProfile/UserProfile"));
const PassportDashboard = lazy(() => import("../pages/passport/Dashboard"));
const TradersCabinet = lazy(() =>
  import("../pages/tradersCabinet/TradersCabinet")
);

// Define routes
const routes = [
  { path: "/signup", element: <Register />, protected: false },
  { path: "/passport", element: <Passport />, protected: false },
  {
    path: "/passport/dashboard",
    element: <PassportDashboard />,
    protected: false,
  },
  { path: "/traders-cabinet", element: <TradersCabinet />, protected: false },
  { path: "/user/*", element: <UserProfile />, protected: false },
  { path: "/faq", element: <Faq />, protected: false },
  { path: "/", element: <Home />, protected: false },
  { path: "*", element: <Home />, protected: false },
];

export default routes;
