import './headerCallButton.scss';

function headerCallButton(props) {
    return (
        <button className='topheader_button'>
            <span>{props.name}</span>
        </button>
    )
}

export default headerCallButton;