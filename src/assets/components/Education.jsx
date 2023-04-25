import React from "react";

function School({ key, data, onInputChange, index, onDelete }) {
  return (
    <div className=" bor der-gray-900/10">
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
        <div className="sm:col-span-2">
          <label
            htmlFor="active-years"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Active Years
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="active-years"
              id="active-years"
              value={data.Education[index].ActiveYears || ""}
              onChange={(e) =>
                onInputChange(e, "ActiveYears", "Education", index)
              }
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="degree"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Degree
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="degree"
              id="degree"
              value={data.Education[index].Degree || ""}
              onChange={(e) => onInputChange(e, "Degree", "Education", index)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            School Name
          </label>
          <div className="mt-2">
            <input
              id="school-name"
              name="school-name"
              type="text"
              value={data.Education[index].SchoolName || ""}
              onChange={(e) =>
                onInputChange(e, "SchoolName", "Education", index)
              }
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <button
            onClick={(e) => onDelete(e, "Education", index)}
            className="rounded-md bg-white px-6 py-2 text-sm font-semibold text-indigo-600 shadow-md hover:bg-indigo-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

function NewSchoolButton({ onAddNewSchool }) {
  return (
    <div>
      <button
        type="button"
        onClick={(e) => onAddNewSchool()}
        className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add New
      </button>
    </div>
  );
}

export default function Education({
  data,
  onInputChange,
  onSave,
  onAddNewSchool,
}) {
  return (
    <form className="block min-h-full max-w-1xl p-10 border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
      <div className="space-y-12">
        <div className=" grid grid-cols-10">
          <div className=" sm:col-span-7">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Education
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Tell us about your academic experience, what did you manage to
              achieve?
            </p>
          </div>
          <div className="mt-6 sm:col-span-3 flex items-center justify-end gap-x-6">
            <button
              onClick={(e) => onSave(e, "Education")}
              className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Complete
            </button>
          </div>
        </div>
        {data.Education.map((school, index) => (
          <School
            key={school.id}
            data={data}
            onInputChange={onInputChange}
            index={index}
          />
        ))}
        <div>
          <NewSchoolButton onAddNewSchool={onAddNewSchool} />
        </div>
      </div>
    </form>
  );
}
