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
