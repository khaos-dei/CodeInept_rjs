import './btn_redeflt.css';
import { restoreDefaults } from './ls_component';


function BtnReDefault() {
    return (
        <button className='Button' onClick={restoreDefaults}>DFLT</button>
    );
}

export default BtnReDefault;