import React from "react";

type RightIconProps = {
  className?: string;
};

export const Star: React.FC<RightIconProps> = ({ className }) => {
  return (
    <svg
      fill="#fac400"
      className={className}
      width="20px"
      height="20px"
      viewBox="0 0 64 64"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      stroke="#fac400"
      strokeWidth="2.496"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="1.024"
      />
      <g id="SVGRepo_iconCarrier">
        <rect
          id="Icons"
          x="-512"
          y="-192"
          width="1280"
          height="800"
          style={{ fill: "none" }}
        />
        <path
          id="star"
          d="M32.001,9.188l5.666,17.438l18.335,0l-14.833,10.777l5.666,17.438l-14.834,-10.777l-14.833,10.777l5.666,-17.438l-14.834,-10.777l18.335,0l5.666,-17.438Z"
        />
      </g>
    </svg>
  );
};
