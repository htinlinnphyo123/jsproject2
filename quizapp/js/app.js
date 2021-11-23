const quizdata =[

    {
        question:"What does CSS stands for?",
        a:"Central Style Sheet",
        b:"Cascading Style Sheet",
        c:"Cascading simple sheet",
        d:"Century System software",
        e:"Control style sheet",
        correct:"b"
    },

    {
        question:"What does HTML stands for?",
        a:"Hypertext Markup Language",
        b:"Hypertext Machine Language",
        c:"Hypertext Markdown Language",
        d:"Hyper technology modern Language",
        e:"hyper market language",
        correct:"a"
    },

    {
        question:"Which year was javascript launched?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"1990",
        e:"None of above",
        correct:"b"
    },

    {
        question:"Which language run in a browser",
        a:"Java",
        b:"C",
        c:"Python",
        d:"Javascript",
        e:"Php",
        correct:"d"
    }

]
// console.log(quizdata);

const quizel=document.getElementById("quiz");
const questions=document.getElementById("question");
const answerels=document.querySelectorAll(".answer");

const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const e_text=document.getElementById("e_text");

let currentquiz=0;
let score=0;
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
    let answer;

    answerels.forEach((answerel)=>{
        if(answerel.checked){
            answer=answerel.id;
        }
    })
    return answer;
}


const submitbtn =document.getElementById("submit");

submitbtn.addEventListener("click",()=>{

// console.log(getselected());

    let answer=getselected();

    if (answer){

        if(answer === quizdata[currentquiz].correct){
            score++;
        }

        currentquiz++;
        if(currentquiz<quizdata.length){
            loadquiz();
        }else{
            quizel.innerHTML=`
            <h2>You answered at ${score} / ${quizdata.length} questions</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }



})
