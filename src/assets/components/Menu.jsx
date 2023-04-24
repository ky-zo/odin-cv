import React, { useState, useEffect } from "react";

export default function Menu({ cvComponents, onMenuClick }) {
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
