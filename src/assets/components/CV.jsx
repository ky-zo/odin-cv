import React from "react";

export default function CV({ data, onClearLocalStorage }) {
  function printPDF() {
    const element = document.getElementById("cv");
    const cssLinks = Array.from(
      document.head.querySelectorAll('link[rel="stylesheet"], style')
    )
      .map((style) => style.outerHTML)
      .join("\n");
    const html = `
      <html>
        <head>
          <title>Print</title>
          ${cssLinks}
        </head>
        <body>
          ${element.outerHTML}
        </body>
      </html>
    `;

    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const win = window.open(url, "Print", "height=595,width=842");
    win.onload = function () {
      setTimeout(() => {
        win.print();
        URL.revokeObjectURL(url);
        win.close();
      }, 500); // Adding a 500ms delay before printing and closing the window
    };
  }

  return (
    <div className="min-h-screen bg-white flex justify-center items-center grid grid-cols-1">
      <div id="cv" className="a4-container max-w-[595px] w-full">
        <div className="bg-white text-libre-baskerville p-8">
          <div className="grid grid-cols-1">
            <div className="text-xl font-bold text-center">
              {data.FirstName} {data.LastName}
            </div>
          </div>
          <div className="text-sm text-center">
            {data.PhoneNumber} | {data.Email} | linkedin.com/{data.LinkedIn}
          </div>
          <div className="text-sm text-center">
            {data.Street}, {data.City}, {data.Country}
          </div>
          <div className="border-t-2 border-gray-300 my-4"></div>
          <div className="text-lg font-bold">Personal Objective</div>
          {data.About}
          <div className="border-t-2 border-gray-300 my-4"></div>
          <div className="grid gap-2">
            <div className="text-lg font-bold">Education</div>
            {data.Education.map((item) => {
              return (
                <div key={item.id}>
                  <div className="italic">
                    {item.Degree} | {item.ActiveYears}
                  </div>
                  <div className="font-bold italic">{item.SchoolName}</div>
                </div>
              );
            })}
          </div>
          <div className="border-t-2 border-gray-300 my-4"></div>
          <div className="grid gap-2">
            <div className="text-lg font-bold">Experience</div>
            {data.Experience.map((item) => {
              return (
                <div key={item.id}>
                  <div className="bold">
                    {item.Position} @ {item.Company}
                  </div>
                  <div className="italic">
                    {item.StartDate} - {item.EndDate}
                  </div>
                  <div>{item.Description}</div>
                </div>
              );
            })}
          </div>
          <div className="border-t-2 border-gray-300 my-4"></div>

          <div className="grid grid-cols-2">
            <div>
              <div className="text-lg font-bold">Skills</div>
              {data.Skills.map((item) => {
                return (
                  <div key={item.id}>
                    {item.SkillName} {item.Rating} / 5
                  </div>
                );
              })}
            </div>
            <div>
              <div className="text-lg font-bold">Hobbies</div>
              {data.Hobbies.map((item) => {
                return (
                  <div key={item.id}>
                    <div>{item.Hobby}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex grid-cols-2 gap-7 justify-around">
        <button
          type="button"
          onClick={(e) => onClearLocalStorage(e)}
          className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Clear
        </button>
        <button
          type="button"
          onClick={(e) => printPDF()}
          className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Print
        </button>
      </div>
    </div>
  );
}
