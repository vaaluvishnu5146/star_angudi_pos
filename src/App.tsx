import "./style.scss";
import POSLayout from "./Journeys/Application/POS";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
        }}
      >
        <Sidebar />
        <POSLayout />
      </div>
    </div>
  );
}

export default App;
