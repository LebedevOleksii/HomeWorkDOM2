
const seconds = document.querySelector('#seconds');
const minutes = document.querySelector('#minutes');
const start = document.querySelector('#start');
const stop = document.querySelector('#pause');
const reset = document.querySelector('#reset');
let timeList = document.querySelector('#time-list');
let timerID;
let numberMinutes;
let numberSeconds;
let arr = [];

function timer(){
     timerID = setInterval (function (){
        numberMinutes = parseInt(minutes.innerText, 10);
        numberSeconds = parseInt(seconds.innerText, 10) + 1;
        if(seconds.innerText < 59){
        seconds.innerText = helper(numberSeconds);
        } else if (seconds.innerText == 59){
            seconds.innerText = helper(0);
            minutes.innerText = helper(numberMinutes + 1);
        }
    },1000);
};

function helper(number){
    if(number<10){
    number = "0" + number;
    } 
    return number
};

class Time{
    constructor(minute, second){
        this.minute = minute;
        this.second = second;
    }
}

function remembersTime(seconds, minutes){
    const time = new Time(seconds, minutes);
    timeList.innerText += ` Time: (00:${time.minute}:${time.second})`
}



start.addEventListener('click', function(){
    if(seconds.innerText == 0 && minutes.innerText == 0){
        timer();
    } else {
        remembersTime(helper(numberMinutes),helper(numberSeconds));
    }
        
});

stop.addEventListener('click', function(){
    clearInterval(timerID)
});

reset.addEventListener('click', function(){
    seconds.innerText = helper(0);
    minutes.innerText = helper(0);
    timeList.innerText =""
});


