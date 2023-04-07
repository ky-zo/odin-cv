import {
  PhotoIcon,
  UserCircleIcon,
  ChevronDownIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";

import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "tailwindcss/tailwind.css";

const LOCAL_STORAGE_KEY = "cvApp.Reactv2";

function PersonalInfo({ data, onInputChange, onSave }) {
  return (
    <form className="block min-h-full max-w-1xl p-10 border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
      <div className="space-y-12">
        <div className=" grid grid-cols-10">
          <div className=" sm:col-span-7">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Contact information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              What’s the best way for employers to contact you?
            </p>
          </div>
          <div className="mt-6 sm:col-span-3 flex items-center justify-end gap-x-6">
            <button
              onClick={(e) => onSave(e, "Contact")}
              className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Complete
            </button>
          </div>
        </div>
        <div className=" border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  value={data.FirstName || ""}
                  onChange={(e) => onInputChange(e, "FirstName")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  value={data.LastName || ""}
                  onChange={(e) => onInputChange(e, "LastName")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={data.Email || ""}
                  onChange={(e) => onInputChange(e, "Email")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                LinkedIn Profile
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                    ln.com/
                  </span>
                  <input
                    type="text"
                    name="LinkedIn"
                    id="LinkedIn"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="your-profile"
                    value={data.LinkedIn || ""}
                    onChange={(e) => onInputChange(e, "LinkedIn")}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-4">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="Street"
                  id="Street"
                  autoComplete="street-address"
                  value={data.Street || ""}
                  onChange={(e) => onInputChange(e, "Street")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  value={data.City || ""}
                  onChange={(e) => onInputChange(e, "City")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  value={data.Country || ""}
                  onChange={(e) => onInputChange(e, "Country")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option></option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                  <option>Poland</option>
                  <option>The Netherlands</option>
                  <option>France</option>
                  <option>Taiwan</option>
                  <option>Indonesia</option>
                  <option>Thailand</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                </div>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  value={data.PhoneNumber || ""}
                  onChange={(e) => onInputChange(e, "PhoneNumber")}
                  className="block w-full rounded-md border-0 px-3.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  value={data.About || ""}
                  onChange={(e) => onInputChange(e, "About")}
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a few sentences about your desired position..
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

function Menu({ cvComponents, onMenuClick }) {
  const returnedMenu = [];
  cvComponents.forEach((menuItem) => {
    let status = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    );

    if (menuItem.complete) {
      status = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    } else {
      if (menuItem.editMode) {
        status = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        );
      }
    }

    let editing = "";

    returnedMenu.push(
      <button
        onClick={() => onMenuClick(menuItem.name)}
        key={menuItem.id}
        className="flex p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 justify-between"
      >
        <div>{menuItem.name}</div>
        <div>{status}</div>
      </button>
    );
  });

  return <ul className="flex flex-col gap-4 p-4 pt-10 ">{returnedMenu}</ul>;
}

function CV({ data }) {
  return (
    <div>
      <div>First name: {data.FirstName}</div>
      <div>Last Name: {data.LastName}</div>
      <div>Email: {data.Email}</div>
      <div>LinkedIn: {data.LinkedIn}</div>
      <div>Street: {data.Street}</div>
      <div>City: {data.City}</div>
      <div>Country: {data.Country}</div>
      <div>Phone Number: {data.PhoneNumber}</div>
      <div>About: {data.About}</div>
    </div>
  );
}

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
  });
  const [currentScreen, setCurrentScreen] = useState("Contact");
  const [cvComponents, setCvComponents] = useState([
    {
      id: uuidv4(),
      name: "Contact",
      complete: false,
      editMode: true,
      screen: (
        <PersonalInfo
          data={data}
          onInputChange={handleInputChange}
          onSave={handleSave}
        />
      ),
    },
    {
      id: uuidv4(),
      name: "Experience",
      complete: false,
      editMode: false,
      screen: "To-Do",
    },
    {
      id: uuidv4(),
      name: "Education",
      complete: false,
      editMode: false,
      screen: "To-Do",
    },
    {
      id: uuidv4(),
      name: "Skills",
      complete: false,
      editMode: false,
      screen: "To-Do",
    },
    {
      id: uuidv4(),
      name: "Hobbies",
      complete: false,
      editMode: false,
      screen: "To-Do",
    },
  ]);

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

  function handleInputChange(e, inputName) {
    console.log("test");
    setData((prevData) => {
      return { ...prevData, [inputName]: e.target.value };
    });
  }

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedData) setData(storedData);
  }, []);

  useEffect(() => {
    if (saveData) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
      setSaveData(false);
    }
  }, [saveData]);

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
        {currentScreen === "Experience" && <div>Experience Component</div>}
        {currentScreen === "Education" && <div>Education Component</div>}
        {currentScreen === "Skills" && <div>Skills Component</div>}
        {currentScreen === "Hobbies" && <div>Hobbies Component</div>}
      </div>
      <div className="col-span-5 bg-gray-400">
        <CV data={data} />
      </div>
    </div>
  );
}
export default App;
