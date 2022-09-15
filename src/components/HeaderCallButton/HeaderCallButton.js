import './headerCallButton.scss';

function headerCallButton(props) {
    return (
        <button>
            <span>{props.name}</span>
        </button>
    )
}

export default headerCallButton;