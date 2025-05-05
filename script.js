// This function shows a random food fact when the button is clicked
function showRandomFoodFact() {
    // Our list of food facts about African cuisine
    let facts = [
      "Jollof rice has different versions in Nigeria, Ghana, and Senegal!",
      "Many African meals are eaten with the right hand only.",
      "Fufu is a dough-like food made by pounding starchy vegetables.",
      "In Cameroon, Ndole is made with bitter leaves and peanuts."
    ];
    
    // Pick a random fact from our list
    let randomNumber = Math.floor(Math.random() * facts.length);
    let randomFact = facts[randomNumber];
    
    // Show the fact on the page
    document.getElementById("foodFactDisplay").textContent = randomFact;
  }
  
  // This sets up the button to work when the page loads
  window.onload = function() {
    // Find the button on the page
    let factButton = document.getElementById("factButton");
    
    // Tell the button what to do when clicked
    factButton.onclick = showRandomFoodFact;
  };