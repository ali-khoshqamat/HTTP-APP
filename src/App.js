import Discussion from "./containers/Discussion";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center p-5 font-body box-border">
      <h2 className="text-2xl font-bold mb-2.5">HTTP APP</h2>
      <Discussion />
    </div>
  );
}

export default App;
