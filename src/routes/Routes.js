import { lazy } from "react";
import NotFoundPage from "../components/PageNotFound";
import About from "../pages/about/About";
import Contact from "../pages/Contact/Contact";
import Reviews from "../pages/reviews/Reviews";

// Lazy-load pages
const Home = lazy(() => import("../pages/home/Home"));
const Passport = lazy(() => import("../pages/passport/Passport"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashbord"));
const SuccessFeeHistory = lazy(() =>
  import("../pages/successFeeHistory/SuccessFeeHistiry")
);
const Referral = lazy(() =>
  import("../pages/referral/Referral")
);
const NewDeclaration = lazy(() =>
  import("../pages/newDeclaration/NewDeclaration")
);
const Faq = lazy(() => import("../pages/FAQ/Faq"));
const UserProfile = lazy(() => import("../components/UserProfile/UserProfile"));
const UtopiaOldMultiLine = lazy(() =>
  import("../components/passport/utopiaOld/UtopiaOld")
);
const Rating = lazy(() => import("../components/passport/rating/Rating"));
const PassportDashboard = lazy(() => import("../pages/passport/Dashboard"));
const TradersCabinet = lazy(() =>
  import("../pages/tradersCabinet/TradersCabinet")
);

// Define routes
const routes = [
  // ====Home=====
  { path: "/trader-cabinet", element: <TradersCabinet />, protected: false },
  { path: "/traders-cabinet", element: <TradersCabinet />, protected: false },
  { path: "/user/:id/*", element: <UserProfile />, protected: true },
  { path: "/portfolio/:id", element: <UtopiaOldMultiLine />, protected: false },
  { path: "/faq", element: <Faq />, protected: false },
  { path: "/about", element: <About />, protected: false },
  { path: "/contact", element: <Contact />, protected: false },
  { path: "/reviews", element: <Reviews />, protected: false },
  { path: "/", element: <Home />, protected: false },
  // ====Passport=====
  { path: "/passport", element: <Passport />, protected: false },
  { path: "/passport/dashboard", element: <PassportDashboard />, protected: false, },
  { path: "/rating", element: <Rating />, protected: false },
  { path: "/trader-cabinet/dashboard", element: <Dashboard />, protected: false },
  { path: "/dashboard&ctx=product", element: <NewDeclaration />, protected: false, },
  { path: "/dashboard/success-fee", element: <SuccessFeeHistory />, protected: false, },
  { path: "/referral", element: <Referral />, protected: false, },

  { path: "*", element: <NotFoundPage />, protected: false },
];

export default routes;

