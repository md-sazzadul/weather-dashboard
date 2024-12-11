import React, { useState } from "react";
import heart from "../../assets/heart.svg";

const Favourite = ({ onShow }) => {
  const [isShown, setIsShown] = useState(false);

  const handleMouseEnter = () => {
    setIsShown(true);
  };

  const handleMouseLeave = () => {
    setIsShown(false);
  };

  return (
    <div
      className="p-2 cursor-pointer flex gap-2 items-center rounded-md transition-all"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onShow}
    >
      <img
        src={heart}
        alt="heart"
        className={`transition-transform duration-300 ${
          isShown ? "transform scale-125" : ""
        }`}
      />
      <span
        className={`transition-opacity duration-300 ${
          isShown ? "opacity-100" : "opacity-0"
        }`}
      >
        Favourite Locations
      </span>
    </div>
  );
};

export default React.memo(Favourite);
