//Establishes a variable
// let firstbatch = 5
// let secondbatch = 2
// let count = firstbatch + secondbatch
// count = count+5
// This prints it to the console.
// console.log(count)

// document.getElementById("count-el").innerText = count

//Initialize count
let count = 0
let countEl = document.getElementById("count-el")
let countTotal = document.getElementById("count-total")
//Listen for clicks and increment
// document.getElementById(increment-bn)
function increment() {
    count += 1
    countEl.textContent = count
    
}
function save() {
    countTotal.textContent += count + " - "
    count = 0
    countEl.innerText = count
}
// the DOM is how you use javascript to modify a website