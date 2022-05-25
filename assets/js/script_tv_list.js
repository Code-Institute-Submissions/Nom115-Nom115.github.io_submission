//define data
var tabledata = [
    //Samsung TVs
    {id:1, name:"Samsung", model:"QN90A", price:1299, links:"https://www.amazon.co.uk/Neo-QLED-QE55QN90A-2000-Smart/dp/B091FGV8TF/ref=sr_1_1?crid=3T9J7CEW4OC2K&keywords=Samsung+QN90A+55&qid=1653434376&sprefix=samsung+qn90a+55%2Caps%2C67&sr=8-1"},
    {id:2, name:"Samsung", model:"QN900A", price:5999, links:"https://www.amazon.co.uk/Samsung-QE65QN900A-inch-3000-Smart/dp/B0943ZPTD3/ref=pd_lpo_1?pd_rd_i=B0943ZPTD3&psc=1"},
    {id:3, name:"Samsung", model:"QN800A", price:3499, links:"https://www.amazon.com/SAMSUNG-65-Inch-Class-QN800A-Built/dp/B08VJMWWHJ?th=1"},
    {id:4, name:"Samsung", model:"QN700A", price:2499, links:"https://www.amazon.co.uk/Samsung-inch-QN700A-QLED-Smart/dp/B096KNXPNK?th=1"},
    {id:5, name:"Samsung", model:"QN95A", price:1799, links:"https://www.amazon.co.uk/Neo-QLED-QE55QN95A-2000-Smart/dp/B093DT3KTB"},
    {id:6, name:"Samsung", model:"QN94A", price:1599, links:"https://www.amazon.co.uk/Neo-QLED-QE55QN94A-2000-Smart/dp/B09445V414/ref=pd_lpo_1?pd_rd_i=B09445V414&psc=1"},
    {id:7, name:"Samsung", model:"QN85A", price:1099, links:"https://www.amazon.co.uk/Neo-QLED-QE55QN85A-1500-Smart/dp/B091L7DP2B/ref=sr_1_4?crid=1OM6BZAQXHSUM&keywords=QN85A&qid=1653485578&s=electronics&sprefix=qn85a%2Celectronics%2C69&sr=1-4"},
    {id:8, name:"Samsung", model:"Q80A", price:999, links:"https://www.amazon.co.uk/QE55Q80A-QLED-HDR-1500-Smart/dp/B0919YK475/ref=sr_1_3?crid=3D9MBTK6N45MB&keywords=Q80A&qid=1653485649&s=electronics&sprefix=q80a%2Celectronics%2C73&sr=1-3&th=1"},
    {id:9, name:"Samsung", model:"Q70A", price:899, links:"https://www.amazon.co.uk/Samsung-QE55Q70A-inch-Quantum-Smart/dp/B094DBB2XW/ref=sr_1_5?crid=3LSB9YUFAYVJ4&keywords=Q70A&qid=1653485704&s=electronics&sprefix=q70a%2Celectronics%2C73&sr=1-5"},
    {id:10, name:"Samsung", model:"Q60A", price:699, links:"https://www.amazon.co.uk/Samsung-55Q60A-139-7-Ultra-Smart/dp/B092R8XYR9/ref=sr_1_3?crid=168GJHP7F6TJF&keywords=Q60A+55&qid=1653485844&s=electronics&sprefix=q60a+55%2Celectronics%2C64&sr=1-3"},

    //LG TVs
    {id:11, name:"LG", model:"C1 OLED", price:1299, links:"https://www.amazon.co.uk/LG-OLED55C14LB-Advanced-processor-Assistant/dp/B08X3QYNT5/ref=sr_1_1?crid=2VI0A737B1LE4&keywords=LG%2BC1%2B55&qid=1653486946&s=electronics&sprefix=lg%2Bc1%2B55%2Celectronics%2C74&sr=1-1&th=1"},
    {id:12, name:"LG", model:"B1 OLED", price:999, links:"https://www.amazon.co.uk/LG-OLED55B16LA-processor-SELF-LIT-Assistant/dp/B08X3R8XMC/ref=sr_1_3?crid=1SWI98EJTRVX&keywords=LG%2BB1%2B55&qid=1653486995&s=electronics&sprefix=lg%2Bb%2Celectronics%2C61&sr=1-3&th=1"},
    {id:13, name:"LG", model:"A1 OLED", price:899, links:"https://www.amazon.co.uk/LG-Inch-OLED-Ultra-Smart/dp/B095P9B15P/ref=sr_1_4?crid=NPTU5G80W3BA&keywords=LG+A1+55&qid=1653487090&s=electronics&sprefix=lg+a%2Celectronics%2C68&sr=1-4"},
    {id:14, name:"LG", model:"G1 OLED", price:1599, links:"https://www.amazon.co.uk/LG-OLED55G16LA-Ultra-Freeview-Freesat/dp/B0946Y4S59/ref=sr_1_3?crid=133Y7IGIL6W46&keywords=LG+G1+55&qid=1653487113&s=electronics&sprefix=lg+g%2Celectronics%2C66&sr=1-3"},
    {id:15, name:"LG", model:'Z1 8K OLED (77")', price:19999, links:"https://www.lg.com/uk/tvs/lg-oled77z19la"},
    {id:16, name:"LG", model:"NANO90", price:849, links:"https://www.amazon.co.uk/LG-55NANO916PA-NanoCell-processor-Assistant/dp/B08X3R2YR6/ref=sr_1_1?crid=2KPOB940HJGH0&keywords=LG%2BNANO90%2B55&qid=1653487309&s=electronics&sprefix=lg%2Bnano90%2B55%2Celectronics%2C66&sr=1-1&th=1"},
    {id:17, name:"LG", model:"UP81", price:499, links:"https://www.amazon.co.uk/LG-55UP81006LA-Freeview-Assistant-compatible/dp/B08X3PLQDX/ref=sr_1_5?crid=9GOTYIR2TNE6&keywords=LG%2BUP7000%2B55%22&qid=1653487357&s=electronics&sprefix=lg%2Bup7000%2B55%2B%2Celectronics%2C53&sr=1-5&th=1"},
    {id:18, name:"LG", model:"NANO86", price:699, links:"https://www.amazon.co.uk/55NANO886PB-55-NanoCell-Ultra-Smart/dp/B094KQKD5M/ref=sr_1_2?crid=2TCWRE5FQ73YP&keywords=lg+nano+75+55%22&qid=1653487399&s=electronics&sprefix=lg+nano75%2Celectronics%2C55&sr=1-2"},
    
    //Sony TVs
    {id:19, name:"Sony", model:"A90J", price:3499, links:"https://www.amazon.co.uk/Sony-BRAVIA-XR-OLED-XR55A90J-Black/dp/B098R7H8GX/ref=sr_1_2?crid=283H7QQB74LLC&keywords=Sony%2BA90J&qid=1653488315&s=electronics&sprefix=sony%2Ba90j%2Celectronics%2C74&sr=1-2&th=1"},
    {id:20, name:"Sony", model:"A80J", price:2499, links:"https://www.amazon.co.uk/Sony-BRAVIA-XR-OLED-XR55A80J-Black/dp/B097PV9ZZ1/ref=sr_1_1?crid=3L3WZI5IU63A5&keywords=Sony+A80J&qid=1653488399&s=electronics&sprefix=sony+a80j%2Celectronics%2C62&sr=1-1"},
    {id:21, name:"Sony", model:'X95J (65")', price:1999, links:"https://www.amazon.co.uk/Sony-BRAVIA-Array-XR-65X95J-65-inch-Black/dp/B098R8DPD8/ref=sr_1_2?crid=3MVUU749NIP5S&keywords=Sony+X95J+55&qid=1653488524&s=electronics&sprefix=sony+x95j+55%2Celectronics%2C53&sr=1-2"},
    {id:22, name:"Sony", model:"X90J", price:1599, links:"https://www.amazon.co.uk/Sony-BRAVIA-Array-Google-Smart-Black/dp/B098R896RX/ref=sr_1_1?crid=3HN4D2R97QEH9&keywords=Sony%2BX90J%2B55&qid=1653488587&s=electronics&sprefix=sony%2Bx90%2Celectronics%2C56&sr=1-1&th=1"},
    {id:23, name:"Sony", model:"X85J", price:899, links:"https://www.amazon.co.uk/Sony-BRAVIA-KD55X89JU-Freeview-Freesat/dp/B097N65YKX/ref=sr_1_1?crid=1DVVXROWMN2IL&keywords=Sony+X85J+55&qid=1653488762&s=electronics&sprefix=sony+x85%2Celectronics%2C57&sr=1-1"},
    
];

//create Tabulator on DOM element with id "example-table"
var table = new Tabulator("#example-table", {
    height:510, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    data:tabledata, //assign data to table
    layout:"fitColumns", //fit columns to width of table (optional)
    columns:[ //Define Table Columns
        {title:"Manufacturer", field:"name"},
        {title:"Model", field:"model"},
        {title:"RRP (£)", field:"price"},
        {title:"Amazon Link", field:"links", formatter:"link", formatterParams:{
            label:"Amazon",
            target:"_blank",
        }},
    ],
});
