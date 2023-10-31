const number=document.querySelector(".guess")
const btn_Check=document.querySelector(".check")
const btn_Again=document.querySelector(".again")
const numb=document.querySelector(".number")
const msg=document.querySelector(".message")
const scr=document.querySelector(".score")
const hgScr=document.querySelector(".highscore")


let r_num=Math.trunc(Math.random()*20)+1;
console.log(r_num);

let score = 20;
let highscore =  0;

const reduceScore = function(message){

    msg.textContent = message
    if (score>0) {
        score--
        scr.textContent = score
        
    }else{
        alert("You lost ,press again to restart")
    }

}

// Math.trunc: is used to round down a number 
// Math.random:is used to pick a number at random from 0-0.9999 it won't reach 1


btn_Check.addEventListener("click",function(){
    const inputValue = number.value
    // console.log(inputValue);

    if (inputValue < r_num) {

        reduceScore("Too Low")
        
    } else if (inputValue > r_num) {

        reduceScore("Too High")

    }else{

        msg.textContent=("Correct")
        document.body.style.background="green"

        // if we called the body using DOM at first,
        //  we just call d name given to it  

        if (score > highscore)
        highscore = score
        hgScr.textContent = highscore

    }

})


btn_Again.addEventListener("click",function(){
    r_num=Math.trunc(Math.random()*20)+1;
    console.log(r_num);
    score=20
    scr.textContent=score
    document.body.style.background="#222"
    msg.textContent="Start Guessing..."
    number.value=""

})

