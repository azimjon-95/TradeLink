import { lazy } from "react";

// Lazy-load pages
const Home = lazy(() => import('../pages/home/Home'));
const Login = lazy(() => import('../pages/login/Login'));
const Register = lazy(() => import('../pages/register/Register'));

// Define routes
const routes = [
    { path: "/login", element: <Login />, protected: false },
    { path: "/signup", element: <Register />, protected: false },
    { path: "/", element: <Home />, protected: true },
    { path: "*", element: <Home />, protected: false },
];

export default routes;
