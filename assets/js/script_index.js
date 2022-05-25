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
var tv_data = [
    //Samsung TVs
    {id:1, name:"Samsung", model:"QN90A", price:1299},
    {id:2, name:"Samsung", model:"QN900A", price:5999},
    {id:3, name:"Samsung", model:"QN800A", price:3499},
    {id:4, name:"Samsung", model:"QN700A", price:2499},
    {id:5, name:"Samsung", model:"QN95A", price:1799},
    {id:6, name:"Samsung", model:"QN94A", price:1599},
    {id:7, name:"Samsung", model:"QN85A", price:1099},
    {id:8, name:"Samsung", model:"Q80A", price:999},
    {id:9, name:"Samsung", model:"Q70A", price:899},
    {id:10, name:"Samsung", model:"Q60A", price:699},

    //LG TVs
    {id:11, name:"LG", model:"C1 OLED", price:1299},
    {id:12, name:"LG", model:"B1 OLED", price:999},
    {id:13, name:"LG", model:"A1 OLED", price:899},
    {id:14, name:"LG", model:"G1 OLED", price:1599},
    {id:15, name:"LG", model:'Z1 8K OLED (77")', price:19999},
    {id:16, name:"LG", model:"NANO90", price:849},
    {id:17, name:"LG", model:"UP81", price:499},
    {id:18, name:"LG", model:"NANO86", price:699},
    
    //Sony TVs
    {id:19, name:"Sony", model:"A90J", price:3499},
    {id:20, name:"Sony", model:"A80J", price:2499},
    {id:21, name:"Sony", model:'X95J (65")', price:1999},
    {id:22, name:"Sony", model:"X90J", price:1599},
    {id:23, name:"Sony", model:"X85J", price:899},
    
];

const quiz_next = document.getElementById("quiz_pos");
quiz_next.addEventListener('click', function handleclick(){
    quiz_page_counter_positive();
})
