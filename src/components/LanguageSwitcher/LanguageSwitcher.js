import React, { useState, useEffect } from 'react';

import './languageSwitcher.scss';

function LanguageSwitcher() {

    const [open, setOpen] = useState(false);
    let [changeFlag, setChange] = useState(true);

    

    useEffect(() => {
        let handler = (e) =>{
            setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return() => {
            document.removeEventListener("mousedown", handler);
        }
    });
    
    return (
        <div className="lang_container" >
            <div className="lang_switcher" onClick={() => {setOpen(!open)}} >
                <img src={`./img/languageSwitcher/${changeFlag ? 'UA-flag-icon' : 'RU-flag-icon'}.png`} alt="UA Flag" className="flag_icon" />
                <img src="./img/languageSwitcher/Vector.png" alt="Arrow switcher" className={`arrow_icon ${open? 'rotate' : 'norotate'}`} />
            </div>
            <div className="wrapper">
                <div className={`drowdown ${open? 'active' : 'inactive'}`}>
                    <div className="language" onClick={() => {setChange(changeFlag = true)}}>
                        <img src="./img/dropdownPopup/UA-flag-icon.png" alt="UA flag" className="flag"  />
                        <span className="language_text">Українська</span>
                    </div>
                     <div className="language" onClick={() => {setChange(changeFlag = false)}}>
                        <img src="./img/dropdownPopup/RU-flag-icon.png" alt="RU flag" className="flag" />
                        <span className="language_text">Раша</span>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default LanguageSwitcher;