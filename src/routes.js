import ReviewsPage from "./components/ReviewsPage";
import Home from "./components/Home"
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/reviews/:id",
    element: <ReviewsPage />,
  }
];

export default routes;
