import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Nuclear from "./pages/Nuclear";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/projects/nuclear",
    element: <Nuclear />,
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
