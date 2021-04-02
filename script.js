// load Airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// connect our airtable base to our website using API key
var base = new Airtable({ apiKey: "keyzQjFfjYvxAob2b" }).base(
  "appJI3MWJtOjK12rC"
);

// get our airtable data, specify how to retrieve it with functions
base("unitData")
  .select({})
  .eachPage(gotPageOfUnits, gotAllUnits);

// an empty array to hold our data
const units = [];

// callback function that receives our data
function gotPageOfUnits(records, fetchNextPage) {
  console.log("gotPageOfUnits()");
  // add the records from this page to our books array
  units.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllUnits(err) {
  console.log("gotAllUnits()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading units");
    console.error(err);
    return;
  }

  // call functions to log and show the units
  consoleLogUnits();
  showUnits();
}

// just loop through the units and console.log them
function consoleLogUnits() {
  console.log("consoleLogUnits()");
  units.forEach(unit => {
    console.log("Unit:", unit);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showUnits() {
  console.log("showUnits()");
  units.forEach(unit => {
    /*
      // add unit names to page
    var unitName = document.createElement("h1");
    unitName.innerText = unit.fields.name;
    document.body.appendChild(unitName);

    // add unit location to page
    unitLocation = document.createElement("p");
    unitLocation.innerText = unit.fields.location;
    document.body.appendChild(unitLocation);

    // add image to page
    var unitImage = document.createElement("img");
    unitImage.src = unit.fields.image[0].url;
    document.body.appendChild(unitImage); */

    // creating a new div container, where our unit info will go
    var unitContainer = document.createElement("div");
    unitContainer.classList.add("unit-container");
    document.querySelector(".container").append(unitContainer);

    // add unit names to unit container
    var unitName = document.createElement("h2");
    unitName.classList.add("unit-name");
    unitName.innerText = unit.fields.name;
    unitContainer.append(unitName);

    // add location to unit container
    var unitLocation = document.createElement("h3");
    unitLocation.classList.add("unit-location");
    unitLocation.innerText = unit.fields.location;
    unitLocation.style.color = "#5F5C4F";
    unitContainer.append(unitLocation);

    // add description to container
    var unitDescription = document.createElement("p");
    unitDescription.classList.add("unit-description");
    unitDescription.innerText = unit.fields.description;
    unitContainer.append(unitDescription);

    // add image to container
    var unitImage = document.createElement("img");
    unitImage.classList.add("unit-image");
    unitImage.src = unit.fields.image[0].url;
    unitContainer.append(unitImage);

    // add event listener
    // when user clicks on unit container
    // image and description will appear or disappear
    unitContainer.addEventListener("click", function() {
      unitDescription.classList.toggle("active");
      unitImage.classList.toggle("active");
    });

    // add to each container as a class
    var unitCh = unit.fields.chapter;
    console.log(unitCh);
    unitContainer.classList.add(unitCh);

    // filter by chapter 2
    var filterCh2 = document.querySelector(".ch2");
    filterCh2.addEventListener("click", function(){
      if(unitContainer.classList.contains("chapter2")){
        unitContainer.style.background = "#D7D2B5";
      }
      else{
        unitContainer.style.background = "#9f9b86";
      }
    })

    var filterCh3 = document.querySelector(".ch3");
    filterCh3.addEventListener("click", function(){
      if(unitContainer.classList.contains("chapter3")){
        unitContainer.style.background = "#D7D2B5";
      }
      else{
        unitContainer.style.background = "#9f9b86";
      }
    })

    var filterCh4 = document.querySelector(".ch4");
    filterCh4.addEventListener("click", function(){
      if(unitContainer.classList.contains("chapter4")){
        unitContainer.style.background = "#D7D2B5";
      }
      else{
        unitContainer.style.background = "#9f9b86";
      }
    })

    var filterCh5 = document.querySelector(".ch5");
    filterCh5.addEventListener("click", function(){
      if(unitContainer.classList.contains("chapter5")){
        unitContainer.style.background = "#D7D2B5";
      }
      else{
        unitContainer.style.background = "#9f9b86";
      }
    })

    var filterCh6 = document.querySelector(".ch6");
    filterCh6.addEventListener("click", function(){
      if(unitContainer.classList.contains("chapter6")){
        unitContainer.style.background = "#D7D2B5";
      }
      else{
        unitContainer.style.background = "#9f9b86";
      }
    })

    var filterCh9 = document.querySelector(".ch9");
    filterCh9.addEventListener("click", function(){
      if(unitContainer.classList.contains("chapter9")){
        unitContainer.style.background = "#D7D2B5";
      }
      else{
        unitContainer.style.background = "#9f9b86";
      }
    })

    var filterCh13 = document.querySelector(".ch13");
    filterCh13.addEventListener("click", function(){
      if(unitContainer.classList.contains("chapter13")){
        unitContainer.style.background = "#D7D2B5";
      }
      else{
        unitContainer.style.background = "#9f9b86";
      }
    })

    var filterCh14 = document.querySelector(".ch14");
    filterCh14.addEventListener("click", function(){
      if(unitContainer.classList.contains("chapter14")){
        unitContainer.style.background = "#D7D2B5";
      }
      else{
        unitContainer.style.background = "#9f9b86";
      }
    })

    var filterCh17 = document.querySelector(".ch17");
    filterCh17.addEventListener("click", function(){
      if(unitContainer.classList.contains("chapter17")){
        unitContainer.style.background = "#D7D2B5";
      }
      else{
        unitContainer.style.background = "#9f9b86";
      }
    })

    var reset = document.querySelector(".reset");
    reset.addEventListener("click", function(){
      unitContainer.style.background = "#9f9b86";
    })
  });
}

