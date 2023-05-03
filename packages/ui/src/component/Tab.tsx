import React, { useState } from 'react';
import '../styles/Tab.scss';

type TabProps = {
  children: React.ReactNode;
};

export const Tab: React.FC<TabProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabs = React.Children.toArray(children);

  return (
    <div className={`tab`}>
      <ul className='tab-link'>
        {tabs.map((tab: any, index: number) => (
          <li
            key={index}
            onClick={() => handleTabClick(index)}
            className={`tab-link-item ${index === activeTab ? 'active' : ''}`}
          >
            {tab.props.label}
          </li>
        ))}
      </ul>
      <div className='tab-content'>{tabs[activeTab]}</div>
    </div>
  );
};

type TabPanelProps = {
  children: React.ReactNode;
  label: string;
};

export const TabPanel: React.FC<TabPanelProps> = ({ children }) => {
  return <>{children}</>;
};
