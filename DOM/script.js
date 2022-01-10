document.addEventListener("DOMContentLoaded", function(){
    let changeHeading = document.getElementById("change_heading")
    changeHeading.innerText = "Hello World!"
    
    let selectSection = document.querySelector("section")
    selectSection.addEventListener("mouseover", function(event){
            let selectColor = document.querySelector(".selected")
            changeHeading.style.color = event.target.className
            selectColor.innerText = event.target.className.toUpperCase()
        });

    var newDiv = document.createElement("div")
    newDiv.className="purple"
    selectSection.appendChild(newDiv)
    
})