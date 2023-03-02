var seconds=document.getElementById('seconds');
var miliseconds=document.getElementById('miliseconds');
var start=document.getElementById('start');
var stop=document.getElementById('stop');
var reset=document.getElementById('reset');
var sec=0;
var milisec=0;
var timeInterval;

// timer function using short hand method ok lekin 
const timer=()=>{
    milisec++;

    if(milisec<9){
        miliseconds.innerHTML="0"+milisec;
    }

    if(milisec>9){
        miliseconds.innerHTML=milisec;
    }

    if(milisec>99){
        sec++;
        seconds.innerHTML="0"+sec;
        milisec=0;
        miliseconds.innerHTML="0"+0;
    }

    if(sec>9){
        seconds.innerHTML=sec;
        
    }

}

//start button

start.addEventListener('click',()=>{
    timeInterval=setInterval(timer,10);
})

//stop button

stop.addEventListener('click',()=>{
    clearInterval(timeInterval);
})

//reset 

reset.addEventListener('click',()=>{
    clearInterval(timeInterval);
    sec="00";
    milisec="00";
    seconds.innerHTML=sec;
    miliseconds.innerHTML=milisec;

})

