import { v4 as uuidv4 } from "uuid";
import "tailwindcss/tailwind.css";

import React, { useState, useEffect } from "react";
import PersonalInfo from "./assets/components/PersonalInfo";
import Menu from "./assets/components/Menu";
import CV from "./assets/components/CV";
import Education from "./assets/components/Education";
import Experience from "./assets/components/Experience";
import Skills from "./assets/components/Skills";
import Hobbies from "./assets/components/Hobbies";

const LOCAL_STORAGE_KEY = "cvApp.Reactv3";

function App() {
  const [saveData, setSaveData] = useState(false);
  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    LinkedIn: "",
    Street: "",
    City: "",
    Country: "",
    PhoneNumber: "",
    About: "",
    Experience: [], // {Company, Position, StartDate, EndDate, Description}
    Education: [], // {School, Degree, StartDate, EndDate}
    Skills: [], // {Skill, Rating}
    Hobbies: [],
  });

  const [currentScreen, setCurrentScreen] = useState("Contact");
  const [cvComponents, setCvComponents] = useState([
    {
      id: uuidv4(),
      name: "Contact",
      complete: false,
      editMode: true,
    },
    {
      id: uuidv4(),
      name: "Education",
      complete: false,
      editMode: false,
    },
    {
      id: uuidv4(),
      name: "Experience",
      complete: false,
      editMode: false,
    },
    {
      id: uuidv4(),
      name: "Skills",
      complete: false,
      editMode: false,
    },
    {
      id: uuidv4(),
      name: "Hobbies",
      complete: false,
      editMode: false,
    },
  ]);

  function handleAddNewSchoolToDataArray(e) {
    setData((prevData) => {
      return {
        ...prevData,
        Education: [
          ...prevData.Education,
          {
            id: uuidv4(),
            SchoolName: "",
            Degree: "",
            ActiveYears: "",
          },
        ],
      };
    });
  }

  function handleAddNewJobToDataArray(e) {
    setData((prevData) => {
      return {
        ...prevData,
        Experience: [
          ...prevData.Experience,
          {
            id: uuidv4(),
            Company: "",
            Position: "",
            StartDate: "",
            EndDate: "",
            Description: "",
          },
        ],
      };
    });
  }

  function handleAddNewSkillToDataArray(e) {
    setData((prevData) => {
      return {
        ...prevData,
        Skills: [
          ...prevData.Skills,
          {
            id: uuidv4(),
            SkillName: "",
            Rating: "",
          },
        ],
      };
    });
  }

  function handleAddNewHobbyToDataArray(e) {
    setData((prevData) => {
      return {
        ...prevData,
        Hobbies: [
          ...prevData.Hobbies,
          {
            id: uuidv4(),
            Hobby: "",
          },
        ],
      };
    });
  }

  function handleMenuClick(clickedValue) {
    setCurrentScreen(clickedValue);
    setCvComponents((prevCvComponents) => {
      return prevCvComponents.map((component) => {
        if (component.name === clickedValue) {
          return { ...component, editMode: true };
        }
        return { ...component, editMode: false };
      });
    });
  }

  function handleInputChange(e, inputName, section = null, index = null) {
    setData((prevData) => {
      if (section === null) {
        return { ...prevData, [inputName]: e.target.value };
      } else if (prevData[section]) {
        const updatedSection = prevData[section].map((item, itemIndex) => {
          if (itemIndex === index) {
            return { ...item, [inputName]: e.target.value };
          } else {
            return item;
          }
        });
        return { ...prevData, [section]: updatedSection };
      } else {
        return prevData;
      }
    });
  }

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedData) {
      if (storedData.data) setData(storedData.data);
      if (storedData.cvComponents) setCvComponents(storedData.cvComponents);
    }
  }, []);

  useEffect(() => {
    if (saveData) {
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify({ data, cvComponents })
      );
      setSaveData(false);
    }
  }, [saveData, data, cvComponents]);

  //Function for clearing the local storage after clicking a button
  function handleClearLocalStorage(e) {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  }

  function handleSave(e, clickedValue) {
    e.preventDefault();
    setSaveData(true);
    setCvComponents((prevCvComponents) => {
      return prevCvComponents.map((component) => {
        if (component.name === clickedValue) {
          return { ...component, complete: true };
        }
        return component;
      });
    });
  }

  function setFakeCompany() {
    setData((prevData) => {
      return {
        ...prevData,
        Education: [
          ...prevData.Experience,
          {
            id: uuidv4(),
            Company: "Google",
            Position: "Chief of Everything",
            StartDate: "March 2012",
            EndDate: "Present",
            Description:
              "Delivered the best results ever. Ever. Ever. I do not know what else to say.",
          },
        ],
      };
    });
  }

  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-2 bg-white">
        <Menu cvComponents={cvComponents} onMenuClick={handleMenuClick} />
      </div>
      <div className="col-span-5">
        {currentScreen === "Contact" && (
          <PersonalInfo
            data={data}
            onInputChange={handleInputChange}
            onSave={handleSave}
          />
        )}
        {currentScreen === "Education" && (
          <Education
            data={data}
            onInputChange={handleInputChange}
            onSave={handleSave}
            onAddNewSchool={handleAddNewSchoolToDataArray}
          />
        )}
        {currentScreen === "Experience" && (
          <Experience
            data={data}
            onInputChange={handleInputChange}
            onSave={handleSave}
            onAddNewJob={handleAddNewJobToDataArray}
          />
        )}
        {currentScreen === "Skills" && (
          <Skills
            data={data}
            onInputChange={handleInputChange}
            onSave={handleSave}
            onAddNewSkill={handleAddNewSkillToDataArray}
          />
        )}
        {currentScreen === "Hobbies" && (
          <Hobbies
            data={data}
            onInputChange={handleInputChange}
            onSave={handleSave}
            onAddNewHobby={handleAddNewHobbyToDataArray}
          />
        )}
      </div>
      <div className="col-span-5 bg-gray-400">
        <CV data={data} onClearLocalStorage={handleClearLocalStorage} />
      </div>
    </div>
  );
}
export default App;
