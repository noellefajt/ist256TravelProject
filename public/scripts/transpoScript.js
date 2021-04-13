console.log("script file loaded");

function sayHello(){
    let myMessage = document.getElementById("message");
    myMessage.textContent = "hello world";
}

const helloButton = document.getElementById("button");
helloButton.addEventListener("click", sayHello); 