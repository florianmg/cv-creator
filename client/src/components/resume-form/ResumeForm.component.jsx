import React from "react";

import Input from "../input";
import Button from "../button";

import "./ResumeForm.scss";

const ResumeForm = ({ resumeLocalInfos, setResumeLocalInfos }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(resumeLocalInfos);
  };
  return (
    <div className="resume-form">
      <form onSubmit={handleFormSubmit}>
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
        <Button text="Enregistrer les modifications" />
      </form>
    </div>
  );
};

export default ResumeForm;
