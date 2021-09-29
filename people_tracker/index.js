//document.getElementById("count-el").innerText = 0

// ctrl + k + c

let countEL= document.getElementById("count-el")
let saveEL= document.getElementById("save-el")
console.log(countEL)

let count = 0

function increment(){
    count=count+1
    countEL.textContent=count
    
}

function save(){
    let countStr=count + " - "

    saveEL.textContent += countStr
    countEL.textContent=0
    count=0
}

