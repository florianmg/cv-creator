import React from "react";

import Input from "../input";
import Expandable from "../expandable";
import LevelSelector from "../level-selector";

import { TYPES } from "../resume-form/ResumeForm.constants";

import "./LevelExpandable.scss";

const LevelExpandable = ({ language, updateInput, type, onRemove }) => {
  const { name, level, position } = language;
  const defaultTitle = type === TYPES.SKILLS ? "Compétence" : "Langue";

  const handleRemoveExpandable = () => {
    onRemove(position, type);
  };
  return (
    <Expandable
      title={name ? name : defaultTitle}
      remove={() => handleRemoveExpandable()}
    >
      <Input
        type="text"
        id="name"
        label="name"
        name="name"
        dataAttribute={position}
        value={name}
        onChange={(e) => updateInput(e, type)}
      />
      <LevelSelector
        id="level"
        name="level"
        dataAttribute={position}
        level={level}
        setLevel={updateInput}
        type={type}
      />
    </Expandable>
  );
};

export default LevelExpandable;
