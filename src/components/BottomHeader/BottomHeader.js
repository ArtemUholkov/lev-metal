import React, { useState, useEffect } from 'react';
import NavbarButton from '../NavbarButton/NavbarButton';

import './bottomHeader.scss';

function BottomHeader() {
  const [openDropdown, setOpenDropdown] = useState(false);
  console.log(openDropdown);

  useEffect(() => {
    let handler = (e) => {
      setOpenDropdown(false);
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <div className="bottom_header_wrapper">
      <ul className="navbar">
        <li className="navbar_dropdown">
          <NavbarButton
            name={`Товари`}
            onClick={() => {
              setOpenDropdown(!openDropdown);
            }}
          />
        </li>
        <li className="navbar_dropdown">
          <NavbarButton name={`Послуги`} />
        </li>
        <a href="#">
          <li className="navbar_link">Про компанію</li>
        </a>
        <a href="#">
          <li className="navbar_link">Контакти</li>
        </a>
      </ul>
      <div className="dropdown_wrapper"></div>
    </div>
  );
}

export default BottomHeader;
