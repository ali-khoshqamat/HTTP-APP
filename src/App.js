import Discussion from "./containers/Discussion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center p-5 font-body box-border">
      <h2 className="text-2xl font-bold mb-2.5">HTTP APP</h2>
      <ToastContainer />
      <Discussion />
    </div>
  );
}

export default App;
