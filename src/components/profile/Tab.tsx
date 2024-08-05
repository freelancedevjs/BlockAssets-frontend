import React from 'react';

interface TabProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

export const Tab: React.FC<TabProps> = ({ title, active, onClick }) => {
  const tabClassName = `cursor-pointer flex-1 py-2 text-center ${
    active
      ? 'text-black border-b-2 border-black font-semibold text-base'
      : 'text-gray-500'
  }`;

  return (
    <div className={tabClassName} onClick={onClick}>
      {title}
    </div>
  );
};
