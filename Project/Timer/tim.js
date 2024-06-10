let hrs = 0;
let min = 0;
let sec = 0;
let disph = document.getElementById("hrs")
let dispm = document.getElementById("min")
let disps = document.getElementById("sec")
let timer = null;
let dispst = document.getElementById("st")

function stw(){
    hrs = parseInt(hrs);
    min = parseInt(min);
    sec++;
    if(sec == 60){
        sec = 0;
        min++;
        if(min == 60){
            min = 0;
            hrs++;
        }
    }
    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    disph.value = hrs;
    dispm.value = min;
    disps.value = sec;
}
function reset(){
    clearInterval(timer);
    disph.value = "00";
    dispm.value = "00";
    disps.value = "00";
    hrs = 0;
    min = 0;
    sec = 0;
    timer = null;
    dispst.value = "Start";
}
function strt(){
    if(timer != null){
        clearInterval(timer);
        timer = null;
        dispst.value = "Resume";
    }
    else{
        dispst.value = "Stop";
        timer = setInterval(stw, 1000);
    }
}