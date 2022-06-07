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
    questionArray()
    console.log("success")
})

const questionNumber = 0
//iterate through question array
function questionArray() {
    Object.entries(questions_array).forEach(([key, value]) => {
        createButton(value)
    })
}
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
