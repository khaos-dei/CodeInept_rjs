import "./notepad_tab_menu.css"
import {IconO} from '../../constants/Icons'


function NotepadTabMenu(props) {


function doLine(Name, id){
    return(
    <div className='TabGridLine'>
    <div className='NoteName'>{Name}</div>
    <button className='IcnBtn'> {IconO("Rename","3vmin",0)}</button>
    <button className='IcnBtn'> {IconO("Delete","3vmin",0)}</button>
    <button className='IcnBtn'> {IconO("Rearrange","3vmin",0)}</button>
    </div>
    )
}

return(
<div className='TabsGrid'>
    {props.Tabs.map((currentElement, index) => {return(doLine(currentElement, index))})}
    <div className='TabGridLine'>
    <div className='NoteName'></div>
    <button className='IcnBtn'> {IconO("Add","3vmin",0)}</button>
    </div>
</div>
)
}

export default NotepadTabMenu;