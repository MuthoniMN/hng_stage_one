let dateTime = new Date()

let day = dateTime.toString().split(' ')[0]
document.querySelector("#day").textContent = day
let time = dateTime.toUTCString().split(' ')[4]
document.querySelector('#time').textContent = time + " UTC"