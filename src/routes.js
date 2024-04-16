import ReviewsPage from "./components/ReviewsPage";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import NavBar from "./components/NavBar";
import BreakfastPage from "./components/BreakfastPage";
import Brunch from "./components/Brunch";
import ReviewForm from "./components/ReviewForm";
import Lunch from "./components/Lunch";

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
    path: "/reviewForm:/id",
    element: <ReviewForm />,
  },
  {
    path: "/BreakfastPage",
    element: <BreakfastPage />,
  },
  {
    path: "/Brunch",
    element: <Brunch />,
  },
  {
    path: "/Lunch",
    element: <Lunch />,
  },

  {
    path: "/NavBar",
    element: <NavBar />,
  },
];

export default routes;
