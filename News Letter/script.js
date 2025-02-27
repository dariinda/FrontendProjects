function validateEmail() {
  let input = document.getElementById("mailInput").value;
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (validRegex.test(input)) {
    console.log("success");
    document.getElementsByTagName("main")[0].style.display = "none";
    document.getElementById("thanksCard").style.display = "block";
    document.getElementById("mailShown").innerText = input;

  } else {
    document.getElementById("errorText").hidden = false;
    let box = document.getElementById("mailInput");
    box.style.color = "hsl(4, 100%, 67%)";
    box.style.backgroundColor = "hsl(2, 67.60%, 92.70%)";
    box.style.border = "1px solid hsl(4, 100%, 67%)";
  }
}
function hideErrorText() {
  document.getElementById("errorText").hidden = true;
  let box = document.getElementById("mailInput");
  box.style.color = "black";
  box.style.backgroundColor = "white";
  box.style.border = "1px solid gray";
}


function toMailShown(){
  document.getElementById("thanksCard").style.display = "none";
  document.querySelector("main").style.display = "flex";
  document.getElementById("mailInput").value = "";
}


