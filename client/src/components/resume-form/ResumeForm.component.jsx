import React from "react";

import Input from "../input";
import Button from "../button";
import ExperienceExpandable from "../experience-expandable";
import FormationExpandable from "../formation-expandable";

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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("on form submit => ", resumeLocalInfos);
  };

  const handleTypeSelection = (type) => {
    switch (type) {
      case TYPES.EXPERIENCE:
        return resumeLocalInfos.experiences;
      case TYPES.FORMATION:
        return resumeLocalInfos.formations;
      default:
        break;
    }
  };

  const handleUpdateNestedInput = (e, types) => {
    let arrayToUpdate = handleTypeSelection(types);
    const { value, dataset, name } = e.target;

    const itemToUpdate =
      arrayToUpdate[
        arrayToUpdate.findIndex(
          (e) => parseInt(e.position, 10) === parseInt(dataset.attribute, 10)
        )
      ];

    itemToUpdate[name] = value;
    console.log(resumeLocalInfos.type);
    setResumeLocalInfos({
      ...resumeLocalInfos,
      type: arrayToUpdate,
    });
  };

  const handleNewEmptyExperience = () => {
    initialEmptyExperience.position = resumeLocalInfos.experiences.length;

    const addedEmptyExperience = [
      ...resumeLocalInfos.experiences,
      initialEmptyExperience,
    ];

    setResumeLocalInfos({
      ...resumeLocalInfos,
      experiences: addedEmptyExperience,
    });
  };

  const handleNewEmptyFormation = () => {
    initialEmptyFormation.position = resumeLocalInfos.formations.length;

    const addedEmptyFormation = [
      ...resumeLocalInfos.formations,
      initialEmptyFormation,
    ];

    setResumeLocalInfos({
      ...resumeLocalInfos,
      formations: addedEmptyFormation,
    });
  };

  return (
    <div className="resume-form">
      <form onSubmit={handleFormSubmit}>
        <p>Experiences :</p>
        {resumeLocalInfos.experiences.map((e, i) => (
          <ExperienceExpandable
            experience={e}
            key={i}
            updateInput={handleUpdateNestedInput}
            type={TYPES.EXPERIENCE}
          />
        ))}
        <p onClick={handleNewEmptyExperience}>Ajouter une experience</p>

        <p>Formations :</p>
        {resumeLocalInfos.formations.map((e, i) => (
          <FormationExpandable
            formation={e}
            key={i}
            updateInput={handleUpdateNestedInput}
            type={TYPES.FORMATION}
          />
        ))}
        <p onClick={handleNewEmptyFormation}>Ajouter une formation</p>
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
