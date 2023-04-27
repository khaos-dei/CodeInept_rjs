import './digi_clck.css';

function DigiClock(props) {
    var hrs = props.datentime.getHours();//wlb func input
    hrs = ((hrs < 10) ? '0' + hrs : hrs);//yes, two lines, but avoid double .getHours() call
    var mins = props.datentime.getMinutes();//wlb func input
    mins = ((mins < 10) ? '0' + mins : mins);//yes, two lines, but avoid double .getHours() call
    var time = hrs + ':' + mins;
    return (
     <div className='a-box'>{time}</div>
    );
  }

  export default DigiClock;