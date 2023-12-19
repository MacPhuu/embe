

window.onload = function(){
    const get_day_of_time = (d1, d2) => {
    let ms1 = d1.getTime();
    let ms2 = d2.getTime();
    return Math.ceil((ms2 - ms1) / (24*60*60*1000));
};

let loveday = new Date('2023-09-26');

//start
let today = new Date();
;
//now

let time = get_day_of_time(loveday,today);

const days = document.getElementById("days");
days.innerHTML="Yêu em bé "+time+" ngày";
}