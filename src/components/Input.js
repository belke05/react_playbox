import React from "react";
import axios from "axios";

export default function Input({
  setExperience,
  experience,
  setPredictedSalary
}) {
  const handleInputChange = e => {
    const value = e.target.value;
    setExperience(value);
  };

  const handleClick = e => {
    axios
      .get(
        `https://flaskapitemplate.herokuapp.com/predict_salary?experience=${experience}`
      )
      .then(res => {
        console.log(res.data);
        setPredictedSalary(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="input_container">
      {/* <p>{window.token}</p> */}
      <h1>How much will i make?</h1>
      <input type="text" onChange={handleInputChange} value={experience} />
      <button onClick={handleClick}>Predict my salary</button>
    </div>
  );
}
