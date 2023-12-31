const questions=[
    {
        question:"Which sport is India's national game?",
        answers:[
            {text: "Cricket",correct:false},
            {text: "Hockey",correct:true},
            { text: "Football",correct:false},
            {text: "Badminton",correct:false},
        ]
    },
    {
        question:"Who is the only Indian cricketer to have scored two triple centuries in Test cricket?",
        answers:[
            {text: "Sachin Tendulkar",correct:false},
            {text: "Rahul Dravid",correct:false},
            { text: "Virender Sehwag",correct:true},
            {text: "Virat Kohli",correct:false},
        ]
    },
    {question:"Which Indian athlete won a gold medal in the javelin throw at the 2020 Tokyo Olympics?",
        answers:[
            {text: "P. V. Sindhu",correct:false},
            {text: "Mary Kom",correct:false},
            { text: "Neeraj Chopra",correct:true},
            {text: "Saina Nehwal",correct:false},
        ]
    },
    {
        question:"In which year did India win its first Cricket World Cup?",
        answers:[
            {text: "1983",correct:true},
            {text: "1996",correct:false},
            { text: "2011",correct:false},
            {text: "2007",correct:false},
        ]
    },
    {
        question:"Who is the first Indian woman to win an Olympic medal in Badminton?",
        answers:[
            {text: "Saina Nehwal",correct:false},
            {text: "Jwala Gutta",correct:false},
            { text: "P. V. Sindhu",correct:true},
            {text: "Ashwini Ponnappa",correct:false},
        ]
    },
    {
        question:"Which Indian cricketer has scored the most international centuries?",
        answers:[
            {text: "Sachin Tendulkar",correct:true},
            {text: "Virat Kohli",correct:false},
            { text: "Rahul Dravid",correct:false},
            {text: "Sunil Gavaskar",correct:false},
        ] 
    },
    {
        question:"Who is the first Indian to win a medal at the Winter Olympics?",
        answers:[
            {text: "Shiva Keshavan",correct:true},
            {text: "Anjali Bhagwat",correct:false},
            { text: "Vijay Kumar",correct:false},
            {text: "Abhinav Bindra",correct:false},
        ]  
    },
    {
        question:"Which Indian city hosted the 2010 Commonwealth Games?",
        answers:[
            {text: "New Delhi",correct:true},
            {text: "Mumbai",correct:false},
            { text: "Kolkata",correct:false},
            {text: "Chennai",correct:false},
        ] 
    },
    {
        question:"Which Indian boxer is nicknamed Magnificent Mary and has won multiple World Championships?",
        answers:[
            {text: "Sarita Devi",correct:false},
            {text: "M. C. Mary Kom",correct:true},
            { text: "Pinki Rani",correct:false},
            {text: "Nikhat Zareen",correct:false},
        ] 
    },
    {
        question:"Who is the first Indian to win a medal at the Paralympic Games?",
        answers:[
            {text: "Devendra Jhajharia",correct:false},
            {text: "Deepa Malik",correct:false},
            { text: "Mariyappan Thangavelu",correct:true},
            {text: "Avani Lekhara",correct:false},
        ] 
    }
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
let currentQuestionIndex=0;
let score = 0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+ 1;
    questionElement.innerHTML = questionNo +". " +currentQuestion.
    question;

    currentQuestion.answers.forEach(answer =>{
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
     if(answer.correct){
        button.dataset.correct=answer.correct;
     }
     button.addEventListener("click",selectAnswer);
});
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const iscorrect=selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.Disabled = "true";
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`your scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="play again";
    nextButton.style.display="block";
}

function handelNextButn(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length) {
        handelNextButn();
    }else{
        startQuiz();
    }
});

startQuiz();