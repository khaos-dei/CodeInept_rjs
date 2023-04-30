import {days} from '../constants/DateConsts';
import './m_prog_line.css';

function first_day(color){
    let content = [];
    content.push(<polygon points="0,0 4,0 4,1 5,2 4,3 4,4 0,4" fill={color} className='DayBlocks'/>);
    content.push(<text x={2} y={2.1} fill="white" fontSize={2} textAnchor='middle' dominant-baseline="middle" fontWeight='Bold'>1</text>);
    return (content);
}

function middle_days(start_x, color){
    let content = [];
    var day = start_x/5+1;
    var pnts = start_x+",0 "+ (start_x+4)+",0 "+ (start_x+4)+",1 "+ (start_x+5)+",2 "+ (start_x+4)+",3 " +(start_x+4)+",4 "+start_x+",4 "+start_x+",3 "+(start_x+1)+",2 "+start_x+",1";
    content.push(<polygon points={pnts} fill={color} className='DayBlocks'></polygon>);
    content.push(<text x={start_x+2.4} y={2.1} fill="white" fontSize={2} textAnchor='middle' dominant-baseline="middle" fontWeight='Bold'>{day}</text>);
    return (content);
}

function last_day(start_x,color){
    let content = [];
    var day = start_x/5+1;
    var pnts = start_x+",0 "+ (start_x+4)+",0 "+(start_x+4)+",4 "+start_x+",4 "+start_x+",3 "+(start_x+1)+",2 "+start_x+",1"; 
    content.push(<polygon points={pnts} fill={color} className='DayBlocks'/>);
    content.push(<text x={start_x+2.4} y={2.1} fill="white" fontSize={2} textAnchor='middle' dominant-baseline="middle" fontWeight='Bold'>{day}</text>);
    return (content);
}

function line_day(total, current){
    let content = [];
    let color_pre = "gray";
    let color_of = "magenta";
    let color_post = "pink";
    var color = color_pre;
    if (current===1){
        content.push(first_day(color_of))
        color = color_post;
    }else{
        content.push(first_day(color))
    }
    for (let i = 1; i < total-1; i++) {
        if(i+1===current){
            content.push(middle_days(i*5,color_of))
            color = color_post;
        }else{
            content.push(middle_days(i*5,color))
        }
    }
    if (current === total) {
        content.push(last_day((total - 1) * 5, color_of)) 
    } else {
        content.push(last_day((total - 1) * 5, color)) 

    }
    
    return (content);
}


function MonthProgressLine(props) {
    var year = props.datentime.getYear();
    var month = props.datentime.getMonth();
    var date = props.datentime.getDate();
    if((year % 4===0)&&(month===1)){month=12};//leap year
    var viewport = "-0.5 0 "+((days[month])*5)+" 4";
    return (
        <div className='Month_Progress_Line'>
            <svg height="90" viewBox={viewport}>
                {line_day(days[month], date)}
            </svg>
        </div>
    );
  }
  
  export default MonthProgressLine;