

function write_date(date){
    const d = (date.getDate()+"").padStart(2, '0')
    const m = (date.getMonth()+1+"").padStart(2, '0')
    return (d + "." + m+ "." + date.getFullYear())
}

export default write_date;