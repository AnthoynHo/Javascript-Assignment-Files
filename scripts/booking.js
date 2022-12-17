/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var dayCost = 20;
var dayCounter = 0;
var fullday = document.getElementById("full");
var halfday = document.getElementById("half");
var dayLength = "full";
var calculatedcostLabel = document.getElementById("calculated-cost");
var clearbutton = document.getElementById("clear-button");
const days = document.querySelectorAll(".day");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
document.getElementById('daysbox').addEventListener('click',function(e)
{
    if (e.target.classList.contains("day")){
        if (e.target.classList.contains("clicked")){
            e.target.classList.remove("clicked")
            dayCounter -= 1
            calcualte(dayCounter,dayCost)
        }else {
            e.target.classList.add("clicked")
            dayCounter += 1
            calcualte(dayCounter,dayCost)
        }
    }
}
)


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearbutton.onclick = function(){cleardays();};
function cleardays(){
    days.forEach(removeClicked(days))
}
function removeClicked(){
    days.classList.remove("clicked")
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfday.onclick = function(){halfdayf();};
function halfdayf(){
    halfday.classList.add("clicked")
    fullday.classList.remove("clicked")
    dayCost = 20;
    calcualte(dayCounter,dayCost);
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullday.onclick = function(){fulldayf();};
function fulldayf(){
    fullday.classList.add("clicked")
    halfday.classList.remove("clicked")
    dayCost = 35;
    calcualte(dayCounter,dayCost);
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calcualte(dayCounter,dayCost){
    calculatedcost = dayCounter*dayCost;
    calculatedcostLabel.innerHTML = calculatedcost;
}