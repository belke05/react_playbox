import React from "react";

export default function Prediction({ prediction }) {
  function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }

  return (
    <div className="prediction_wrapper">
      <h2>prediction</h2>
      <p>{financial(prediction.prediction)}💲🤑 per year</p>
      <p>{financial(prediction.prediction / 12)}💲 per month</p>
      <p>{financial(prediction.prediction / 12 / 30)}💲 per day</p>
      <p>{financial(prediction.prediction / 12 / 30 / 24)}💲 per hour</p>
    </div>
  );
}
