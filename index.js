// written by j. schere at a very cluttered desk after walking 30 minutes through the rain to work.

// make the submit button flash for a second when we're directing the user to it
let triggered = false;
const submitButton = document.getElementById("submit-button");
document.getElementById("top-direct").addEventListener("click", () => {
    if (!triggered) {
        // disable for 3 seconds (yes i could add the disabled property to the link but i don't feel it's necessary here)
        triggered = true
        setTimeout(() => { triggered = false }, 3000);
        // add and flash a border and then remove it after 1 second
        submitButton.style.border = "1px solid white"
        setTimeout(() => { submitButton.style.border = "3px dotted white" }, 500);
        setTimeout(() => { submitButton.style.border = "" }, 1000);
    }
})