

window.onload = function(){
    const get_day_of_time = (d1, d2) => {
    let ms1 = d1.getTime();
    let ms2 = d2.getTime();
    return Math.ceil((ms2 - ms1) / (24*60*60*1000));
};

let birthday = new Date('2023-9-26');
console.log(birthday.toUTCString());
//start
let today = new Date();
console.log(today.toUTCString());
//now

let time = get_day_of_time(birthday,today)
console.log(time);
const days = document.getElementById("days");
days.innerHTML="Yêu em bé "+time+" ngày";
}