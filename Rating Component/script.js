const buttons = document.querySelectorAll("button");
let selectedButtonNumber = null;
buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => {
      btn.style.backgroundColor = ""; 
      btn.style.color = ""; 
    });
    this.style.backgroundColor = "white";
    this.style.color = "black";
    selectedButtonNumber = index + 1;
  });
});


const btn = document.getElementById("submit-button");
btn.addEventListener("click", () => {
    if(selectedButtonNumber!==null){
        btn.style.backgroundColor = "white";
    }
  
});

document.getElementById("submit-button").addEventListener("click", function () {
    if(selectedButtonNumber===null){
        alert("Please select a number");
        return;
    }
  document.getElementById("card1").style.display = "none";
  document.getElementById("card2").style.display = "block";
  const text = document.querySelector(".reviewBox");
  text.innerHTML=`You selected ${selectedButtonNumber} out of 5`;
});
