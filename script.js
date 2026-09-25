const questions=[
    {
        question: "What is the capital of France?",
        answers:[
            {text:"London",correct:false},
            {text:"Berlin",correct:false},
            {text:"Paris ",correct:true},
            {text:"Madrid",correct:false},
        ]
    },
    {
     question:  "Which planet is known as the Red Planet?",
        answers:[
            {text:" Venus",correct:false},
            {text:"Mars",correct:true},
            {text:"Jupiter ",correct:false},
            {text:"Saturn",correct:false},
        ]   
    },
    {
    question:  "Who wrote the play Romeo and Juliet?",
        answers:[
            {text:"William Shakespeare",correct:true},
            {text:"Charles Dickens",correct:false},
            {text:"Mark Twain",correct:false},
            {text:"Jane Austen",correct:false},
        ]   
    },
    {
        question:  "Which ocean is the largest on Earth?",
        answers:[
            {text:"Atlantic Ocean",correct:false},
            {text:"Indian Ocean",correct:false},
            {text:"Pacific Ocean",correct:true},
            {text:"Arctic Ocean",correct:false},
        ]   
    },
    {
        question:  "What is the powerhouse of the cell?",
        answers:[
            {text:"Nucleus",correct:false},
            {text:"Mitochondria",correct:true},
            {text:"Ribosome",correct:false},
            {text:"Cytoplasm",correct:false},
        ]   
    },
    {
        question:  "In which year did India gain independence?",
        answers:[
            {text:"1945",correct:false},
            {text:"1947",correct:true},
            {text:"1950",correct:false},
            {text:"1952",correct:false},
        ]   
    },
    {
        question:  "How many continents are there in the world?",
        answers:[
            {text:"5",correct:false},
            {text:"6",correct:false},
            {text:"7",correct:true},
            {text:"8",correct:false},
        ]   
    },
    {
        question:  "What is the chemical symbol for Iron?",
        answers:[
            {text:"Ir",correct:false},
            {text:"In",correct:false},
            {text:"Fe",correct:true},
            {text:"F",correct:false},
        ]   
    },
    {
        question:  "Who developed the theory of relativity?",
        answers:[
            {text:"Isaac Newton",correct:false},
            {text:"Albert Einstein",correct:true},
            {text:"Galileo Galilei",correct:false},
            {text:"Marie Curie",correct:false},
        ]   
    },
    {
        question:  "How many bones are there in an adult human body?",
        answers:[
            {text:"186",correct:false},
            {text:"198",correct:false},
            {text:"206",correct:true},
            {text:"214",correct:false},
        ]   
    },
];
const questionElement=document.getElementById("Question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let Score=0;

function startQuiz(){
    currentQuestionIndex=0;
    Score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn= e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        Score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled="true";
     })
    
    nextButton.style.display="block";
}

function showscore(){
    resetState();
    questionElement.innerHTML=`you scored ${Score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showscore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();

