const problemArea = document.querySelector("#problem")
const answerArea = document.querySelector("#answer")
const historyArea = document.getElementById("historyDiv")
let mathProblem = ""
document.addEventListener("click", (e)=>{
    let clickedItem = e.target
    if (clickedItem.matches("button")){
        if (clickedItem.dataset.number !== undefined){
            let selectedButton = document.getElementById(clickedItem.dataset.number)
            selectedButton.style.backgroundColor="rgb("+getRandomNumber()+","+getRandomNumber()+","+getRandomNumber()+")"
            mathProblem+=clickedItem.dataset.number
        }
        else {
            if(clickedItem.dataset.operation ==="ce"){
                let selectedButton = document.getElementById(clickedItem.dataset.operation)
                selectedButton.style.backgroundColor="rgb("+getRandomNumber()+","+getRandomNumber()+","+getRandomNumber()+")"
                clearEverything()
                return;
            }
            else if(clickedItem.dataset.operation !=="=" && clickedItem.dataset.operation !=="history"){
                mathProblem+=clickedItem.dataset.operation
                let selectedButton = document.getElementById(clickedItem.dataset.operation)
                selectedButton.style.backgroundColor="rgb("+getRandomNumber()+","+getRandomNumber()+","+getRandomNumber()+")"
            }
            else{
                let selectedButton = document.getElementById(clickedItem.dataset.operation)
                selectedButton.style.backgroundColor="rgb("+getRandomNumber()+","+getRandomNumber()+","+getRandomNumber()+")"
                updateAnswer()
                addToHistory()
            }
        }
        updateCurrentProblem(mathProblem)
    }
})
function updateCurrentProblem(mathProblem){
    problemArea.textContent = mathProblem
}
function getRandomNumber(){
    return Math.floor(Math.random()*100)*(Math.random()*10);
}
function clearEverything(){
    problemArea.textContent = ""
    answerArea.textContent = ""
    mathProblem = ""
}
function updateAnswer(){
    answerArea.textContent = eval(mathProblem)
}
function addToHistory(){
    const newP = document.createElement("p");
    newP.innerText = mathProblem
    historyArea.appendChild(newP)
    mathProblem = ""
}