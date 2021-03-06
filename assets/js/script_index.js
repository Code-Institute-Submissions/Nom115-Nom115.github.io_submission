//Define variables
const startButtonElement = document.getElementById('start_btn');
const questionContainer = document.getElementById('quiz');
const questionName = document.getElementById('question_name');
const question = document.getElementById('question');
const answerButtons = document.getElementById('answer_buttons');

let userStats = {       'sizing': 0, //size 1-6
'price': 0, //price 1-5
'OLED': 0, //OLED
'QLED': 0, //QLED
};

//functions

//start button function
startButtonElement.addEventListener("click", function startQuizEvent() {
    startButtonElement.style.visibility = 'hidden';
    questionContainer.style.visibility = 'visible';
    questionArray(answer_one);
    console.log("success");
    console.log(questionNumber);
});

let questionNumber = 0;
//iterate through question array
function questionArray(answer) {
    if (questionNumber === 0) {
        answer = answer_one;
        questionName.innerText = "Question 1";
        question.innerText = some_questions[0];
        for (let key in answer){
            createButton(answer[key]);
        }
    } else if (questionNumber === 1) {
        answer = answer_two;
        questionName.innerText = "Question 2";
        question.innerText = some_questions[1];
        for (let key in answer){
            createButton(answer[key]);
        }
    } else if (questionNumber === 2) {
        answer = answer_three;
        questionName.innerText = "Question 3";
        question.innerText = some_questions[2];
        for (let key in answer){
            createButton(answer[key]);
        }
    } else if (questionNumber === 3) {
        answer = answer_four;
        questionName.innerText = "Question 4";
        question.innerText = some_questions[3];
        for (let key in answer){
            createButton(answer[key]);
        }
    } 
    
    questionNumber++;
    console.log('question number:' + questionNumber);
}

//results screen
function resultsScreen() {
    questionName.innerText = "Results";
    question.innerText = "What TV should you buy?";

    let div2 = document.createElement('div');
    div2.classList.add('row', 'p-1');
    let recommend = document.createElement('p');
    recommend.classList.add('header_text');
    if (userStats['OLED'] >= 2) {
        recommend.innerText = 'We recommend an LG C1';
    } else if (userStats['OLED'] >= 3) {
        recommend.innerText = 'We recommend a Sony A90J';
    } else if (userStats['OLED'] && userStats['QLED'] >= 1) {
        recommend.innerText = 'We recommend either an LG C1 or a Samsung QN94A';
    } else if (userStats['QLED'] >= 2) {
        recommend.innerText = 'We recommend a Samsung QN94A';
    } else if (userStats['QLED'] >= 3) {
        recommend.innerText = 'We recommend a Samsung QN900A';
    }
    div2.appendChild(recommend);
    answerButtons.appendChild(div2);
}

//create button function
function createButton(innerTxt) {
   let div = document.createElement('div');
   div.classList.add('row', 'p-1');
   let button = document.createElement('button');
   button.classList.add('btn', 'quiz_btn');
   button.innerText = innerTxt;
   button.setAttribute("onclick", "evalQuestion"+questionNumber+"(this.value)");
   button.setAttribute("value", innerTxt);
   div.appendChild(button);
   answerButtons.appendChild(div);
}

//question switches
function evalQuestion0(answer) {
    console.log(answer);
    switch (answer) {
        case "1 ft":
            userStats['sizing'] +=1;
            resetState();
            questionArray();
            break;
        case "2 ft":
            userStats['sizing'] +=2;
            resetState();
            questionArray();
            break;
        case "3 ft":
            userStats['sizing'] +=3;
            resetState();
            questionArray();
            break;
        case "4 ft":
            userStats['sizing'] +=4;
            resetState();
            questionArray();
            break;
        case "4 ft+":
            userStats['sizing'] +=5;
            resetState();
            questionArray();
            break;
        default:
            break;
    }
    console.log(userStats['sizing']);
}

function evalQuestion1(answer) {
    console.log(answer)
    switch (answer) {
        case "Once a week":
            userStats['price'] +=1;
            resetState();
            questionArray();
            break;
        case "Three times a week":
            userStats['price'] +=2;
            resetState();
            questionArray();
            break;
        case "Five times a week":
            userStats['price'] +=3;
            resetState();
            questionArray();
            break;
        case "Seven times a week":
            userStats['price'] +=4;
            resetState();
            questionArray();
            break;
        default:
            break;
    }
    console.log(userStats['price']);
}

function evalQuestion2(answer) {
    console.log(answer);
    switch (answer) {
        case 'No light':
            userStats['OLED'] +=2;
            resetState();
            questionArray();
            break;
        case 'Little light':
            userStats['OLED'] +=1;
            resetState();
            questionArray();
            break;
        case 'Medium light':
            userStats['OLED'] +=1;
            userStats['QLED'] +=1;
            resetState();
            questionArray();
            break;
        case 'Lots of light':
            userStats['QLED'] +=1;
            resetState();
            questionArray();
            break;
        case 'The sun':
            userStats['QLED'] +=2;
            resetState();
            questionArray();
            break;
        default:
            break;
    }
    console.log(userStats['QLED']);
    console.log(userStats['OLED']);
}

function evalQuestion3(answer) {

    console.log(answer);
    switch (answer) {
        case 'Movies/Series':
            userStats['OLED'] +=1;
            resetState();
            resultsScreen();
            break;
        case 'Sports':
            userStats['QLED'] +=1;
            resetState();
            resultsScreen();
            break;
        case 'Gaming':
            userStats['OLED'] +=1;
            resetState();
            resultsScreen();
            break;
        case 'Cable TV':
            userStats['QLED'] +=1;
            resetState();
            resultsScreen();
            break;
        default:
            break;
    }
    console.log(userStats['price']);
}
//end question switches


//reset state
function resetState() {
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}





//questions array
const some_questions = ['How far away do you sit from your TV?', 
'How much TV do you watch?',  
'How bright is the room?',
'What content do you watch?',
];

//answer
const answer_one = {"a": '1 ft', "b": '2 ft', "c": '3 ft', "d": '4 ft', "e": '4 ft+',};
const answer_two = {"a": "Once a week", "b": "Three times a week", "c": "Five times a week", "d": "Seven times a week",};
const answer_three = {"a": 'No light', "b": 'Little light', "c": 'Medium light', "d": 'Lots of light', "e": 'The sun'};
const answer_four = {"a": 'Movies/Series', "b": 'Sports', "c": 'Gaming', "d": 'Cable TV',};



