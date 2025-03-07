let currHours = document.querySelectorAll(".curr-time");
let lastTime = document.querySelectorAll(".last-time span");
let monthlyButton = document.getElementById("monthly");
let weeklyButton = document.getElementById("weekly");
let dailyButton = document.getElementById("daily");

fetch("data.json")
  .then((response) => {
    if (!response.ok) {
      console.log("Oops! there is some error");
    }
    return response.json();
  })
  .then((data) => {
    function update(timeframe) {
      currHours.forEach((currHours, index) => {
        currHours.textContent = data[index].timeframes[timeframe].current;
        currHours.textContent += "hrs";
        lastTime[index].textContent =
          data[index].timeframes[timeframe].previous;
      });
    }
    console.log(data);
    dailyButton.addEventListener("click", () => update("daily"));
    weeklyButton.addEventListener("click", () => update("weekly"));
    monthlyButton.addEventListener("click", () => update("monthly"));

    update("daily");
    document.addEventListener("click", (e) => {
      if (!e.target.closest("button")) {
        update("daily");
      }
    });
  });
