import { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [bmiStatus, setBmiStatus] = useState("");

  const calculateBmi = () => {
    setErrorMsg("");

    const isValueHeight = /^\d+$/.test(height);
    const isValueWeight = /^\d+$/.test(weight);

    if (isValueHeight && isValueWeight) {
      const heightInMeters = height / 100;
      const bmiValue =
        weight / (heightInMeters * heightInMeters);

      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setBmiStatus("Underweight");
      } else if (bmiValue < 25) {
        setBmiStatus("Normal weight");
      } else if (bmiValue < 30) {
        setBmiStatus("Overweight");
      } else {
        setBmiStatus("Obese");
      }
    } else {
      setBmi(null);
      setBmiStatus("");
      setErrorMsg(
        "Please enter valid numerical values for height and weight."
      );
    }
  };

  const clearAll = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");
    setErrorMsg("");
  };

  return (
    <div className="night-page">

      {/* Moon */}
      <div className="moon"></div>

      {/* Stars */}
      <div className="stars stars-one"></div>
      <div className="stars stars-two"></div>
      <div className="stars stars-three"></div>

      {/* Moving asteroids */}
      <div className="asteroid asteroid-one"></div>
      <div className="asteroid asteroid-two"></div>
      <div className="asteroid asteroid-three"></div>

      {/* Calculator */}
      <div className="bmi-calculator">

        <div className="calculator-header">
          <span className="eyebrow">HEALTH • WELLNESS</span>
          <h1>BMI Calculator</h1>
          <p>Understand your body, one number at a time.</p>
        </div>

        {errorMsg && (
          <p className="error">{errorMsg}</p>
        )}

        <div className="input-container">
          <label htmlFor="height">
            Height
            <span>cm</span>
          </label>

          <input
            type="text"
            id="height"
            value={height}
            placeholder="170"
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div className="input-container">
          <label htmlFor="weight">
            Weight
            <span>kg</span>
          </label>

          <input
            type="text"
            id="weight"
            value={weight}
            placeholder="70"
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div className="buttons">
          <button
            className="calculate-button"
            onClick={calculateBmi}
          >
            Calculate BMI
          </button>

          <button
            className="clear-button"
            onClick={clearAll}
          >
            Clear
          </button>
        </div>

        {bmi !== null && (
          <div className="result">
            <span>Your BMI</span>

            <strong>{bmi}</strong>

            <p>{bmiStatus}</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;