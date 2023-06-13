import './notepad.css';

function Notepad(props) {
    //var year = props.datentime.getHours();//wlb func input
    return (
        <div className='Calendar_Page1'>
            <div className='TabLine'>
                <button className='Tab'>2023</button>
                <button className='Tab'>2024</button>
                <button className='Tab'>2025</button>
                <button className='Tab'>2023</button>
                <button className='Tab'>2024</button>
            </div>
            <button className='TabUP' >V</button>
            <button className='TabDOWN'>V</button>
            <div className='Year'>2023</div>
        </div>
    );
  }
  
  export default Notepad;