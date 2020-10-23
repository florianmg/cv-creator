import React, { useState, useEffect } from "react";
import Expandable from "../expandable";

import "./InterestExpandable.scss";

const InterestExpandable = ({ interests, updateInput, type }) => {
  const [defaultList, setDefaultList] = useState([
    "Lecture",
    "Sport",
    "Voyages",
    "Broderie",
    "Jeux-Vidéos",
  ]);
  const [selectedList, setSelectedList] = useState(interests);

  const handleAddItemToList = (itemName) => {
    if (selectedList.findIndex((item) => item.name === itemName) !== -1) return;

    const itemToAdd = {
      name: itemName,
      position: selectedList.length + 1,
    };

    setSelectedList([...selectedList, itemToAdd]);
  };

  const handleRemoveItemFromList = (itemName) => {
    const newSelectedList = selectedList.filter(
      (item) => item.name !== itemName
    );
    setSelectedList(newSelectedList);
  };

  useEffect(() => {
    updateInput(selectedList);
  }, [selectedList]);

  return (
    <div className="interest-expandable">
      <Expandable title="Intérêts">
        <ul>
          {defaultList.map((itemName, i) => (
            <li onClick={() => handleAddItemToList(itemName)} key={i}>
              {itemName}
            </li>
          ))}
        </ul>

        <p>Mes intérest :</p>
        <ul>
          {selectedList &&
            selectedList.map((item, i) => (
              <li onClick={() => handleRemoveItemFromList(item.name)} key={i}>
                {item.name}
              </li>
            ))}
        </ul>
      </Expandable>
    </div>
  );
};

export default InterestExpandable;
