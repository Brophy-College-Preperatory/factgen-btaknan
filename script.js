var factList = [ //has a list of facts
  "Fact 1",
  "Fact 2", 
  "Fact 3", 
  "Fact 4"];
 
 var fact = document.getElementById("fact"); //where the facts will show up
 var myBtn = document.getElementById("myBtn"); //button to show the facts
 var count = 0; //makes a counter
 
 myBtn.addEventListener("click", displayFact); //adds click event listener for the button
 
 function displayFact(){ //function to display a fact
   fact.innerHTML = factList[count]; //fact to count
   count++; //a count to move on to another fact
   if (count == factList.length){ //checks if the count reached all of the list
     count = 0; //resets the count to 0
   }
 }
 