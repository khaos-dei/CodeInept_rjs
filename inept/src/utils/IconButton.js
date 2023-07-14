import './IconButton.css';
import { Icon} from 'constants/Icons';

function IconButton({is, size='3vmin', onClick, color='white', deg=0, value=NaN, disabled=false, visible=true, style=null}){
    return (
        <button className='TButton' onClick={onClick} value={value} disabled={disabled} style={style}>{visible && Icon(is, size, deg, color)}</button>
    );
}
export default IconButton;