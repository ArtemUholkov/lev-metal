import './navbarButton.scss';

function NavbarButton(props) {
    return (
        <button className='bottomheader_button'>
            <div className="burger_wrapper">
                <span className="burger_line"></span>
                <span className="burger_line"></span>
                <span className="burger_line"></span>
            </div>
            <span className='bottomheader_text'>{props.name}</span>
        </button>
    )
}

export default NavbarButton;