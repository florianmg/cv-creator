import React from "react";

import Input from "../input";
import Button from "../button";
import ExperienceExpandable from "../experience-expandable";
import FormationExpandable from "../formation-expandable";
import LevelExpandable from "../level-expandable";
import InterestExpandable from "../interest-expandable";

import { TYPES } from "./ResumeForm.constants";

import "./ResumeForm.scss";

const ResumeForm = ({ resumeLocalInfos, setResumeLocalInfos }) => {
  let initialEmptyExperience = {
    companyName: "",
    jobTitle: "",
    location: "",
    startDate: "",
    endDate: "",
    position: 0,
  };
  let initialEmptyFormation = {
    degreeName: "",
    schoolName: "",
    location: "",
    startDate: "",
    endDate: "",
    position: 0,
  };
  let initialEmptyLanguageAndSkill = {
    name: "",
    level: [1, 0, 0, 0, 0],
    position: 0,
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("on form submit => ", resumeLocalInfos);
  };

  const handleTypeSelection = (type) => {
    switch (type) {
      case TYPES.EXPERIENCE:
        return {
          content: resumeLocalInfos.experiences,
          name: "experiences",
          initialEmpty: initialEmptyExperience,
        };
      case TYPES.FORMATION:
        return {
          content: resumeLocalInfos.formations,
          name: "formations",
          initialEmpty: initialEmptyFormation,
        };
      case TYPES.LANGUAGE:
        return {
          content: resumeLocalInfos.languages,
          name: "languages",
          initialEmpty: initialEmptyLanguageAndSkill,
        };
      case TYPES.SKILLS:
        return {
          content: resumeLocalInfos.skills,
          name: "skills",
          initialEmpty: initialEmptyLanguageAndSkill,
        };
      case TYPES.INTERESTS:
        return {
          content: resumeLocalInfos.interests,
          name: "interests",
          initialEmpty: null,
        };
      default:
        break;
    }
  };

  const handleUpdateInterests = (newInterests) => {
    setResumeLocalInfos({ ...resumeLocalInfos, interests: newInterests });
  };

  const handleUpdateNestedInput = (e, types) => {
    let { content } = handleTypeSelection(types);

    const { value, dataset, name } = e.target ? e.target : e;

    const itemToUpdate =
      content[
        content.findIndex(
          (e) => parseInt(e.position, 10) === parseInt(dataset.attribute, 10)
        )
      ];

    itemToUpdate[name] = value;

    setResumeLocalInfos({
      ...resumeLocalInfos,
      type: content,
    });
  };

  const refreshPositionsValues = (arrayOfItems) => {
    let positionValue = 1;

    arrayOfItems.forEach((item) => {
      item.position = positionValue;
      positionValue++;
    });

    return arrayOfItems;
  };

  const handleNewEmpty = (type) => {
    const { name, initialEmpty } = handleTypeSelection(type);

    initialEmpty.position = resumeLocalInfos[name].length + 1;
    const withNewEmpty = [...resumeLocalInfos[name], initialEmpty];

    setResumeLocalInfos({ ...resumeLocalInfos, [name]: withNewEmpty });
  };

  const handleRemoveExpandable = (itemPosition, type) => {
    const { content, name } = handleTypeSelection(type);

    let newArray = content.filter((item) => item.position !== itemPosition);

    setResumeLocalInfos({
      ...resumeLocalInfos,
      [name]: refreshPositionsValues(newArray),
    });
  };

  return (
    <div className="resume-form">
      <form onSubmit={handleFormSubmit}>
        <InterestExpandable
          interests={resumeLocalInfos.interests}
          updateInput={() => handleUpdateInterests}
          type={TYPES.INTERESTS}
        />
        <hr />
        <p>Skills: </p>
        {resumeLocalInfos.skills.map((e, i) => (
          <LevelExpandable
            language={e}
            key={i}
            updateInput={handleUpdateNestedInput}
            type={TYPES.SKILLS}
            onRemove={handleRemoveExpandable}
          />
        ))}
        <p onClick={() => handleNewEmpty(TYPES.SKILLS)}>Ajouter un skill</p>
        <hr />
        <p>Langues :</p>
        {resumeLocalInfos.languages.map((e, i) => (
          <LevelExpandable
            language={e}
            key={i}
            updateInput={handleUpdateNestedInput}
            type={TYPES.LANGUAGE}
            onRemove={handleRemoveExpandable}
          />
        ))}
        <p onClick={() => handleNewEmpty(TYPES.LANGUAGE)}>Ajouter une Langue</p>
        <hr />
        <p>Experiences :</p>
        {resumeLocalInfos.experiences.map((e, i) => (
          <ExperienceExpandable
            experience={e}
            key={i}
            updateInput={handleUpdateNestedInput}
            type={TYPES.EXPERIENCE}
            onRemove={handleRemoveExpandable}
          />
        ))}
        <p onClick={() => handleNewEmpty(TYPES.EXPERIENCE)}>
          Ajouter une experience
        </p>
        <hr />
        <p>Formations :</p>
        {resumeLocalInfos.formations.map((e, i) => (
          <FormationExpandable
            formation={e}
            key={i}
            updateInput={handleUpdateNestedInput}
            type={TYPES.FORMATION}
            onRemove={handleRemoveExpandable}
          />
        ))}
        <p onClick={() => handleNewEmpty(TYPES.FORMATION)}>
          Ajouter une formation
        </p>
        <hr />
        <Input
          type="text"
          label="Nom"
          id="lastName"
          value={resumeLocalInfos.lastName}
          required={true}
          onChange={(e) =>
            setResumeLocalInfos({
              ...resumeLocalInfos,
              lastName: e.target.value,
            })
          }
        />
        <Input
          type="text"
          label="Prénom"
          id="firstName"
          value={resumeLocalInfos.firstName}
          required={true}
          onChange={(e) =>
            setResumeLocalInfos({
              ...resumeLocalInfos,
              firstName: e.target.value,
            })
          }
        />
        <Input
          type="text"
          label="email"
          id="email"
          value={resumeLocalInfos.email}
          required={true}
          onChange={(e) =>
            setResumeLocalInfos({
              ...resumeLocalInfos,
              email: e.target.value,
            })
          }
        />

        <Input
          type="number"
          label="Numéro de téléphone"
          id="phone"
          value={resumeLocalInfos.phone}
          required={true}
          onChange={(e) =>
            setResumeLocalInfos({
              ...resumeLocalInfos,
              phone: e.target.value,
            })
          }
        />
        <Input
          type="text"
          label="Ville"
          id="location"
          value={resumeLocalInfos.location}
          required={true}
          onChange={(e) =>
            setResumeLocalInfos({
              ...resumeLocalInfos,
              location: e.target.value,
            })
          }
        />
        <Input
          type="text"
          label="Nom du poste"
          id="jobTitle"
          value={resumeLocalInfos.jobTitle}
          required={true}
          onChange={(e) =>
            setResumeLocalInfos({
              ...resumeLocalInfos,
              jobTitle: e.target.value,
            })
          }
        />

        <Button text="Enregistrer les modifications" />
      </form>
    </div>
  );
};

export default ResumeForm;
