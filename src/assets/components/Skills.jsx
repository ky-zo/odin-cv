import React from "react";

function Skill({ key, data, onInputChange, index }) {
  return (
    <div className=" bor der-gray-900/10">
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label
            htmlFor="skill-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Skills
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="skill-name"
              id="skill-name"
              value={data.Skills[index].SkillName || ""}
              onChange={(e) => onInputChange(e, "SkillName", "Skills", index)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="rating"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Rating
          </label>
          <div className="mt-2">
            <select
              type="text"
              name="rating"
              id="rating"
              value={data.Skills[index].Rating || ""}
              onChange={(e) => onInputChange(e, "Rating", "Skills", index)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option></option>
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-2">
          <button
            onClick={(e) => "TO-DO!!!!"}
            className="rounded-md bg-white px-6 py-2 text-sm font-semibold text-indigo-600 shadow-md hover:bg-indigo-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

function NewSkillButton({ onAddNewSkill }) {
  return (
    <div>
      <button
        type="button"
        onClick={(e) => onAddNewSkill()}
        className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add New
      </button>
    </div>
  );
}

export default function Skills({ data, onInputChange, onSave, onAddNewSkill }) {
  return (
    <form className="block min-h-full max-w-1xl p-10 border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
      <div className="space-y-12">
        <div className=" grid grid-cols-10">
          <div className=" sm:col-span-7">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Skills
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Add your skills and rating. This will help your future employer to
              know your skills.
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
        {data.Skills.map((skill, index) => (
          <Skill
            key={skill.id}
            data={data}
            onInputChange={onInputChange}
            index={index}
          />
        ))}
        <div>
          <NewSkillButton onAddNewSkill={onAddNewSkill} />
        </div>
      </div>
    </form>
  );
}
