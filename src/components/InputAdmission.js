import React from "react";
import axios from "axios";

export default function Input({
  setAdmissionData,
  admissionData,
  setPredictedAdmission
}) {
  const handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    setAdmissionData({ ...admissionData, [name]: value });
  };

  const handleClick = e => {
    e.preventDefault();
    axios
      .post(
        `https://flaskapitemplate.herokuapp.com/predict_admission`,
        admissionData
      )
      .then(res => {
        console.log(res.data);
        setPredictedAdmission(res.data.prediction);
      })
      .catch(err => console.log(err));
  };

  const admissiondatakeys = Object.keys(admissionData);

  return (
    <div className="input_container">
      {/* <p>{window.token}</p> */}
      <h1>Do I have an admission chance?</h1>
      <form onSubmit={handleClick} className="form">
        {admissiondatakeys.slice(0, -1).map((key, i) => {
          return (
            <div className="input_wrapper">
              <b>{key}</b>
              <input
                value={admissionData[key]}
                type="number"
                onChange={handleInputChange}
                placeholder="your value"
                name={key}
              />
            </div>
          );
        })}
        <div className="input_wrapper">
          <b>{admissiondatakeys.slice(-1)[0]}</b>
          <input
            value={admissionData[admissiondatakeys.slice(-1)[0]]}
            type="checkbox"
            onChange={() => {
              setAdmissionData({
                ...admissionData,
                Research: !admissionData.Research
              });
            }}
            name={admissiondatakeys.slice(-1)[0]}
          />
        </div>
        <button className="button-predict">
          <b>Predict Admission Chances</b>
        </button>
      </form>
    </div>
  );
}
