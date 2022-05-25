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
