import FullComment from "./components/FullComment";
import HomePage from "./pages/HomePage";
import NewCommentPage from "./pages/NewCommentPage";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "/comment/:id", element: <FullComment /> },
  { path: "/new-comment", element: <NewCommentPage /> },
  { path: "/", element: <HomePage /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
