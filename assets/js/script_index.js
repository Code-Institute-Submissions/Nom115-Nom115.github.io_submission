//Define variables
const startButtonElement = document.getElementById('start_btn')
const questionContainer = document.getElementById('quiz')


//functions

//start button function
startButtonElement.addEventListener("click", function startQuizEvent() {
    startButtonElement.style.visibility = 'hidden';
    questionContainer.style.visibility = 'visible';
    console.log("success")
})