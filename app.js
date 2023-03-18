const box = document.querySelector('.box')
let positionX = 0
let positionY = 0
let positionZ = 449

const move = () => {
    if (positionX <= 449) {
        positionX++
        box.style.left = `${positionX}px`
        setTimeout(move,1)
    }else if (positionX >= 449 && positionY <= 449){
        positionY++
        box.style.top = `${positionY}px`
        setTimeout(move,1)
    }else if (positionX <= -449 && positionY >= -449) {
        positionX--
        box.style.right = `${positionX}px`
        setTimeout(move,1)
    } else if (positionX <= 449 && positionY >= 449) {
        positionX++
        box.style.bottom = `${positionX}px`
        setTimeout(move, 1)
    }
}
move()


let i = 0;
let t;
function start(){
    i++;
    document.getElementById('timer').innerHTML=i;
}
function functionStart(){
    i=0;
    t=setInterval('start()',1000);
}
function functionStop(){
    clearInterval(t);
}