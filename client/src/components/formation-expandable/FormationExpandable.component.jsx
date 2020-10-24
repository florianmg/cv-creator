import React from "react";
import Input from "../input";
import Expandable from "../expandable";

import "./FormationExpandable.scss";

const FormationExpandable = ({ formation, updateInput, type, onRemove }) => {
  const {
    degreeName,
    schoolName,
    startDate,
    endDate,
    position,
    location,
  } = formation;

  const handleRemoveExpandable = () => {
    onRemove(position, type);
  };

  return (
    <Expandable
      title={schoolName ? schoolName : "Nom de l'école"}
      remove={() => handleRemoveExpandable()}
    >
      <Input
        type="text"
        id="schoolName"
        label="schoolName"
        name="schoolName"
        dataAttribute={position}
        value={schoolName}
        onChange={(e) => updateInput(e, type)}
      />
      <Input
        type="text"
        id="degreeName"
        label="degreeName"
        name="degreeName"
        dataAttribute={position}
        value={degreeName}
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

export default FormationExpandable;
