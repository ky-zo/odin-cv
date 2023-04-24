import React from "react";

function Job({ key, data, onInputChange, index }) {
  return (
    <div className=" bor der-gray-900/10">
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="position"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Position
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="position"
              id="position"
              value={data.Experience[index].Position || ""}
              onChange={(e) =>
                onInputChange(e, "Position", "Experience", index)
              }
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="company"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Company
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="company"
              id="company"
              value={data.Experience[index].Company || ""}
              onChange={(e) => onInputChange(e, "Company", "Experience", index)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="start-date"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Start Date
          </label>
          <div className="mt-2">
            <input
              id="start-date"
              name="start-date"
              type="text"
              value={data.Experience[index].StartDate || ""}
              onChange={(e) =>
                onInputChange(e, "StartDate", "Experience", index)
              }
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="end-date"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            End Date
          </label>
          <div className="mt-2">
            <input
              id="end-date"
              name="end-date"
              type="text"
              value={data.Experience[index].EndDate || ""}
              onChange={(e) => onInputChange(e, "EndDate", "Experience", index)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-6">
          <div className="col-span-full">
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Description
            </label>
            <div className="mt-2">
              <textarea
                id="description"
                name="description"
                rows={2}
                value={data.Experience[index].Description || ""}
                onChange={(e) =>
                  onInputChange(e, "Description", "Experience", index)
                }
                className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              What did you manage to achieve?
            </p>
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

function NewJobButton({ onAddNewJob }) {
  return (
    <div>
      <button
        type="button"
        onClick={(e) => onAddNewJob()}
        className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add New
      </button>
    </div>
  );
}

export default function Experience({
  data,
  onInputChange,
  onSave,
  onAddNewJob,
}) {
  return (
    <form className="block min-h-full max-w-1xl p-10 border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
      <div className="space-y-12">
        <div className=" grid grid-cols-10">
          <div className=" sm:col-span-7">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Experience
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Now the most important part, your experience. Add your previous or
              current jobs.
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
        {data.Experience.map((job, index) => (
          <Job
            key={job.id}
            data={data}
            onInputChange={onInputChange}
            index={index}
          />
        ))}
        <div>
          <NewJobButton onAddNewJob={onAddNewJob} />
        </div>
      </div>
    </form>
  );
}
