import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const DropDown = () => {
  const [isListOpen, setIsListOpen] = useState(false);

  const ListToggle = () => {
    setIsListOpen(!isListOpen);
    console.log("List Open");
  };
  return (
    <>
      <div className="booking-items">
        <div className="form-clt">
          <div className="nice-select no-of-person" onClick={ListToggle}>
          <span className="current bg-danger">1 People</span>
          <FaAngleDown style={{ color: "white" }} />
          </div>
          {isListOpen && (
            <ul className="bg-white">
              <li>Hoem</li>
              <li>About</li>
              <li>Contact</li>
              <li>Footer</li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default DropDown;
