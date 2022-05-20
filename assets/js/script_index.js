//Main quiz
//Quiz done in phases using counters to determine the question and what "phase" to be in
var quiz_question = 1;
function quiz_page_counter_positive() {
    quiz_question++;
    console.log(quiz_question)

//Size
//Price
//Windows
//Blackouts
//Content watched
//Wall mounted
}

const quiz_next = document.getElementById("quiz_pos");
quiz_next.addEventListener('click', function handleclick(){
    quiz_page_counter_positive();
})
