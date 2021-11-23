// Nav bar
let navbars=document.querySelector(".navbar");
let navbtns=document.querySelector(".navprobtn");
let navitems=document.querySelectorAll(".navitem");
console.log(navitems[0]);
navbtns.addEventListener("click",()=> {
  navbars.classList.toggle("active");

  navitems.forEach((navitem)=>{
    navitem.classList.toggle("active");
  })
})
//welcome
let sign=window.prompt("What is your name");
let welmar = document.querySelector(".welcome-first marquee");
welmar.innerHTML="Hello "+sign.toUpperCase();

let containerlogins=document.querySelector(".container-login");
let containerfoods=document.querySelector(".container-food");
let containercloths=document.querySelector(".container-cloth");
let containerits=document.querySelector(".container-it");
let containerfeedbacks=document.querySelector(".container-feedback");

let navlogins=document.getElementById("navlogin");
let navfoods=document.getElementById("navfood");
let navcloths=document.getElementById("navcloth");
let navits=document.getElementById("navit");
let navfeedbacks=document.getElementById("navfeedback");

let cookies=document.querySelector(".cookie");
navitems[0].addEventListener("click",()=> {
  cookies.classList.add("abc");
  containercloths.classList.remove("active");
  containerfoods.classList.remove("active");
  containerfeedbacks.classList.remove("active");
  containerits.classList.remove("active");
  containerlogins.classList.toggle("active");
  navitems[0].addEventListener("mouseenter",()=>{
    containerlogins.classList.remove("active");
  })
})
navitems[1].addEventListener("click",()=> {
  cookies.classList.add("def");
  containerfoods.classList.remove("active");
  containerfeedbacks.classList.remove("active");
  containerits.classList.remove("active");
  containerlogins.classList.remove("active");
  containercloths.classList.toggle("active");
  navitems[1].addEventListener("mouseenter",()=>{
    containercloths.classList.remove("active");
  })
})
navitems[2].addEventListener("click",()=>{
  cookies.classList.add("hij");
  containercloths.classList.remove("active");
  containerfoods.classList.remove("active");
  containerfeedbacks.classList.remove("active");
  containerlogins.classList.remove("active");
  containerits.classList.toggle("active");
  navitems[2].addEventListener("mouseenter",()=>{
    containerits.classList.remove("active");
  })
});
navitems[3].addEventListener("click",()=>{
  cookies.classList.add("def");
  containercloths.classList.remove("active");
  containerfeedbacks.classList.remove("active");
  containerlogins.classList.remove("active");
  containerits.classList.remove("active");
  containerfoods.classList.toggle("active");
  navitems[3].addEventListener("mouseenter",()=>{
    containerfoods.classList.remove("active");
  })
})
navitems[4].addEventListener("click",()=>{
  cookies.classList.add("abc");
  containercloths.classList.remove("active");
  containerfoods.classList.remove("active");
  containerlogins.classList.remove("active");
  containerits.classList.remove("active");
  containerfeedbacks.classList.toggle("active");
  navitems[4].addEventListener("mouseenter",()=>{
    containerfeedbacks.classList.remove("active");
  })
})

const labels=document.querySelectorAll(".login-last label");

labels.forEach((label)=>{

  label.innerHTML=label.innerText
      .split("")
      .map((letter,index)=>
          `<span style="transition-delay: ${index * 50}ms">${letter}</span>`).join("")
})

//change login signup
let changelogins=document.querySelector('.change-login');
let contentsignups=document.querySelector('.content-signup');
let contentlogins=document.querySelector('.content-login');
let changesignups=document.querySelector(".change-signup");

changelogins.addEventListener('click',()=>{
  contentsignups.style.display='block';
  contentlogins.style.display='none';
})
changesignups.addEventListener("click",()=>{
  contentsignups.style.display="none";
  contentlogins.style.display="flex"
})
const quizdata =[

  {
    question:"Are you satisfied with Products?",
    a:"Very Good",
    b:"Good",
    c:"Simple",
    d:"Bad",
    e:"Very Bad",
    correct:"b"
  },

  {
    question:"Are you satisfied with Prices?",
    a:"Very Good",
    b:"Good",
    c:"Simple",
    d:"Bad",
    e:"Very Bad",
    correct:"a"
  },

  {
    question:"Are you satisfied with Web Design?",
    a:"Very Good",
    b:"Good",
    c:"Simple",
    d:"Bad",
    e:"Very Bad",
    correct:"b"
  }
]
const quizel=document.getElementById("quiz");
const questions=document.getElementById("question");
const answerels=document.querySelectorAll(".answer");

const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const e_text=document.getElementById("e_text");

let currentquiz=0;
// console.log(answers);

function loadquiz(){
  unselected();
  const currentquizdata = quizdata[currentquiz];

  questions.innerText=currentquizdata.question;
  a_text.innerText=currentquizdata.a;
  b_text.innerText=currentquizdata.b;
  c_text.innerText=currentquizdata.c;
  d_text.innerText=currentquizdata.d;
  e_text.innerText=currentquizdata.e;

}
loadquiz();

function unselected(){
  answerels.forEach((answerel)=> answerel.checked=false )
}
function getselected(){
  answerels.forEach((answerel)=>{
    if(answerel.checked){
      answer=answerel.id;
    }
  })
  return answer;
}


let submitbtn =document.getElementById("quiz-btn");

submitbtn.addEventListener("click",()=>{

// console.log(getselected());

  let answer=getselected();

  if (answer){
    currentquiz++;
    if(currentquiz<quizdata.length){
      loadquiz();
    }else{
      quizel.innerHTML=`
            <div class="emoji-pro">
            <h2>Thank for giving feedback</h2>
            <div class="emoji"></div>
     
            <h2>Stay Safe and Wear Mask</h2>
</div>
            `
    }
  }
})

// console.log(starss);

let cookie=document.querySelectorAll(".cookie a");
cookie[9].style.padding="0";
















