import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout/Layout";
import routes from "./routes";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center p-5 font-body box-border">
      <h2 className="text-2xl font-bold mb-2.5">HTTP APP</h2>
      <ToastContainer />
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route {...route} key={route.path} />
          ))}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
