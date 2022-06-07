//Define variables
const startButtonElement = document.getElementById('start_btn')
const questionContainer = document.getElementById('quiz')
const questionName = document.getElementById('question_name')
const question = document.getElementById('question')
const answerButtons = document.getElementById('answer_buttons')

let userStats = [
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
    questionArray(answer_one)
    console.log("success")
})

let questionNumber = 0
//iterate through question array
function questionArray(answer) {
    for (let key in answer){
        createButton(answer[key]);
    }
}
//create button function
function createButton(innerTxt) {
   let div = document.createElement('div');
   div.classList.add('row', 'p-1');
   const button = document.createElement('button');
   button.classList.add('btn', 'quiz_btn');
   button.innerText = innerTxt
   div.appendChild(button)
   answerButtons.appendChild(div)
   
}


//reset state
function resetState() {
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}





//questions array
const some_questions = ['What size TV do you need?', 
'What price TV are you looking to buy?', 
'How many windows in the room?', 
'Is there sun glare?',]

//answer
const answer_one = {"a": '43"', "b": '50"', "c": '55"', "d": '65"', "e": '75"', "f": '85"'}




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
    },
    {question: 'What price TV are you looking to buy?',
    buttonElements: [
        {text:"£500-£650"},
        {text:"£651-£800"},
        {text:"£800-£1100"},
        {text:"£1100+"},
    ]
    },
    {question: 'How many windows in the room?',
    buttonElements: [
        {text: '1'},
        {text:'2'},
        {text:'3'},
        {text:'3+'},
    ]
    },
    {question: 'Is there sun glare?',
    buttonElements: [
        {text:'yes'},
        {text:'no'},
    ]
    },
]
