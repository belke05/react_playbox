import React, { useState } from "react";
import InputAdmission from "../components/InputAdmission";
import PredictionAdmission from "../components/PredictionAdmission";

export default function AdmissionPage() {
  const [predictedAdmission, setPredictedAdmission] = useState(false);
  const [admissionData, setAdmissionData] = useState({
    GRE_Score: 337,
    TOEFL_Score: 118,
    University_Rating: 4,
    SOP: 4.5,
    LOR: 4.5,
    CGPA: 9.65,
    Research: 0
  });

  return (
    <div>
      <InputAdmission
        setPredictedAdmission={setPredictedAdmission}
        admissionData={admissionData}
        setAdmissionData={setAdmissionData}
      />
      {predictedAdmission && (
        <PredictionAdmission isAdmission={Number(predictedAdmission)} />
      )}
    </div>
  );
}
