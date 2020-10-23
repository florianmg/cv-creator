import React, { useState } from "react";

import "./LevelSelector.scss";

const LevelSelector = ({ level, setLevel, type, dataAttribute }) => {
  const [previewLevel, setPreviewLevel] = useState(level);

  const handlePreviewLevel = (e) => {
    const { dataset } = e.target;
    const newPreview = previewLevel.map((e, i) => (i <= dataset.index ? 1 : 0));
    setPreviewLevel(newPreview);
  };
  const handleUpdateLevel = () => {
    const simulEvent = {
      name: "level",
      value: previewLevel,
      dataset: {
        attribute: dataAttribute,
      },
    };

    setLevel(simulEvent, type);
  };

  return (
    <div className="level-selector" onMouseLeave={() => setPreviewLevel(level)}>
      {previewLevel.map((e, i) => (
        <div
          data-index={i}
          key={i}
          onMouseEnter={handlePreviewLevel}
          onClick={handleUpdateLevel}
          className={`level-selector__item ${e ? "--selected" : ""}`}
        />
      ))}
    </div>
  );
};

export default LevelSelector;
