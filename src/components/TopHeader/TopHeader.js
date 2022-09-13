import './topHeader.scss';
import HeaderCallButton from '../HeaderCallButton/HeaderCallButton';
import SearchBar from '../SearchBar/SearchBar';


function Header() {
    return (
        <div className="wrapper">
            <img src="./img/topHeader/lev-logo.png" alt="Logo" className="logo" />
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
            <div className="button"><HeaderCallButton /></div>
            <div className="searchBar"><SearchBar/></div>
            <div className="language_choose"></div>
        </div>
    )
}

export default Header;