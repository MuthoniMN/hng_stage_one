let dateTime = new Date()
let days = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
  }
let day = dateTime.getDay()
document.querySelector("#day").textContent = days[day]
let time = dateTime.getUTCMilliseconds()
document.querySelector('#time').textContent = time