import React from "react";

export default function predictionAdmission({ isAdmission }) {
  if (isAdmission) {
    return <div className="admission_wrapper">You will be admitted 🎓🎓</div>;
  } else {
    return <div className="admission_wrapper">Probably no admission 😔😔</div>;
  }
}
