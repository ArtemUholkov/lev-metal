import React, { useState } from 'react';

import './topHeader.scss';
import HeaderCallButton from '../HeaderCallButton/HeaderCallButton';
import SearchBar from '../SearchBar/SearchBar';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Modal from '../Modal/Modal';


function Header() {
    const [modalActive, setModalActive] = useState(false);
   
    return (
    <>
        <div className="wrapper">
            <img src="./img/topHeader/lev-logo.png" alt="Logo" className="logo" />
            <div className="content_wrapper">
                <ul className="phone_numbers">
                    <li>
                        <img src="./img/topHeader/kyivstar-icon.png" alt="kyivstar icon" className="phone_operator" />
                        <span className="phone_number">+380987570000</span>
                    </li>
                    <li>
                         <img src="./img/topHeader/life0con.png" alt="kyivstar icon" className="phone_operator" />
                         <span className="phone_number">+380737570000</span>
                    </li>
                </ul>
                <div className="button" onClick={() => setModalActive(true)}><HeaderCallButton name={`Замовити дзвінок`} /></div>
                <div className="searchBar"><SearchBar/></div>
                <div className="language_choose"><LanguageSwitcher/></div>
            </div>
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
        
        </Modal>
    </>
    )
}

export default Header;