import React, { useState } from "react";

import ResumeForm from "../../components/resume-form";
import ResumePreview from "../../components/resume-preview";

import "./Editor.scss";

const Editor = () => {
  const initialResumeInfos = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    location: "",
    jobTitle: "",
    experiences: [
      {
        companyName: "happy neuron",
        jobTitle: "",
        location: "",
        startDate: "",
        endDate: "",
        position: 0,
      },
    ],
    formations: [
      {
        degreeName: "",
        schoolName: "",
        location: "",
        startDate: "",
        endDate: "",
        position: 0,
      },
    ],
    languages: [
      {
        name: "",
        level: 0,
        position: 0,
      },
    ],
    skills: [
      {
        name: "",
        level: 0,
        position: 0,
      },
    ],
    interest: [{ name: "", position: 0 }],
  };
  const [resumeLocalInfos, setResumeLocalInfos] = useState(initialResumeInfos);

  return (
    <div className="page editor-page">
      <div className="part left">
        <ResumeForm
          resumeLocalInfos={resumeLocalInfos}
          setResumeLocalInfos={setResumeLocalInfos}
        />
      </div>
      <div className="part right">
        <ResumePreview
          resumeLocalInfos={resumeLocalInfos}
          setResumeLocalInfos={setResumeLocalInfos}
        />
      </div>
    </div>
  );
};
export default Editor;
