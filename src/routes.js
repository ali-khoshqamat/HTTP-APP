import FullComment from "./pages/FullComment";
import AddComment from "./pages/AddComment";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "/comment/:id", element: <FullComment /> },
  { path: "/new-comment", element: <AddComment /> },
  { path: "/", element: <HomePage /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
