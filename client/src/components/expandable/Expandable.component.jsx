import React, { useState } from "react";

import "./Expandable.scss";

const Expandable = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="expandable">
      <span className="expandable__title" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </span>
      <div className={`expandable__content${isOpen ? "--open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Expandable; 