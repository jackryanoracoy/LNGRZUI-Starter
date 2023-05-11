import React, { useState } from 'react';
import { TabProps, TabPanelProps } from './ComponentTypes';
import '../styles/Tab.scss';

export const Tab: React.FC<TabProps> = ({
  children, className = '',
}) => {
  const classNames = className ? `tab ${className}` : 'tab';
  const [activeTab, setActiveTab] = useState(0);
  const tabs = React.Children.toArray(children);
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

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
