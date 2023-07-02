import FontSize_icn from '../assets/icn/FontSize.png'
import AddNote_icn from '../assets/icn/AddNote.png'
import NoteList_icn from '../assets/icn/NoteList.png'
import FlippingArrows_icn from '../assets/icn/FlippingArrows2.png'
import OnesArrow_icn from '../assets/icn/OnesArrow.png'
import Delete_icn from '../assets/icn/Delete.png'
import Colors_icn from '../assets/icn/Colors.png'
import AlgLeft_icn from '../assets/icn/AlgLeft.png'
import AlgCenter_icn from '../assets/icn/AlgCenter.png'
import AlgRight_icn from '../assets/icn/AlgRight.png'
import BiggerFont_icn from '../assets/icn/BiggerFont.png'
import SmallerFont_icn from '../assets/icn/SmallerFont.png'
import AddList_icn from '../assets/icn/AddList.png'
import Heading_icn from '../assets/icn/Heading.png'
import Paragraph_icn from '../assets/icn/Paragraph.png'
import Heading1_icn from '../assets/icn/Heading1.png'
import Heading2_icn from '../assets/icn/Heading2.png'
import Heading3_icn from '../assets/icn/Heading3.png'
import Heading4_icn from '../assets/icn/Heading4.png'
import Heading5_icn from '../assets/icn/Heading5.png'
import Heading6_icn from '../assets/icn/Heading6.png'
import ListBullet_icn from '../assets/icn/ListBullet.png'
import ListCheck_icn from '../assets/icn/ListCheck.png'
import ListNum_icn from '../assets/icn/ListNum.png'
import Undo_icn from '../assets/icn/Undo.png'
import Redo_icn from '../assets/icn/Redo.png'
import Code_icn from '../assets/icn/Code.png'
import Line_icn from '../assets/icn/Line.png'
import TextColor_icn from '../assets/icn/TextColor.png'
import Seek_icn from '../assets/icn/Seek.png'
import Rename_icn from '../assets/icn/Rename.png'
import Rearrange_icn from '../assets/icn/Rearrange.png'
import Yes_icn from '../assets/icn/yes.png'
import No_icn from '../assets/icn/no.png'
import Up_icn from '../assets/icn/Up.png'
import Down_icn from '../assets/icn/Down.png'


function Icon( key, size, deg=0){//icon, but made white
  return(<img src={Icons[key]} alt={Alts[key]} style={{width:size, filter:'invert(1)', transform:'rotate('+deg+'deg)'}}/>)
}

function IconO( key, size, deg=0){//icon original
  return(<img src={Icons[key]} alt={Alts[key]} style={{width:size, transform:'rotate('+deg+'deg)'}}/>)
}

function IconRed(key, size, deg = 0) {//icon colored Red
  return (<img src={Icons[key]} alt={Alts[key]} style={{ width: size, filter: 'invert(1) grayscale(100%) brightness(30%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(0.8)', transform: 'rotate(' + deg + 'deg)' }} />)
}
function IconBlue(key, size, deg = 0) {//icon colored Red
  return (<img src={Icons[key]} alt={Alts[key]} style={{ width: size, filter: 'invert(1) grayscale(100%) brightness(30%) sepia(100%) hue-rotate(-180deg) saturate(700%) contrast(0.8)', transform: 'rotate(' + deg + 'deg)' }} />)
}
function IconGreen(key, size, deg = 0) {//icon colored Red
  return (<img src={Icons[key]} alt={Alts[key]} style={{ width: size, filter: 'invert(1) grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(1000%) contrast(0.8)', transform: 'rotate(' + deg + 'deg)' }} />)
}

const Icons  = {
    "Font":FontSize_icn,
    "Add": AddNote_icn,
    "List":NoteList_icn,

    "Arrows":FlippingArrows_icn,
    "Arrow": OnesArrow_icn,
    "Delete":Delete_icn,
    "Color":Colors_icn,
    "Seek":Seek_icn,
    "AlignL": AlgLeft_icn,
    "AlignC": AlgCenter_icn,
    "AlignR": AlgRight_icn,
    "FontL":BiggerFont_icn,
    "FontS":SmallerFont_icn,
    "TextColor":TextColor_icn,

    "H0":Heading_icn,
    "P":Paragraph_icn,
    "H1":Heading1_icn,
    "H2":Heading2_icn,
    "H3":Heading3_icn,
    "H4":Heading4_icn,
    "H5":Heading5_icn,
    "H6":Heading6_icn,

    "AddList":AddList_icn,
    "Bullet":ListBullet_icn,
    "Enum":ListNum_icn,
    "Todo":ListCheck_icn,

    "Undo":Undo_icn,
    "Redo":Redo_icn,

    "Code":Code_icn,
    "Line":Line_icn,

    "Rename":Rename_icn,
    "Rearrange":Rearrange_icn,

    "Yes":Yes_icn,
    "No":No_icn,

    "Up": Up_icn,
    "Down": Down_icn,
    
  };

const Alts  = {
    "Font":"Tt",
    "Add": "+",
    "List":"=",

    "Arrows":">>",
    "Arrow": ">",
    "Delete":"del",
    "Color":"col",
    "Seek":"seek",
    "AlignL": "left",
    "AlignC": "center",
    "AlignR": "right",
    "FontL":"AA",
    "FontS":"aa",
    "TextColor":"txtCol",

    "H0":"H0",
    "P":"P",
    "H1":"h1",
    "H2":"h2",
    "H3":"h3",
    "H4":"h4",
    "H5":"h5",
    "H6":"h6",
    
    "AddList":"L+",
    "Bullet":"*-",
    "Enum":"1-",
    "Todo":"[]-",
    
    "Undo":"un",
    "Redo":"re",

    
    "Code":"</>",
    "Line":"---",

    "Rename":"rename",
    "Rearrange":"move",
    
    "Yes":"yes",
    "No":"no",

    "Up": "up",
    "Down": "down",
  };



export { Icons, Icon, IconO, IconRed, IconBlue, IconGreen}