var buttons = document.getElementsByClassName("input-button")

var operants = [];
var operators = [];
var isLastOperator = true;


for( var i=0; i < buttons.length; i++){
    buttons[i].addEventListener("click",click);
}


function click(event){
    if(event.target.classList.contains("equal-button")){


        return;
    }

   if(event.target.classList.contains("control-button")){
     if(isLastOperator) return;
     isLastOperator =true;
     operators.push(event.target.innerText);


   }else{

    if(isLastOperator){
        operators.push(event.target.innerText);

    }else{
    operants[operants.length - 1] += event.target.innerText;

   } 
   isLastOperator = false;
}
 console.log(operants,operators);


    printOut(event);

}

function printOut(){
   
    if(document.getElementsByClassName("input-string")[0].innerHTML == 0){
        document.getElementsByClassName("input-string")[0].innerHTML = event.target.innerText;

    }else{
        document.getElementsByClassName("input-string")[0].innerHTML += event.target.innerText;

    }
}
