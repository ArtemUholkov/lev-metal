import React, { useState, useEffect, useRef } from 'react';

import './languageSwitcher.scss';

function LanguageSwitcher() {

    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) =>{
            if(!menuRef.current.contains(e.target)){
            setOpen(false);
        }
        };
        document.addEventListener("mousedown", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
        }
    });

    return (
        <div className="lang_container" ref={menuRef}>
            <div className="lang_switcher" onClick={() => {setOpen(!open)}} >
                <img src="./img/languageSwitcher/UA-flag-icon.png" alt="UA Flag" className="flag_icon" />
                <img src="./img/languageSwitcher/Vector.png" alt="Arrow switcher" className={`arrow_icon ${open? 'rotate' : 'norotate'}`} />
            </div>
            <div className="wrapper">
                <div className={`drowdown ${open? 'active' : 'inactive'}`}>
                    <div className="language" >
                        <img src="./img/dropdownPopup/UA-flag-icon.png" alt="UA flag" className="flag" />
                        <span className="language_text">Українська</span>
                    </div>
                     <div className="language">
                        <img src="./img/dropdownPopup/RU-flag-icon.png" alt="RU flag" className="flag" />
                        <span className="language_text">Раша</span>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default LanguageSwitcher;