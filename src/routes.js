import ReviewsPage from "./components/ReviewsPage";
import Home from "./components/Home"

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/reviews/:id",
    element: <ReviewsPage />,
  },
];

export default routes;
