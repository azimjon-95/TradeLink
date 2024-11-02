import { lazy } from "react";

// Lazy-load pages
const Home = lazy(() => import("../pages/home/Home"));
const Register = lazy(() => import("../pages/register/Register"));
const Passport = lazy(() => import("../pages/passport/Passport"));
const Faq = lazy(() => import("../pages/FAQ/Faq"));
const UserProfile = lazy(() => import("../components/UserProfile/UserProfile"));

// Define routes
const routes = [
  { path: "/signup", element: <Register />, protected: false },
  { path: "/passport", element: <Passport />, protected: false },
  { path: "/user/*", element: <UserProfile />, protected: false },
  { path: "/faq", element: <Faq />, protected: false },
  { path: "/", element: <Home />, protected: false },
  { path: "*", element: <Home />, protected: false },
];

export default routes;
