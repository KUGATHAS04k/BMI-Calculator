import { useState } from "react";
import "./App.css";

function App() {
  const [height,setHeight]= useState("")
  const [weight, setWeight] = useState("");
  const [bmi,setBmi] = useState(null)
  const [bmiStatus,setBmiStatus] = useState("")
  const [errorMsg,setErrorMsg] = useState("")

  const calculateBmi = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    setErrorMsg("");

    if (isValidHeight && isValidWeight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters)
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) { 
        setBmiStatus('You are Underweight')
    } else if (bmiValue >= 18.5 && bmiValue < 25) { 
      setBmiStatus('You are Normal weight')
    } else if (bmiValue >= 25 && bmiValue < 30) { 
        setBmiStatus('You are Overweight')
    } else { 
        setBmiStatus('You are Obese')
    } 
    
    
    }else{
      setBmi(null)
      setBmiStatus("")
      setErrorMsg("Please enter valid numeric value for Height and Weight.")
    }
  }
  return (
    <>
      <div className="bmi-calculator">
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>

          {errorMsg && <p className="error">{errorMsg}</p>}

          <div className="input-container">
            <label htmlFor="height">Enter Your Height (cm):</label>
            <input type="text" id="height" onChange={(e)=>setHeight(e.target.value)}/>
          </div>
          <div className="input-container">
            <label htmlFor="weight">Enter Your Weight (kg):</label>
            <input type="text" id="weight" onChange={(e)=>setWeight(e.target.value)}/>
          </div>

          <button onClick={calculateBmi}>Calculate BMI</button>
          
            {bmi!==null && (
              <div className="result">
              <p>Yout BMI is {bmi}</p>
              <p>Status: {bmiStatus}</p>
              </div>
            )}
            
          
        </div>
      </div>
    </>
  );
}

export default App;
