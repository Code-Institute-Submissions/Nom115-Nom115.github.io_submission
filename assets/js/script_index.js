//Define variables
const startButtonElement = document.getElementById('start_btn')
const questionContainer = document.getElementById('quiz')
const questionName = document.getElementById('question_name')
const question = document.getElementById('question')
const answerButtons = document.getElementById('answer_buttons')

let userStats = {       'sizing': 0, //size 1-6
'price': 0, //price 1-5
'OLED': 0, //OLED
'QLED': 0, //QLED
}

//functions

//start button function
startButtonElement.addEventListener("click", function startQuizEvent() {
    startButtonElement.style.visibility = 'hidden';
    questionContainer.style.visibility = 'visible';
    questionArray(answer_one)
    console.log("success")
    console.log(questionNumber)
})

let questionNumber = 0
//iterate through question array
function questionArray(answer) {
    if (questionNumber === 0) {
        answer = answer_one;
        questionName.innerText = "Question 1";
        question.innerText = some_questions[0];
    } else if (questionNumber === 1) {
        answer = answer_two;
        questionName.innerText = "Question 2";
        question.innerText = some_questions[1];
    } else if (questionNumber === 2) {
        answer = answer_three;
        questionName.innerText = "Question 3";
        question.innerText = some_questions[2];
    } else if (questionNumber === 3) {
        answer = answer_four;
        questionName.innerText = "Question 4";
        question.innerText = some_questions[3];
    }
    for (let key in answer){
        createButton(answer[key]);
    }
    
    questionNumber++
}
//create button function
function createButton(innerTxt) {
   let div = document.createElement('div');
   div.classList.add('row', 'p-1');
   const button = document.createElement('button');
   button.classList.add('btn', 'quiz_btn');
   button.innerText = innerTxt
   button.setAttribute("onclick", "evalQuestion"+questionNumber+"(this.value)");
   button.setAttribute("value", innerTxt);
   div.appendChild(button)
   answerButtons.appendChild(div)
}

function evalQuestion0(answer) {
    console.log("very nice")
    console.log(answer)
    switch (answer) {
        case "1 ft":
            userStats['sizing'] +=1;
            resetState()
            questionArray()
            break;
        case "2 ft":
            userStats['sizing'] +=2;
            resetState()
            questionArray()
            break;
        case "3 ft":
            userStats['sizing'] +=3;
            resetState()
            questionArray()
            break;
        case "4 ft":
            userStats['sizing'] +=4;
            resetState()
            questionArray()
            break;
        case "4 ft+":
            userStats['sizing'] +=5;
            resetState()
            questionArray()
            break;
        default:
            break;
    }
    console.log(userStats['sizing']);
}

function evalQuestion1(answer) {
    console.log("very nice")
    console.log(answer)
    switch (answer) {
        case "Once a week":
            userStats['price'] +=1;
            resetState()
            questionArray()
            break;
        case "Three times a week":
            userStats['price'] +=2;
            resetState()
            questionArray()
            break;
        case "Five times a week":
            userStats['price'] +=3;
            resetState()
            questionArray()
            break;
        case "Seven times a week":
            userStats['price'] +=4;
            resetState()
            questionArray()
            break;
        default:
            break;
    }
    console.log(userStats['price']);
}



//reset state
function resetState() {
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}





//questions array
const some_questions = ['How far away do you sit from your TV?', 
'How much TV do you watch?',  
'How bright is the room?',
'What content do you watch?',
]

//answer
const answer_one = {"a": '1 ft', "b": '2 ft', "c": '3 ft', "d": '4 ft', "e": '4 ft+',}
const answer_two = {"a": "Once a week", "b": "Three times a week", "c": "Five times a week", "d": "Seven times a week",}
const answer_three = {"a": 'No light', "b": 'Little light', "c": 'Medium light', "d": 'Lots of light', "e": 'The sun'}
const answer_four = {"a": 'Movies/Series', "b": 'Sports', "c": 'Gaming', "d": 'Cable TV',}



