import React from "react";

export default function CV({ data }) {
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
      <div>
        Education:{" "}
        {data.Education.map((item) => {
          return (
            <div key={item.id}>
              <div>School: {item.SchoolName}</div>
              <div>Degree: {item.Degree}</div>
              <div>Active Years: {item.ActiveYears}</div>
            </div>
          );
        })}
      </div>
      <div>
        Experience:{" "}
        {data.Experience.map((item) => {
          return (
            <div key={item.id}>
              <div>Company: {item.Company}</div>
              <div>Position: {item.Position}</div>
              <div>Start Date: {item.StartDate}</div>
              <div>End Date: {item.EndDate}</div>
              <div>Description: {item.Description}</div>
            </div>
          );
        })}
      </div>
      <div>
        Skills:{" "}
        {data.Skills.map((item) => {
          return (
            <div key={item.id}>
              Skill: {item.SkillName} {item.Rating} / 5
            </div>
          );
        })}
      </div>
      <div>
        Hobbies:{" "}
        {data.Hobbies.map((item) => {
          return (
            <div key={item.id}>
              <div>Hobby: {item.Hobby}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
