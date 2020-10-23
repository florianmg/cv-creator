import React from "react";

import Input from "../input";
import Expandable from "../expandable";
import LevelSelector from "../level-selector";

import { TYPES } from "../resume-form/ResumeForm.constants";

import "./LevelExpandable.scss";

const LevelExpandable = ({ language, updateInput, type }) => {
  const { name, level, position } = language;
  const defaultTitle = type === TYPES.SKILLS ? "Compétence" : "Langue";

  return (
    <Expandable title={name ? name : defaultTitle}>
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
