import React from "react";

import ResumeForm from "../../components/resume-form";
import ResumePreview from "../../components/resume-preview";

const Editor = () => {
  return (
    <div className="page editor-page">
      <ResumeForm />
      <ResumePreview />
    </div>
  );
};
export default Editor;
