import moment from 'moment'

window.onload = function(){
    // Get the start date (September 16, 2022)
    const startDate = moment('2023-09-26');
    
    // Get the current date
    const currentDate = moment();
    
    // Calculate the difference in days
    const time = currentDate.diff(startDate, 'days');
days.innerHTML="Yêu em bé "+time+" ngày";
}