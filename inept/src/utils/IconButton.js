import './IconButton.css';
import { Icons, Alts } from 'constants/Icons';
import Colorize from 'utils/colorize';


function IconButton({is, size='3vmin', onClick, color='white', deg=0, value="NaN", disabled=false, visible=true, style=null}){
    return (
        <button className='TButton' onClick={onClick} value={value} disabled={visible&&disabled} style={style}>{Icon(is, size, deg, color, (visible? 1 : 0))}</button>
    );
}
function IconNoButton({is, size='3vmin', onClick, color='white', deg=0, value="NaN", disabled=false, visible=true, style=null}){
    return (
        Icon(is, size, deg, color, (visible? 1 : 0))
    );
}



function Icon(key, size, deg = 0, color = 'white', visible) {//icon, but made white
    switch (color) {
        case 'white':
            return (IconW(key, size, deg, (visible ? 1 : 0)));
        case 'black':
            return (IconB(key, size, deg, (visible ? 1 : 0)));
        case 'red':
            color = "db2c2c"; break;
        case 'blue':
            color = "025bba"; break;
        case 'green':
            color = "03a11d"; break;
        default:
            return (IconColor(key, size, deg, color, (visible ? 1 : 0)));
    }
    return (IconColor(key, size, deg, color, (visible ? 1 : 0)));
}

function IconB(key, size, deg, vis = 1) {//icon, black original
    return (<img src={Icons[key]} alt={Alts[key]} style={{ width: size, opacity: vis, transform: 'rotate(' + deg + 'deg)' }} />)
}
function IconW(key, size, deg, vis=1) {//icon, but made white
    return (<img src={Icons[key]} alt={Alts[key]} style={{ width: size, opacity:vis,  filter: 'invert(1)', transform: 'rotate(' + deg + 'deg)' }} />)
}

function IconColor(key, size, deg, color, vis = 1 ) {//icon colored Red
    return (<img src={Icons[key]} alt={Alts[key]} style={{ width: size, opacity: vis, filter: Colorize(color), transform: 'rotate(' + deg + 'deg)' }} />)
}


export default IconButton;
export {IconNoButton};