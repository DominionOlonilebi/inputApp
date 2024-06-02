import { useState } from "react";
import "./App.css";
import UpdateData from "./components/UpdateData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mt-5 wrapper">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <h1 className="mt-5 mb-5 text-center">Welcome to my World!</h1>
            <UpdateData />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
