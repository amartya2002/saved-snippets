import React, { useState, useRef, useEffect } from 'react';

const ViewCodeTabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const tabsRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const totalTabs = React.Children.count(children);
        let newIndex;
        if (e.key === 'ArrowRight') {
          newIndex = (getIndex(activeTab) + 1) % totalTabs;
        } else {
          newIndex = (getIndex(activeTab) - 1 + totalTabs) % totalTabs;
        }
        setActiveTab(getLabel(newIndex));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeTab, children]);

  const getIndex = (label) => {
    return children.findIndex((child) => child.props.label === label);
  };

  const getLabel = (index) => {
    return children[index].props.label;
  };

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <>
      <div className="max-w-[200px]">
        <div className="flex p-1 bg-gray-100 dark:bg-gray-700 rounded-xl" ref={tabsRef} role="tablist" aria-label="Tabs">
          {children.map((child) => (
            <button
              key={child.props.label}
              className={`${
                activeTab === child.props.label
                  ? 'bg-white bg-gray-500 rounded-xl transition duration-300 ease-in-out text-black dark:text-white '
                  : 'text-gray-400'
              } flex-1 font-medium py-1.5 outline-none`}
              onClick={(e) => handleClick(e, child.props.label)}
              role="tab"
              aria-selected={activeTab === child.props.label ? 'true' : 'false'}
              tabIndex={activeTab === child.props.label ? '0' : '-1'}
            >
              {child.props.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-3">
        {children.map((child) => (
          <div
            key={child.props.label}
            className={`${
              activeTab === child.props.label ? 'block opacity-100' : 'hidden opacity-0'
            }`}
            role="tabpanel"
            id={`tabpanel-${child.props.label}`}
            aria-labelledby={`tab-${child.props.label}`}
            tabIndex={activeTab === child.props.label ? '0' : '-1'}
          >
            {child.props.children}
          </div>
        ))}
      </div>
    </>
  );
};

const ViewCodeTab = ({ label, children }) => {
  return (
    <div label={label} className="hidden">
      {children}
    </div>
  );
};

export { ViewCodeTabs, ViewCodeTab };
