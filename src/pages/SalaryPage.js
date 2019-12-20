import React, { useState } from "react";

import InputSalary from "../components/InputSalary";
import PredictionSalary from "../components/PredictionSalary";

export default function SalaryPage(props) {
  const [predictedSalary, setPredictedSalary] = useState(false);
  const [experience, setExperience] = useState(0);
  return (
    <div className="salary_page">
      <InputSalary
        experience={experience}
        setExperience={setExperience}
        setPredictedSalary={setPredictedSalary}
      />
      {predictedSalary && <PredictionSalary prediction={predictedSalary} />}
    </div>
  );
}
