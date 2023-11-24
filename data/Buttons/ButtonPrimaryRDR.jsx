import React from "react";

/**
 * ButtonGroup component renders a group of buttons with different styles.
 * @returns {React.ReactNode} - JSX for the button group.
 */
const ButtonPrimary = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {/* Primary Button */}
      <button className="rounded-lg  bg-blue-500 px-4 py-2.5 text-center text-sm font-medium text-white shadow-xl transition-all  hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 duration-200">
        Button text
      </button>

      {/* Violet Button */}
      <button className="rounded-lg bg-violet-500 px-4 py-2.5 text-center text-sm font-medium text-white shadow-lg transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200 disabled:cursor-not-allowed disabled:border-violet-300 disabled:bg-violet-300 duration-200">
        Button text
      </button>

      {/* Gray Button */}
      <button className="rounded-lg  bg-gray-800 px-4 py-2.5 text-center text-sm font-medium text-white shadow-xl transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300 duration-200">
        Button text
      </button>
    </div>
  );
};

export default ButtonPrimary;
