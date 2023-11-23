import React, { useState, useEffect } from "react";
import { SlEyeglass } from "react-icons/sl";

const ViewCodeTabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const [overlayStyles, setOverlayStyles] = useState({});

  useEffect(() => {
    updateOverlay(activeTab);
  }, [activeTab]);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  const updateOverlay = (newActiveTab) => {
    // Find the button element corresponding to the active tab
    const activeButton = document.getElementById(`tab-button-${newActiveTab}`);
    if (activeButton) {
      // Calculate and set the overlay styles based on the active button's position and size
      const reductionFactor = 0.92;
      setOverlayStyles({
        width: `${activeButton.offsetWidth * reductionFactor}px`,
        transform: `translateX(${activeButton.offsetLeft * 1}px)`,
      });
    }
  };

  return (
    <>
      {/* Container for tabs */}
      <div className="max-w-[200px] relative p-1 bg-[#fafafa] dark:bg-[#0C111D] rounded-lg
       ">
        <div className="flex relative  ">
          {/* Map through each child (tab) */}
          {children.map((child) => (
            <button
              key={child.props.label}
              id={`tab-button-${child.props.label}`}
              className={`${
                activeTab === child.props.label
                  ? "dark:text-blue-400 text-blue-600 duration-[600ms] " // Set the text color for the active tab
                  : "text-gray-400"
              } flex-1 items-center font-medium py-1.5`}
              onClick={(e) => handleClick(e, child.props.label)}
            >
              <div className="flex items-center gap-2 justify-center">
                {child.props.icon}
                {child.props.label}
              </div>
            </button>
          ))}
          {/* Sliding overlay effect */}
          <div
            className=" absolute top-[2.5px] left-[4px]  bg-white/40 dark:bg-[#273048]/40  rounded-md h-8  shadow transition-all duration-300 bordder-t border-orange-400"
            style={overlayStyles}
          ></div>
        </div>
      </div>

      {/* Container for displaying content of the active tab */}
      <div className="py-4">
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </>
  );
};

const ViewCodeTab = ({ label, children, icon }) => {
  return (
    <div label={label} icon={icon} className="hidden">
      {children}
    </div>
  );
};

export { ViewCodeTabs, ViewCodeTab };
