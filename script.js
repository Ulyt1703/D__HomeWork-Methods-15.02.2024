//FIRST TASK//
let firstTask = document.querySelector(".accordion__Description")
let firstNumbers = [15, 20, 35]
firstNumbers[1] = 10
    firstTask.innerHTML = firstNumbers


//SECOND TASK//

let secondTask = document.querySelector(".text-secondTask")
let secondStrings = ["Pencil", " Box", " Green"]
secondStrings.length = 4
secondStrings[3] = " Battery"
    secondTask.innerHTML = secondStrings

//THIRD TASK//
let thirdTask = document.querySelector(".text-thirdTask")
let thirdStrings = [40, 90, 75]
let thirdSum = 0;
for(let i = 0; i < thirdStrings.length; i++){
    thirdSum += thirdStrings[i]
}
thirdTask.innerHTML = thirdSum

console.log("FOUR TASK:")
//FOUR TASK//
let fourNumbers = [11, 35, 80, 98, 100]
for(let j = 0; j < fourNumbers.length; j++){
    console.log(fourNumbers[j])
}

//FIVE TASK//
document.addEventListener("DOMContentLoaded", function() {
    let fiveStrings = ["HotDog", "Concert", "Red", "Battery", "Oil"]
    let outputElement = document.getElementById("output")
    for (let k = 0; k < fiveStrings.length; k++) {
        let stringFive = fiveStrings[k]
    if(stringFive.length > 5) {
        outputElement.innerHTML += stringFive + "<br>"
    }
    }
    })


//SIX TASK//
let sixTask = document.querySelector(".text-sixTask")
let sixNumbers = [20, 30, 10, 100, 70, 97, 274, 203, 154, 140]
let maxValue = Math.max(...sixNumbers)
sixTask.innerHTML = maxValue

console.log("SEVEN TASK:")

//SEVEN TASK//
let sevenTask = document.querySelector(".text-sevenTask")
let sevenNumbers = [30, 29, 1, 6, 99, 5, 33, 66, 78, 90]
for(let l = 0; l < sevenNumbers.length; l++){
    if(sevenNumbers[l] % 2 === 0){
        console.log(sevenNumbers[l])
    }
}