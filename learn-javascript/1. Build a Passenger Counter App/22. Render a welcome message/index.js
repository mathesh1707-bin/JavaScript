// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl=document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name
let s = "LadenBallz"
let greeting="Hi, my name is "

// and the greeting we want to render on the page
welcomeEl.innerText = greeting + s
welcomeEl.innerText+="!"

// Render the welcome message using welcomeEl.innerText
console.log(welcomeEl.innerText)
