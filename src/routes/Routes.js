import { lazy } from "react";

// Lazy-load pages
const Home = lazy(() => import("../pages/home/Home"));
const Register = lazy(() => import("../pages/register/Register"));
const Passport = lazy(() => import("../pages/passport/Passport"));
const Faq = lazy(() => import("../pages/FAQ/Faq"));
const UserProfile = lazy(() => import("../components/UserProfile/UserProfile"));
const UtopiaOldMultiLine = lazy(() => import("../components/passport/utopiaOld/UtopiaOld"));
const Rating = lazy(() => import("../components/passport/rating/Rating"));

// Define routes
const routes = [
  { path: "/signup", element: <Register />, protected: false },
  { path: "/passport", element: <Passport />, protected: false },
  { path: "/user/*", element: <UserProfile />, protected: false },
  { path: "/portfolio/:id", element: <UtopiaOldMultiLine />, protected: false },
  { path: "/rating", element: <Rating />, protected: false },
  { path: "/faq", element: <Faq />, protected: false },
  { path: "/", element: <Home />, protected: false },
  { path: "*", element: <Home />, protected: false },
];

export default routes;
