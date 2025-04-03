const dayElement = document.getElementById("day");
const monthElement = document.getElementById("month");
const yearElement = document.getElementById("year");
let ageYearsElement = document.getElementById("ageYears");
let ageMonthsElement = document.getElementById("ageMonths");
let ageDaysElement = document.getElementById("ageDays");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  let day = parseInt(dayElement.value);
  let month = parseInt(monthElement.value);
  let year = parseInt(yearElement.value);

  const today = new Date();
  const currYear = today.getFullYear();
  const currMonth = today.getMonth() + 1;
  const currDay = today.getDate();

  let dayErrorMessage = document.getElementById("dayErrorMessage");
  let monthErrorMessage = document.getElementById("monthErrorMessage");
  let yearErrorMessage = document.getElementById("yearErrorMessage");

  dayErrorMessage.textContent = "";
  monthErrorMessage.textContent = "";
  yearErrorMessage.textContent = "";
  dayElement.style.border="2px "
  dayElement.style.border = "2px solid gray";
  monthElement.style.border = "2px solid gray";
  yearElement.style.border = "2px solid gray";
  document.querySelector('label[for="day"]').style.color = "black";
  document.querySelector('label[for="month"]').style.color = "black";
  document.querySelector('label[for="year"]').style.color = "black";

  
  let isValid = true;

  if (isNaN(day) || day <= 0 || day>31) {
    dayErrorMessage.textContent = "Enter a valid day";
    dayElement.style.border="2px solid red";
    document.querySelector('label[for="day"]').style.color="red";
    isValid=false;
  }

  if (isNaN(month) || month <= 0 || month > 12) {
    monthErrorMessage.textContent = "Enter a valid month";
    monthElement.style.border="2px solid red";
    document.querySelector('label[for="month"]').style.color="red";
    isValid=false;
  }

  if (isNaN(year) || year <= 1900 || year > currYear) {
    yearErrorMessage.textContent = "Enter a valid year";
    yearElement.style.border="2px solid red";
    document.querySelector('label[for="year"]').style.color="red";
    isValid=false;
  }
  
  let ageYear = currYear - year;
  let ageMonth = currMonth - month;
  let ageDay = currDay - day;

  if (ageDay < 0) {
    ageMonth -= 1;
    ageDay += new Date(currYear, currMonth - 1, 0).getDate(); 
  }
  if (ageMonth < 0) {
    ageYear -= 1;
    ageMonth += 12;
  }

  if(isValid){
    ageYearsElement.textContent = ageYear;
    ageMonthsElement.textContent = ageMonth;
    ageDaysElement.textContent = ageDay;
  }

});

