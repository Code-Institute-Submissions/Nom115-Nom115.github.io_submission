//define data
var tabledata = [
    {id:1, name:"Samsung", model:"QN90A", price:1299, links:"https://www.amazon.co.uk/Neo-QLED-QE55QN90A-2000-Smart/dp/B091FGV8TF/ref=sr_1_1?crid=3T9J7CEW4OC2K&keywords=Samsung+QN90A+55&qid=1653434376&sprefix=samsung+qn90a+55%2Caps%2C67&sr=8-1"},
    
];

//create Tabulator on DOM element with id "example-table"
var table = new Tabulator("#example-table", {
    height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
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
