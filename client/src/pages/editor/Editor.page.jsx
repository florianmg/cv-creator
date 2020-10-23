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
        name: "Francais",
        level: [1, 1, 1, 1, 0],
        position: 0,
      },
      {
        name: "Anglais",
        level: [1, 1, 1, 0, 0],
        position: 1,
      },
    ],
    skills: [
      {
        name: "Word",
        level: [1, 1, 1, 0, 0],
        position: 1,
      },
      {
        name: "Excel",
        level: [1, 1, 0, 0, 0],
        position: 2,
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
