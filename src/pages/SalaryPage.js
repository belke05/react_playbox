import React, { useState } from "react";

import Input from "../components/Input";
import Prediction from "../components/Prediction";

export default function SalaryPage(props) {
  const [predictedSalary, setPredictedSalary] = useState(false);
  const [experience, setExperience] = useState(0);
  return (
    <div>
      <Input
        experience={experience}
        setExperience={setExperience}
        setPredictedSalary={setPredictedSalary}
      />
      {predictedSalary && <Prediction prediction={predictedSalary} />}
    </div>
  );
}
