import React from "react";

import "./ResumePreview.scss";

const ResumePreview = ({ resumeLocalInfos, setResumeLocalInfos }) => {
  const { firstName, lastName } = resumeLocalInfos;
  return (
    <div className="resume-preview">
      <p>ResumePreview component</p>
      <p>Nom: {lastName}</p>
      <p>Prénom: {firstName}</p>
    </div>
  );
};

export default ResumePreview;
