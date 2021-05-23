var inputText = document.querySelector(".input-area");
var btnTranslate = document.querySelector("#btn-translate");
var outputArea = document.querySelector(".output-area");
var btnReset =document.querySelector("#btn-reset");

//var url = "https://First-API-Call.amanjain1996.repl.co/translate/yoda.json" ;

var url ="https://api.funtranslations.com/translate/minion.json";

function URLGenerator(text){
    return url+"?text="+text;
}

btnTranslate.addEventListener("click", APICall);
btnReset.addEventListener("click", resetHandler);

function APICall(event){
    fetch(URLGenerator(inputText.value))
    .then(response => response.json())
    .then(response =>{
        count++;
        outputArea.value=response.contents.translated;
    })
    .catch(() => {
         alert(`Today's translation attempts  are over (Total :5) !! \n Please try after 24 hrs `);
    });
}



function resetHandler(event){
    inputText.value='';
    outputArea.value='';
}