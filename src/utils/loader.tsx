import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="ui-loader loader-blk">
        <svg viewBox="22 22 44 44" className="multiColor-loader">
          <circle
            cx="44"
            cy="44"
            r="20.2"
            fill="none"
            strokeWidth="3.6"
            className="loader-circle loader-circle-animation"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
