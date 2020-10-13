import React from "react";
import Input from "../input";

import "./ResumeForm.scss";

const ResumeForm = ({ resumeLocalInfos, setResumeLocalInfos }) => {
  return (
    <div className="resume-form">
      <p>ResumeForm component</p>
      <Input
        type="text"
        label="Nom"
        id="lastName"
        value={resumeLocalInfos.lastName}
        required={true}
        onChange={(e) =>
          setResumeLocalInfos({
            ...resumeLocalInfos,
            lastName: e.target.value,
          })
        }
      />
      <Input
        type="text"
        label="Prénom"
        id="firstName"
        value={resumeLocalInfos.firstName}
        required={true}
        onChange={(e) =>
          setResumeLocalInfos({
            ...resumeLocalInfos,
            firstName: e.target.value,
          })
        }
      />
    </div>
  );
};

export default ResumeForm;
