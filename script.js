const hourel =document.getElementById("hour");
const minutesel = document.getElementById("minutes");
const secondsel = document.getElementById("seconds");
const  ampmel = document.getElementById("ampm");

function updateclock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"; //Initialize ampm to "AM" (Assuming the default is AM)

    if (h>12){
        h = h - 12;
        ampm = "PM";
    }

    h= h<10 ? "0" + h:h;
    m= m<10 ? "0" + m:m;
    s= s<10 ? "0" + s:s;
    
    hourel.innerText= h;
    minutesel.innerText= m;
    secondsel.innerText= s;
    ampmel,(innerText= ampm);
    setTimeout(()=> {
        updateclock()
    },1000)
}

updateclock()