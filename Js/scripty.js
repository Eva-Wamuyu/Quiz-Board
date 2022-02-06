let buttonQuery = document.getElementById("submit");

let scoreBoard = document.getElementById("scoreBoard");




function MarkScore(){

  
   var checkingTheAnswer = document.querySelectorAll(".correctAns");


   score = 0;
   for(var counter = 0; counter < checkingTheAnswer.length; counter++){
       if(checkingTheAnswer[counter].checked == true){
           score+=10;
       }
   
   }
   return score;

};

function MessageScore(score){
    if(score <= 100 && score >= 80){
        messageToDisplay = "Excellent";

    }
    else if(score < 80 && score >= 50){
        messageToDisplay = "Fair";
    }
    else{
        messageToDisplay = " Poor Score. Please Retake the test"
    }
    
    return messageToDisplay;

}


function displaying(){
    scoreBoard.innerHTML = MarkScore() +"</br> "+MessageScore(score);

}

buttonQuery.addEventListener("click",displaying);