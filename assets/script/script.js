document.addEventListener("DOMContentLoaded", function() {
    
  
    function clickButton() {
      var min = 0;
      var max = 255;
  //random color
      var red = Math.floor(Math.random() * (max - min + 1)) + min;
      var green = Math.floor(Math.random() * (max - min + 1)) + min;
      var blue = Math.floor(Math.random() * (max - min + 1)) + min;
  
      var textColor = getContrastColor(red, green, blue);
  
      document.body.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  
      document.querySelector('h1').style.color = textColor;
      document.querySelector('p').style.color = textColor; 
    }
  
    function getContrastColor(red, green, blue) {
      var luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;
      return luminance > 0.5 ? 'black' : 'white';
    }
  
    let count = 0;

    //create Btn
    var decreaseBtn = document.createElement("button");
    decreaseBtn.textContent = "-";
    decreaseBtn.addEventListener("click", function() {
        if (count > 0) {
      clickButton(); 
      count -= 1;
      document.getElementById("countLabel").innerHTML = count;
        }
    });
  
    var resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset";
    resetBtn.addEventListener("click", function() {
      clickButton(); 
      count = 0;
      document.getElementById("countLabel").innerHTML = count;
    });
  
    var increaseBtn = document.createElement("button");
    increaseBtn.textContent = "+";
    increaseBtn.addEventListener("click", function() {
      clickButton(); 
      count += 1;
      document.getElementById("countLabel").innerHTML = count;
    });
  
    var buttonContainer = document.getElementById("buttonContainer");
    buttonContainer.appendChild(decreaseBtn);
    buttonContainer.appendChild(resetBtn);
    buttonContainer.appendChild(increaseBtn);
  });
  