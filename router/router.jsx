import { createBrowserRouter } from "react-router-dom";
import Home from "../src/Pages/Home";
import Contact from "../src/Pages/Contact";
import About from "../src/Pages/About";
import Projects from "../src/Pages/Projects";
import Layout from "../src/Layout/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

export default router;
