let scoregen = document.querySelector(".scoregen");
let scoreshow = document.querySelector(".score");
let btn1 = document.querySelector(".selector1");
let btn2 = document.querySelector(".selector2");
let btn3 = document.querySelector(".selector3");
let btn4 = document.querySelector(".selector4");
let btn5 = document.querySelector(".selector5");
let btn6 = document.querySelector(".selector6");
let showrules = document.querySelector(".showrules");

let playingscore = 0;
scoreshow.textContent = 0;
scoregen.textContent =0;
scoregen.disabled = true ;

// assigning value as a global variable
let value = 0;

btn1.addEventListener("click", () => {
  value = parseInt(btn1.getAttribute("value"));
  btn2.disabled = true;
  btn3.disabled = true;
  btn4.disabled = true;
  btn5.disabled = true;
  btn6.disabled = true;
  btn1.classList.add("sb");
  scoregen.disabled = false ;
  scoregen.textContent = 0;
});

btn2.addEventListener("click", () => {
  value = parseInt(btn2.getAttribute("value"));
  btn1.disabled = true;
  btn3.disabled = true;
  btn4.disabled = true;
  btn5.disabled = true;
  btn6.disabled = true;

  btn2.classList.add("sb");
  scoregen.disabled = false ;
  scoregen.textContent = 0;
});

btn3.addEventListener("click", () => {
  value = parseInt(btn3.getAttribute("value"));
  btn2.disabled = true;
  btn1.disabled = true;
  btn4.disabled = true;
  btn5.disabled = true;
  btn6.disabled = true;

  btn3.classList.add("sb");
  scoregen.disabled = false ;
  scoregen.textContent = 0;
});

btn4.addEventListener("click", () => {
  value = parseInt(btn4.getAttribute("value"));
  btn2.disabled = true;
  btn3.disabled = true;
  btn1.disabled = true;
  btn5.disabled = true;
  btn6.disabled = true;

  btn4.classList.add("sb");
  scoregen.disabled = false ;
  scoregen.textContent = 0;
});

btn5.addEventListener("click", () => {
  value = parseInt(btn5.getAttribute("value"));
  btn2.disabled = true;
  btn3.disabled = true;
  btn4.disabled = true;
  btn1.disabled = true;
  btn6.disabled = true;

  btn5.classList.add("sb");
  scoregen.disabled = false ;
  scoregen.textContent = 0;
});

btn6.addEventListener("click", () => {
  value = parseInt(btn6.getAttribute("value"));
  btn2.disabled = true;
  btn3.disabled = true;
  btn4.disabled = true;
  btn5.disabled = true;
  btn1.disabled = true;

  btn6.classList.add("sb");
  scoregen.disabled = false ;
  scoregen.textContent = 0;
});

const playgame = () => {
  let score = Math.floor(Math.random() * 6) + 1;
  scoregen.textContent = score;
  console.log(score);
  console.log(value);
  if (value == score) {
    playingscore = playingscore + value;
    scoreshow.textContent = playingscore;
  } else {
    playingscore = playingscore - 1;
    scoreshow.textContent = playingscore;
  }

  // dissabling button
  btn1.disabled = false;
  btn2.disabled = false;
  btn3.disabled = false;
  btn4.disabled = false;
  btn5.disabled = false;
  btn6.disabled = false;

  // removing classlsit
  btn1.classList.remove("sb");
  btn2.classList.remove("sb");
  btn3.classList.remove("sb");
  btn4.classList.remove("sb");
  btn5.classList.remove("sb");
  btn6.classList.remove("sb");

  scoregen.disabled = true ;

  if(scoreshow.textContent === "-10"){
    alert("you lose");
    scoreshow.textContent = 0;
}

if(scoreshow.textContent === "10"){
    alert("congratulations you won the game");
    scoreshow.textContent = 0;
}
  
};







scoregen.addEventListener("click", playgame);

