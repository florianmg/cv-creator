import React, { useState } from "react";

import "./Expandable.scss";

const Expandable = ({ title, children, remove }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="expandable">
      {remove && <span onClick={remove}>X&nbsp;&nbsp;</span>}
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
