import './redo_defaults.css';
import { restoreDefaults } from './localstorage_component';


function BtnReDefault() {
    return (
        <button className='Button' onClick={restoreDefaults}>DFLT</button>
    );
}

export default BtnReDefault;