//Define variables
const startButtonElement = document.getElementById('start_btn')
const questionContainer = document.getElementById('quiz')
const questionName = document.getElementById('question_name')
const question = document.getElementById('question')
const answerButtons = document.getElementById('answer_buttons')

var userStats = [
        0, //size 1-6
        0, //price 1-5
        0, //OLED
        0, //QLED
]

//functions

//start button function
startButtonElement.addEventListener("click", function startQuizEvent() {
    startButtonElement.style.visibility = 'hidden';
    questionContainer.style.visibility = 'visible';
    console.log("success")
})
//create button function
function createButton(innerTxt) {
   var div = document.createElement('div');
   div.classList.add('row', 'p-1');
   const button = document.createElement('button');
   button.classList.add('btn', 'quiz_btn');
   button.innerText = innerTxt
   div.appendChild(button)
   answerButtons.appendChild(div)
   
}

//show question function
function showQuestion1(qs) {
    createButton('43"')

}

//reset state
function resetState() {
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}


let question_number = 0
//next question
next.addEventListener("click", function() {
    buttonPressed()
    resetState()
    question_number++
    console.log(question_number)
    if (question_number === 1) {
        showQuestion2()
    } else if (question_number === 2){
        showQuestion3()
    } else if (question_number === 3){
        showQuestion4()
    } else if (question_number === 4){
        showQuestion5()
    }
})

//questions array

const questions_array = [
    {question: 'What size TV do you need?',
    buttonElements: [
        {text: '43"'},
        {text: '50"'},
        {text: '55"'},
        {text: '65"'},
        {text: '75"'},
        {text: '85"'},
    ]
    }
]
