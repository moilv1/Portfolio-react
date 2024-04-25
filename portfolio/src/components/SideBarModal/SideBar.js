import React, { useState } from 'react';
import './SideBar.scss'; 

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleSidebar}>{`>>`}</button>
      <ul>
        <li><a href='https://github.com/moilv1/P.8-KASA'>Lien GitHub</a></li>
      </ul>
    </div>
  );
};

export default SideBar;