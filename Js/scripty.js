
var buttonQuery = document.getElementById("submit");

buttonQuery.addEventListener("click", function(){

    var score = 0;
    


   var checkingTheAnswer = document.querySelectorAll(".correctAns");



   for(var counter = 0; counter < checkingTheAnswer.length; counter++){
       if(checkingTheAnswer[counter].checked == true){
           score+=10;
       }
   }




   alert("Your Score "+score)
   
    






   

}) ;

