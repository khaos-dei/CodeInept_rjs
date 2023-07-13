import './buttons.css';

import { restoreDefaults } from 'utils/localstorage_component';
import IconButton from 'utils/IconButton';

function ButtonsLine() {
    return (
        
        <div className='Buttons_Line'>
            <IconButton is="Settings" />
            <IconButton is="Default"  onClick={restoreDefaults} />
        </div>
    );
}

export default ButtonsLine;