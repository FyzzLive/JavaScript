var btn = document.getElementById("submit");
var question = document.querySelector("#question");
var output = document.querySelector("#output");
var num1 = Math.floor(Math.random() * 10 + 1);
var num2 = Math.floor(Math.random() * 10 + 1);
question.innerHTML = num1 + " + " + num2;

function add(){
    var ourAnwser = document.getElementById("anwser").value;
    var correctAnwser = num1 + num2;
    console.log(correctAnwser);  

    if(isNaN(ourAnwser)){
        output.innerHTML = "Hey! "+ ourAnwser + " is not a number!";
    } else {
        if(ourAnwser == correctAnwser) {
            output.innerHTML = "Great Job! " + num1 + " + " + num2 + " = " + correctAnwser;
        } else {
            output.innerHTML = "Oops, Try Again! " + num1 + " + " + num2 + " does not equal " + ourAnwser;
        }
    }
}

function newCard(){
    document.getElementById("anwser").value = "";
    output.innerHTML = "";
    num1 = Math.floor(Math.random() * 10 + 1);
    num2 = Math.floor(Math.random() * 10 + 1);
    question.innerHTML = num1 + " + " + num2;
}

