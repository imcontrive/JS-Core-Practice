const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360 + 270);
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    console.log(seconds);

    const minutes = now.getMinutes();
    const minuteDegrees = (((minutes / 60) * 360 ) + 270);
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    console.log(minutes);

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360 + 270);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log(hour);
}

setInterval(setDate, 1000);
