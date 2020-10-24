import React, { useState, useEffect, useCallback } from "react";

import Input from "../input";
import Expandable from "../expandable";

import "./InterestExpandable.scss";

const InterestExpandable = ({ interests, updateInput }) => {
  const [initialDefaultList, setInitialDefaultList] = useState([]);
  const [defaultList, setDefaultList] = useState(initialDefaultList);
  const [selectedList, setSelectedList] = useState(interests);
  const [inputValue, setInputValue] = useState("");

  const handleAddItemToList = (itemName) => {
    if (selectedList.findIndex((item) => item.name === itemName) !== -1) return;

    const itemToAdd = {
      name: itemName,
      position: selectedList.length + 1,
    };

    setSelectedList([...selectedList, itemToAdd]);
    setInputValue("");
  };

  const handleRemoveItemFromList = (itemName) => {
    const newSelectedList = selectedList.filter(
      (item) => item.name !== itemName
    );
    setSelectedList(newSelectedList);
  };

  const refreshDefaultList = useCallback(() => {
    const refreshedDefaultList = initialDefaultList.filter((item) => {
      return (
        selectedList.findIndex(
          (e) => e.name.toLowerCase() === item.toLowerCase()
        ) === -1
      );
    });
    setDefaultList(refreshedDefaultList);
  }, [initialDefaultList, selectedList]);

  useEffect(() => {
    setInitialDefaultList([
      "Lecture",
      "Sport",
      "Voyages",
      "Broderie",
      "Jeux-Vidéos",
    ]);
  }, []);

  useEffect(() => {
    if (inputValue === "") {
      setDefaultList(initialDefaultList);
      return;
    }
    const filteredList = initialDefaultList.filter((item) =>
      item.toLowerCase().includes(inputValue.toLowerCase())
    );
    setDefaultList(filteredList);
  }, [inputValue, initialDefaultList]);

  useEffect(() => {
    updateInput(selectedList);
    refreshDefaultList();
  }, [selectedList, refreshDefaultList, updateInput]);

  return (
    <div className="interest-expandable">
      <Expandable title="Intérêts">
        <Input
          label="Ajouter un intérêt"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {inputValue.length !== 0 && (
          <div>
            <p>{inputValue}</p>
            <p onClick={() => handleAddItemToList(inputValue)}>-Ajouter-</p>
          </div>
        )}

        <ul>
          {defaultList.map((itemName, i) => (
            <li onClick={() => handleAddItemToList(itemName)} key={i}>
              {itemName}
            </li>
          ))}
        </ul>

        <p className="interest-expandable__selected-list">Mes intérest :</p>
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
