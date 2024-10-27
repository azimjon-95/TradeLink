import { lazy } from "react";

// Lazy-load pages
const Home = lazy(() => import('../components/home/Home'));
const Login = lazy(() => import('../components/login/Login'));

// Define routes
const routes = [
    { path: "/login", element: <Login />, protected: false },
    { path: "/", element: <Home />, protected: true },
    { path: "*", element: <Home />, protected: false },
];

export default routes;
