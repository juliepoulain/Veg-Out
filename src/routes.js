import ReviewsPage from "./components/ReviewsPage";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import BreakfastPage from "./components/BreakfastPage";
import BrunchPage from "./components/BrunchPage";
import ReviewForm from "./components/ReviewForm";
import LunchPage from "./components/LunchPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/reviews/:id",
    element: <ReviewsPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/reviewForm/:id",
    element: <ReviewForm />,
    errorElement: <ErrorPage />
  },
  {
    path: "/BreakfastMenu",
    element: <BreakfastPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/BrunchMenu",
    element: <BrunchPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/LunchMenu",
    element: <LunchPage />,
    errorElement: <ErrorPage />
  },
];

export default routes;
