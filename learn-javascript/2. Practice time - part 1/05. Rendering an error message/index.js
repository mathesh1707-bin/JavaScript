// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorEl=document.getElementById("error")
console.log(errorEl)
function errorMessage() {
    console.log("Button clicked")
    errorEl.textContent = "Something went wrong, please try again"
}
