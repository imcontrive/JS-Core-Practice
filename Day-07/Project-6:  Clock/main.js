// const secondHand = document.querySelector('.second');
// const minuteHand = document.querySelector('.minute');
// const hourHand = document.querySelector('.hour');
// function setDate() {
//     const now = new Date();
//     const seconds = now.getSeconds();
//     const secondDegrees = ((seconds / 60) * 360 + 270);
//     secondHand.style.transform = `rotate(${secondDegrees}deg)`;
//     console.log(seconds);

//     const minutes = now.getMinutes();
//     const minuteDegrees = (((minutes / 60) * 360 ) + 270);
//     minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
//     console.log(minutes);

//     const hour = now.getHours();
//     const hourDegrees = ((hour / 12) * 360 + 270);
//     hourHand.style.transform = `rotate(${hourDegrees}deg)`;
//     console.log(hour);
// }

// setInterval(setDate, 1000);

const seconds = document.querySelector('.seconds-hand');
const minutes = document.querySelector('.minutes-hand');
const hours = document.querySelector('.hours-hand');
const hr = document.querySelector('.hr');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');


function setTime(){
  const now = new Date(),
    second = now.getSeconds(),
    minute = now.getMinutes(),
    hour = now.getHours(),
    secondDegree = ((second/60) * 360) + 90,
    minuteDegree = ((minute/60) * 360) + 90,
    hourDegree = ((hour/12) * 360) + 90;

    //watch view here.......
    hr.innerHTML = hour;
    min.innerHTML = minute;
    sec.innerHTML = second;
    //console.log(second);
    //clock view here........
    seconds.style.transform = `rotate(${secondDegree}deg)`;
    minutes.style.transform = `rotate(${minuteDegree}deg)`;
    hours.style.transform = `rotate(${hourDegree}deg)`;
    //console.log(second, minute, hour);

}
setInterval(setTime, 1000);
