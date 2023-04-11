import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn";
import NotFound from "./pages/404";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children : [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "/sign-in",
                element: <SignIn/>,
            },
            {
                path: "/user",
                element: <Profile/>,
            },
            {
                path: "*",
                element: <NotFound/>,
            },
        ]
    }
]);

export default router;