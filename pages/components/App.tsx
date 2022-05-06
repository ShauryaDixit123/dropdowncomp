import React, { useState } from "react";
import styles from "./App.module.css";
function App() {
  return (
    <div>
      <div className={` group inline-block`}>
        <button
          className={`outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center ${styles.minW32}`}
        >
          <span className="pr-1 font-semibold flex-1">Manage</span>
          <span>
            <svg
              className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>
        <ul
          className={`bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32`}
        >
          <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Partners</li>
          <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Customers</li>
          <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
            Rate Templates
          </li>
          <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Ports</li>
          <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Liners</li>
          <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Executives</li>
          <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
            Job Management
          </li>

          <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
            <button className="w-full text-left flex items-center outline-none focus:outline-none">
              <span className="pr-1 flex-1 ">Access Control</span>
              <span className="mr-auto">
                <svg
                  className={`fill-current h-4 w-4
            transition duration-150 ease-in-out `}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
            </button>
            <ul
              className={`bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
   `}
            >
              <li className="px-3 py-1 hover:bg-gray-100">Configure Group</li>
              <li className="px-3 py-1 hover:bg-gray-100">Configure User</li>
            </ul>
          </li>
          <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
            <button className="w-full text-left flex items-center outline-none focus:outline-none">
              <span className="pr-1 flex-1">Bulk RFQ</span>
              <span className="mr-auto">
                <svg
                  className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
            </button>
            <ul
              className={`bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  ${styles.minW32}`}
            >
              <li className="px-3 py-1 hover:bg-gray-100">Manange RFQ</li>
              <li className="px-3 py-1 hover:bg-gray-100">Add RFQ Buy Rate</li>
              <li className="px-3 py-1 hover:bg-gray-100">Add RFQ Sell Rate</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
