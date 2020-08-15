
// Get the data
var tableData = data;
// create variable to select table from html
tbody = d3.select("tbody");
// insert dataset to table in html
data.forEach(function (tableData) {
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(function ([key, value]) {
        // console.log(key,value);
        //append a cell for each column for every row
        var cell = row.append("td");
        //updating each cell with the value from the forEach
        cell.text(value);
    })
});
// Grab the buttons
var filterButton = d3.select("#filter-btn");
var filterForm = d3.select("#form");
// run a function when something happens

filterButton.on("click", runEnter);
filterForm.on("submit", runEnter);

// create function to run Enter and Click Events
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputDate.property("value");
    console.log(inputValue);
    // using filter and arrow function to return matches for inputValue
    var resultDates = tableData.filter(x => x.datetime === inputValue);
    console.log(resultDates);
    // clear code before printing results
    tbody.html("");
    // insert returned results to table in html- forEach done on array[] (results returned as list of objs)
    resultDates.forEach(function (xResult) {
        var row = tbody.append("tr");
        // looping through each object to return the keys and values 
        Object.entries(xResult).forEach(function ([key, value]) {
            var cell = row.append("td");
            //updating each cell with the value from the forEach
            cell.text(value);
        })
    })
}
