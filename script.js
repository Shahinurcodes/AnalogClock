const numberHours= document.querySelector(".hour-numbers");
const barSeconds=document.querySelector(".second-bars");

const numberofElement=[];
const barElement=[];

for(let i=1;i<=12;i++){
    numberofElement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    );
}

numberHours.insertAdjacentHTML("afterbegin",numberofElement.join(""));

for(let i=1;i<=60;i++){
    barElement.push(
        `<span style="--index:${i};"><p></p></span>`
    );
}
barSeconds.insertAdjacentHTML("afterbegin",barElement.join(""));

const hourHand= document.querySelector('.common.hours');
const minuteHand=document.querySelector('.common.minutes');
const secondHand=document.querySelector('.common.seconds');


function updateClock(){
let now= new Date();

let hours=now.getHours();
let minutes=now.getMinutes();
let seconds=now.getSeconds();

let hourDeg=hours*30+minutes*0.5;
let minuteDeg=minutes*6;
let secondDeg=seconds*6;

hourHand.style.transform=`rotate(${hourDeg}deg)`;
minuteHand.style.transform=`rotate(${minuteDeg}deg)`;
secondHand.style.transform=`rotate(${secondDeg}deg)`;
}
updateClock();
setInterval(updateClock,1000);


