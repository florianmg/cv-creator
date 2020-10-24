import React from "react";
import Input from "../input";
import Expandable from "../expandable";

import "./ExperienceExpandable.scss";

const ExperienceExpandable = ({ experience, updateInput, type, onRemove }) => {
  const {
    companyName,
    jobTitle,
    location,
    startDate,
    endDate,
    position,
  } = experience;

  const handleRemoveExpandable = () => {
    onRemove(position, type);
  };

  return (
    <Expandable
      title={companyName ? companyName : "(Nom de l'entreprise)"}
      remove={() => handleRemoveExpandable()}
    >
      <Input
        type="text"
        id="companyName"
        label="companyName"
        name="companyName"
        dataAttribute={position}
        value={companyName}
        onChange={(e) => updateInput(e, type)}
      />
      <Input
        type="text"
        id="jobTitle"
        label="jobTitle"
        name="jobTitle"
        dataAttribute={position}
        value={jobTitle}
        onChange={(e) => updateInput(e, type)}
      />
      <Input
        type="text"
        id="location"
        label="location"
        name="location"
        dataAttribute={position}
        value={location}
        onChange={(e) => updateInput(e, type)}
      />
      <Input
        type="date"
        id="startDate"
        label="startDate"
        name="startDate"
        dataAttribute={startDate}
        value={startDate}
        onChange={(e) => updateInput(e, type)}
      />
      <Input
        type="date"
        id="endDate"
        label="endDate"
        name="endDate"
        dataAttribute={endDate}
        value={endDate}
        onChange={(e) => updateInput(e, type)}
      />
    </Expandable>
  );
};

export default ExperienceExpandable;
