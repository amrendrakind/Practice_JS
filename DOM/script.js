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

//////// Race Car

let button = document.querySelector("button")
let car1 = document.querySelector(".car1")
let car2 = document.querySelector(".car2")
car1.style.marginLeft = 0
car2.style.marginLeft = 0

function reset(car1,car2){
    clearTimeout(car1.timer)
    clearTimeout(car2.timer)
    car1.style.marginLeft = 0
    car2.style.marginLeft = 0
    button.disabled = false
}

button.addEventListener("click", function(event){
    button.disabled=true
    car1.timer = setInterval(function (){
        car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random()*60+'px'
        if(parseInt(car1.style.marginLeft)>window.innerWidth){
            alert("Car 1 wins!");
            reset(car1,car2);
        }
    }, 60);
    car2.timer = setInterval(function(){
        car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random()*60 + 'px';
        if(parseInt(car2.style.marginLeft) > window.innerWidth){
            alert("Car 2 wins!");
            reset(car1,car2);
        }
    },60)
})

})