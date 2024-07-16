import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bmi-calculator">
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
          <div className="input-container">
            <label htmlFor="height">Enter Your Height (cm):</label>
            <input type="text" id="height" />
          </div>
          <div className="input-container">
            <label htmlFor="weight">Enter Your Weight (kg):</label>
            <input type="text" id="weight" />
          </div>

          <button>Calculate BMI</button>
          <div className="result">
            <p>Yout BMI is 23.8</p>
            <p>Status: good</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
