// components/Tabs.js
import React, { useState } from 'react';

/**
 * Individual Tab Component
 * @param {Object} props - Component properties
 * @returns {React.ReactNode} - Tab content
 */
const Tab = ({ children }) => {
  return <>{children}</>;
};

/**
 * Tabs Component
 * @param {Object} props - Component properties
 * @param {string} props.ariaLabel - Aria label for accessibility
 * @param {React.ReactNode} props.children - Tab components
 * @returns {React.ReactNode} - Tabs component
 */
const Tabs = ({ ariaLabel, children }) => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState(0);

  // Map over children to render tab buttons
  const tabButtons = React.Children.map(children, (child, index) => {
    const { key, title } = child.props;

    return (
      <button
        key={key}
        onClick={() => setActiveTab(index)}
        className={`px-4 py-1.5 focus:outline-none  ${
          index === activeTab
            ? 'bg-white rounded-xl  shadow text-gray-700'
            : ' text-slate-500'
        }`}
      >
        {title}
      </button>
    );
  });

  return (
    <>
   
      {/* Container for tab buttons */}
      <div className="inline-block bg-gray-200 rounded-xl p-1 space-x-2">
        {tabButtons}
      </div>
      

      {/* Container for active tab content */}
      <div className="mt-4">{React.Children.toArray(children)[activeTab]}</div>
    
    </>
  );
};

export { Tab, Tabs };
