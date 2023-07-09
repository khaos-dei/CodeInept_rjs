import './buttons.css';

import { restoreDefaults } from 'utils/localstorage_component';
import { Icon } from 'constants/Icons';
import IconButton from 'utils/IconButton';

function ButtonsLine() {
    return (
        <div className='Buttons_Line'>
            <IconButton is="Settings" size='3vmin' />
            <IconButton onClick={restoreDefaults} is="Default" size='3vmin' />
        </div>
    );
}

export default ButtonsLine;