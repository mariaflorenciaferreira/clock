
const secondHand=document.querySelector('.second-hand')
const hourHand=document.querySelector('.hour-hand')
const minHand=document.querySelector('.min-hand')


function setDate(){
    const now= new Date();
    const seconds= now.getSeconds();
    const secondDegrees= ((seconds/60)*360)+90;
    secondHand.style.transform=`rotate(${secondDegrees}deg)`

    const hours= now.getHours();
    const hourDegrees= ((hours/12)*360)+90;
    hourHand.style.transform=`rotate(${hourDegrees}deg)`

    const mins= now.getMinutes();
    const minDegrees= ((mins/60)*360)+90;
    minHand.style.transform=`rotate(${minDegrees}deg)`

}

function setCalendar(){

    const today=new Date();

    const week = ["DOMINGO","LUNES","MARTES","MIÉRCOLES","JUEVES","VIERNES","SÁBADO"];

    
    const weekday=week[today.getDay()];
    const day= today.getDate();
    const month= (today.getMonth())+1;
    const year= today.getFullYear();

    document.querySelector('.weekday').innerHTML= weekday;
    document.querySelector('.day').innerHTML= day;
    document.querySelector('.month').innerHTML= `/${month}`;
    document.querySelector('.year').innerHTML=`/${year}`;
}

setInterval(setDate,1000);
setCalendar();




