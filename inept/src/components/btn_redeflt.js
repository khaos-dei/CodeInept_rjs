import { Button } from 'bootstrap';
import './btn_redeflt.css';
import { restoreDefaults } from './ls_component';


function BtnReDefault() {
    return (
        <div className='Button' onClick={restoreDefaults}>Re/DFLT</div>
    );
}

export default BtnReDefault;