let hour = document.querySelector('.h');
let min = document.querySelector('.m');
let sec = document.querySelector('.s');

setInterval(() => {
    let sacond = new Date().getSeconds();
    let munite = new Date().getMinutes();
    let hours = (new Date().getHours());
    sec.style.transform = `rotate(${clockrole(sacond)}deg)`
    min.style.transform = `rotate(${clockrole(munite)}deg)`
    hour.style.transform = `rotate(${((hours * 60) * 0.5)}deg)`
},1000)

function clockrole(val){
    return val * 6;
}