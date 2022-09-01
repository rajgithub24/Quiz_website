const quizDB =[
    {
        question:"Q1: What is the full form of HTML?",
        a:" Hello to my land ",
        b:" hello text markup language",
        c:"Hypertext markup language",
        d: "hyper test markup lang",
        ans: "ans3"

    },
    {
        question:"Q2: What is the full form of css?",
        a:" Hello to my land ",
        b:" hello text markup language",
        c:"Style sheet cascading",
        d: "hyper test markup lang",
        ans: "ans3"

    },
    {
        question:"Q3: What is the full form of Sql?",
        a:" Structured query language ",
        b:" hello text markup language",
        c:"Hypertext markup language",
        d: "hyper test markup lang",
        ans: "ans1"

    },
    {
        question:"Q4: What is the full form of RAM?",
        a:" Hello to my land ",
        b:" hello text markup language",
        c:"Random acces memory",
        d: "hyper test markup lang",
        ans: "ans3"

    },
    {
        question:"Q5: What is the let ,const ,and var?",
        a:" Hello to my land ",
        b:" hello text markup language",
        c:"Data Type in javascript",
        d: "hyper test markup lang",
        ans: "ans3"
  
    }
];
const question = document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers= document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');

let questionCount=0;
let score=0;

const loadQuestion = ()=>{
    const questionlist= quizDB[questionCount];

    question.innerText= questionlist.question;

    option1.innerText=questionlist.a;
    option2.innerText=questionlist.b;
    option3.innerText=questionlist.c;
    option4.innerText=questionlist.d;

}

loadQuestion();

const getCheckAnswer = ()=>{
    let answer;
   answers.forEach((curAnsElem)=>{
       if(curAnsElem.checked)
       {
           answer = curAnsElem.id;
       }
   });
   return answer;



};

const deselectAll = ()=>{
    answers.forEach((curAnsElem)=> curAnsElem.checked=false);

}

submit.addEventListener('click',()=>{
    const checkanswer= getCheckAnswer();
    
    console.log(checkanswer);
    if(checkanswer === quizDB[questionCount].ans){
        score++;
    };
    questionCount++;

    deselectAll();


    if(questionCount <quizDB.length)
    {
        loadQuestion();
    }
    else
    {
        showScore.innerHTML = `
        <h3>your scored ${score}/${quizDB.length} </h3>
        <button class ="btn" onclick ="location.reload()"> Play Again </button>
        `; 

        showScore.classList.remove('scoreArea');

    }



});
