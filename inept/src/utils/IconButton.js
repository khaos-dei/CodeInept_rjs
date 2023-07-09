import './IconButton.css';
import { Icon, IconO, IconRed, IconBlue, IconGreen } from 'constants/Icons';

function IconButton(props) {
    return (
        <button className='TButton' onClick={props.onClick}>{Icon(props.is, props.size)}</button>
    );
}

export default IconButton;