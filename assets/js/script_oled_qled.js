console.log("Hello World")

//Moving forwards and backwards for OLED panel
var oled_counter = 0;
function oled_page_counter_positive() {
    oled_counter++;
    console.log(oled_counter)
    if (oled_counter == 1) {
        document.getElementById("oled_page").innerHTML = "The pros of being able to turn on and off each pixel is the obvious nature of deep blacks and near infinite contrast. This, in addition to the OLED's great colour reproduction and excellent response time, makes most OLED TV's great for gaming or movies";
        console.log("success")
    } else if (oled_counter == 2) {
        document.getElementById("oled_page").innerHTML = "The cons of the OLED are lower peak brightness, higher price and high reflections. Due to the nature of the OLED panel not having a backlight, the overall peak brightness is very low, and combo-ed with the glass screen, allows for a lot of reflections and glare. Due to the manufacturing process, the OLED does come out at a higher cost.";
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
        document.getElementById("oled_page").innerHTML = "The pros of being able to turn on and off each pixel is the obvious nature of deep blacks and near infinite contrast. This, in addition to the OLED's great colour reproduction and excellent response time, makes most OLED TV's great for gaming or movies";
    } else if (oled_counter == 2){
        document.getElementById("oled_page").innerHTML = "The cons of the OLED are lower peak brightness, higher price and high reflections. Due to the nature of the OLED panel not having a backlight, the overall peak brightness is very low, and combo-ed with the glass screen, allows for a lot of reflections and glare. Due to the manufacturing process, the OLED does come out at a higher cost.";
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

//Moving forwards and backwards for QLED panel
var qled_counter = 0;
function qled_page_counter_positive() {
    qled_counter++;
    console.log(qled_counter)
    if (qled_counter == 1) {
        document.getElementById("qled_page").innerHTML = "test";
        console.log("success")
    } else if (qled_counter == 2) {
        document.getElementById("qled_page").innerHTML = "test2";
    } else if (qled_counter > 2){
        qled_counter = 2;
    }
}

function qled_page_counter_negative() {   
    qled_counter--;
    console.log(qled_counter)
    if (qled_counter == 0) {
        document.getElementById("qled_page").innerHTML = "The QLED, manufacted by Samsung displays, is known to be the brightest LED backlit panel for consumers. The LED screen powered by Quantum Dots, allow for 64 times as many colors as a standard LED screen, with far better viewing angles. With the high peak brightness, and some Samsung magic, these TV screens compete with OLEDs comfortably.";
        console.log("success")
    } else if (qled_counter == 1) {
        document.getElementById("qled_page").innerHTML = "test";
    } else if (qled_counter == 2){
        document.getElementById("qled_page").innerHTML = "test2";
    } else if (qled_counter < 0){
        qled_counter = 0;
    }
}

const qled_next = document.getElementById("qled_next");
qled_next.addEventListener('click', function handleclick(){
qled_page_counter_positive();
})

const qled_prev = document.getElementById("qled_prev");
qled_prev.addEventListener('click', function handleclick(){
    qled_page_counter_negative();
    })


