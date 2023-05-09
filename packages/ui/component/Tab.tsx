import React, { useState } from 'react';
import { CommonProps, TabPanelProps } from './ComponentTypes';
import '../styles/Tab.scss';

export const Tab: React.FC<CommonProps> = ({ children, className = '' }) => {
  const classNames = className ? `tab ${className}` : `tab`;

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabs = React.Children.toArray(children);

  return (
    <div className={classNames}>
      <ul className='tab-link'>
        {tabs.map((tab: any, index: number) => (
          <li
            key={index}
            onClick={() => handleTabClick(index)}
            className={`tab-link-item ${index === activeTab ? 'is_active' : ''}`}
          >
            {tab.props.label}
          </li>
        ))}
      </ul>
      <div className='tab-content'>{tabs[activeTab]}</div>
    </div>
  );
};

export const TabPanel: React.FC<TabPanelProps> = ({ children }) => {
  return <>{children}</>;
};
