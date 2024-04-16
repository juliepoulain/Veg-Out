import ReviewsPage from "./components/ReviewsPage";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import NavBar from "./components/NavBar";
import BreakfastPage from "./components/BreakfastPage";
import BrunchPage from "./components/BrunchPage";
import ReviewForm from "./components/ReviewForm";
import LunchPage from "./components/LunchPage";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/reviews/:id",
    element: <ReviewsPage />,
  },
  {
    path: "/reviewForm/:id",
    element: <ReviewForm />,
  },
  {
    path: "/BreakfastMenu",
    element: <BreakfastPage />,
  },
  {
    path: "/BrunchMenu",
    element: <BrunchPage />,
  },
  {
    path: "/LunchMenu",
    element: <LunchPage />,
  },

  {
    path: "/NavBar",
    element: <NavBar />,
  },
];

export default routes;
