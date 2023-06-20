import images from "@/config/images";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MobileNavbar = () => {
  return (
    <section className="block w-full md:hidden lg:hidden xl:hidden">
      <div className="flex items-center justify-between text-black bg-white">
        <img src={images.logo} alt="" className={`h-16 ml-6`} />
        <div className="flex mr-6 space-x-5">
          <FontAwesomeIcon icon={faBars} />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
    </section>
  );
};

export default MobileNavbar;
