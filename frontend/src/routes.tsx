import { useRoutes } from "react-router-dom";
import Landing from "./pages";
import Login from "./pages/login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NewsID from "./pages/Dashboard/[newsID]";
import AuthRoute from "./components/AuthRoute";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard/",
      element: <AuthRoute><Dashboard /></AuthRoute>
    },
    {
      path: "/dashboard/:newsID",
      element: <AuthRoute><NewsID /></AuthRoute>
    },
  ]);
}
