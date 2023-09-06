import React, { useState } from 'react';
import { pre, mpre } from '../prefixConfig';
import { TabProps, TabPanelProps } from '../components/ComponentTypes';
import '../styles/Tab.scss';

export const Tab: React.FC<TabProps> = ({
  children, className = '',
}) => {
  const classNames = className ? `${pre}tab ${className}` : `${pre}tab`;
  const [activeTab, setActiveTab] = useState(0);
  const tabs = React.Children.toArray(children);
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  return (
    <div className={classNames}>
      <ul className={`${pre}tab-link`}>
        {tabs.map((tab: any, index: number) => (
          <li
            key={index}
            onClick={() => handleTabClick(index)}
            className={`${pre}tab-link-item ${index === activeTab ? `${mpre}active` : ''}`}
          >
            {tab.props.label}
          </li>
        ))}
      </ul>
      <div className={`${pre}tab-content`}>{tabs[activeTab]}</div>
    </div>
  );
};

export const TabPanel: React.FC<TabPanelProps> = ({ children }) => {
  return <>{children}</>;
};
