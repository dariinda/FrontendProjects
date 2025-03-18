const dayElement = document.getElementById("day");
const monthElement = document.getElementById("month");
const yearElement = document.getElementById("year");
let ageYearsElement = document.getElementById("ageYears");
let ageMonthsElement = document.getElementById("ageMonths");
let ageDaysElement = document.getElementById("ageDays");
const button = document.getElementById("button");

console.log(`${day}`);

button.addEventListener("click", () => {
  let day = parseInt(dayElement.value);
  let month = parseInt(monthElement.value);
  let year = parseInt(yearElement.value);

  const today = new Date();
  const currYear = today.getFullYear();
  const currMonth = today.getMonth() + 1;
  const currDay = today.getDate();

  let ageYear = currYear - year;
  let ageMonth = currMonth - month;
  let ageDay = currDay - day;

  if (ageDay < 0) {
    ageMonth -= 1;
    ageDay += new Date(currYear, currMonth - 1, 0).getDate(); // Get days in the previous month
  }
  if (ageMonth < 0) {
    ageYear -= 1;
    ageMonth += 12;
  }

  ageYearsElement.textContent = ageYear;
  ageMonthsElement.textContent = ageMonth;
  ageDaysElement.textContent = ageDay;
});
