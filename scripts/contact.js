// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
var submitbutton = document.getElementById("submit-button")
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

main = document.getElementById("contact-page")

submitbutton.onclick = function(){submitfunct();};
function submitfunct(){
    main.innerHTML = "Thank you for your message";
    main.classList.add("large-text")
}