let myLeads = ["www.youtube.com","www.amazon.com","www.github.com"]
const inputEl=document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
displayLeads()
inputBtn.addEventListener("click", function () {
    let lead = inputEl.value
    if (lead != '') {
        myLeads.push(lead)
        inputEl.value=""
    }
    displayLeads()
    console.log(myLeads)
})

function displayLeads() {
    let listItems=""
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a target='_blank' href='#'>" + myLeads[i] + "</a></li>"
        listItems += `
        <li>
            <a target='_blank' href=https://${myLeads[i]}> 
                ${myLeads[i]} 
            </a>
        </li>`
    }
    ulEl.innerHTML=listItems
}