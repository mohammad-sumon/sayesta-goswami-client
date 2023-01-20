import { createBrowserRouter } from "react-router-dom";
import About from "../components/Header/About/About";
import Contact from "../components/Header/Contact/Contact";
import Home from "../components/Header/Home/Home";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
