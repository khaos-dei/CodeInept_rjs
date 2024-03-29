import {dates, weekdays, months} from '../constants/DateConsts';
import './date_page.css';

function DatePage(props) {
    //var year = props.datentime.getHours();//wlb func input
    var month = months[props.datentime.getMonth()];
    var weekday = weekdays[props.datentime.getDay()];
    var date = dates[props.datentime.getDate()-1];
    return (
        <div className='Calendar_Page'>
            <div className='Decorative_Line'></div>
            <div className='Day'>{date}</div>
            <div className='Month'>{month}</div>
            <div className='Weekday'>{weekday}</div>
            <div className='Year'>2023</div>
        </div>
    );
  }
  
  export default DatePage;