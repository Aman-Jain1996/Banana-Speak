var inputText = document.querySelector("#input-area");
var btnTranslate = document.querySelector("#btn-translate");
var outputArea = document.querySelector("#output-area");
var btnReset =document.querySelector("#btn-reset");

var url = "https://First-API-Call.amanjain1996.repl.co/translate/yoda.json" ;

//var url ="https://api.funtranslations.com/translate/minion.json";

function URLGenerator(text){
    return url+"?text="+text;
}



function APICall(){
    fetch(URLGenerator(inputText.value))
    .then(response => response.json())
    .then(response =>{
        outputArea.value=response.contents.translated;
        console.log(response);
    })
    .catch(() => { alert("Some server error");})
}



btnTranslate.addEventListener("click", APICall);
btnReset.addEventListener("click", resetHandler);


function resetHandler(){
    inputText.value='';
    outputArea.value='';
}