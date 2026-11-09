let myLeads = ["www.youtube.com","www.amazom.com","www.github.com"]
const inputEl=document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
displayLead()
inputBtn.addEventListener("click", function () {
    let lead = inputEl.value
    if (lead != '') {
        myLeads.push(lead)
    }
    displayLead()
    console.log(myLeads)
})

function displayLead() {
    ulEl.textContent=""
    for (let i = 0; i < myLeads.length; i++) {
        ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    }
}