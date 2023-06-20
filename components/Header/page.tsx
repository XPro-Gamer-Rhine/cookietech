import {
  faEnvelope,
  faLanguage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = () => {
  return (
    <section className="flex justify-center w-full p-3 text-sm text-black bg-zinc-50">
      <div className="flex justify-between space-x-[40vh]">
        <p>IT solutions that are designed to integrate multiple sectors</p>
        <div className="flex space-x-14">
          <div className="flex items-center space-x-3">
            {" "}
            <FontAwesomeIcon icon={faPhone} />
            <p>
              Phone <strong>500.369.2580</strong>
            </p>
          </div>
          <div className="flex items-center space-x-3">
            {" "}
            <FontAwesomeIcon icon={faEnvelope} />
            <p>info@zentec.com</p>
          </div>
          <div className="flex items-center space-x-3">
            {" "}
            <FontAwesomeIcon icon={faLanguage} />
            <p>EN</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
