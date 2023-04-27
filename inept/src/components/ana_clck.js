import './ana_clck.css';

function AnaClock(props) {
    var hrs = props.datentime.getHours();//wlb func input
    var mins = props.datentime.getMinutes();//wlb func input
    hrs = 180+30*hrs+mins/2; 
    mins = 180+mins*6; 
    return (
     <div className='Analogue_Clock'>
        <div className='clck-body' style={{top: 10, left: 10}}></div>
        <div className='HR-hand' style={{transform: `rotate(${hrs}deg)`}}></div>
        <div className='MN-hand' style={{transform: `rotate(${mins}deg)`}}></div>
    </div>
    );
  }

  export default AnaClock;