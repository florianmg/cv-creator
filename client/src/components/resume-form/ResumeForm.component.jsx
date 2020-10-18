import React from "react";

import Input from "../input";
import Button from "../button";
import ExperienceExpandable from "../experience-expandable";
import FormationExpandable from "../formation-expandable";

import "./ResumeForm.scss";

const ResumeForm = ({ resumeLocalInfos, setResumeLocalInfos }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("on form submit => ", resumeLocalInfos);
  };

  const handleUpdateNestedInput = (e, type) => {
    console.log("passe la ");
    let arrayToUpdate;
    const { value, dataset, name } = e.target;
    if (type === "experiences") arrayToUpdate = resumeLocalInfos.experiences;
    if (type === "formations") arrayToUpdate = resumeLocalInfos.formations;

    const itemToUpdate =
      arrayToUpdate[
        arrayToUpdate.findIndex(
          (e) => parseInt(e.position, 10) === parseInt(dataset.attribute, 10)
        )
      ];

    itemToUpdate[name] = value;

    setResumeLocalInfos({
      ...resumeLocalInfos,
      type: arrayToUpdate,
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
          />
        ))}

        <p>Formations :</p>
        {resumeLocalInfos.formations.map((e, i) => (
          <FormationExpandable
            formation={e}
            key={i}
            updateInput={handleUpdateNestedInput}
          />
        ))}
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
