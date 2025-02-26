function validateEmail() {
  let input = document.getElementById("mailInput").value;
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (validRegex.test(input)) {
    console.log("success");
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
