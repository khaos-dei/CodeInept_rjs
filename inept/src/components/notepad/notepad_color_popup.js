import MiniDialog from '../mini_dialogue'
import {Icon} from '../../constants/Icons'

function NotepadColorPopup(props) {
return(
<MiniDialog /* Color text even buttons are not present yet! */
                body={
                  <div className='HeadingButtonLine'>
                  color_options  (will_be) here
                  </div>
                }
                open={props.showMiniDialogColor}
                position={["66.5%","80%","9vmin","14vmin"]}
                background_color="gray"/>
)
}

export default NotepadColorPopup;