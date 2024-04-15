import ReviewsPage from "./components/ReviewsPage";

const routes = [
  {
    path: "/reviews",
    element: <ReviewsPage />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
