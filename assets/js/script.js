console.log("Hello World");

var oled_counter = 0;
function oled_page_counter_positive() {


   
    oled_counter++;
    console.log(oled_counter)
    if (oled_counter == 1) {
        document.getElementById("oled_page").innerHTML = "test";
        console.log("success")
    } else if (oled_counter == 2) {
        document.getElementById("oled_page").innerHTML = "test2";
    } else if (oled_counter > 2){
        oled_counter = 2;
    }
}
function oled_page_counter_negative() {


   
    oled_counter--;
    console.log(oled_counter)
    if (oled_counter == 0) {
        document.getElementById("oled_page").innerHTML = "The OLED patent is owned by LG, and they are the first company to produce to White OLED commercially. The OLEDS thrive under dark conditions and give unparalleled black levels due to the nature of self lit pixels, where each pixel can be individually turned on and off. This makes it one of the most competitive TV technologies out there.";
        console.log("success")
    } else if (oled_counter == 1) {
        document.getElementById("oled_page").innerHTML = "test";
    } else if (oled_counter == 2){
        document.getElementById("oled_page").innerHTML = "test2";
    } else if (oled_counter < 0){
        oled_counter = 0;
    }
    }

const oled_next = document.getElementById("oled_next");
oled_next.addEventListener('click', function handleclick(){
oled_page_counter_positive();
})

const oled_prev = document.getElementById("oled_prev");
oled_prev.addEventListener('click', function handleclick(){
    oled_page_counter_negative();
    })
