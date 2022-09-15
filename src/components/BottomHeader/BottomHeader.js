import React from "react";
import NavbarButton from "../NavbarButton/NavbarButton";

import './bottomHeader.scss';

function BottomHeader () {

    return (
        <div className="bottom_header_wrapper">
            <ul className="navbar">
                <li className="navbar_dropdown"><NavbarButton name={`Товари`}/></li>
                <li className="navbar_dropdown"><NavbarButton name={`Послуги`}/></li>
                <a href="#"><li className="navbar_link">Про компанію</li></a>
                <a href="#"><li className="navbar_link">Контакти</li></a>
            </ul>
        </div>
    )

}

export default BottomHeader;