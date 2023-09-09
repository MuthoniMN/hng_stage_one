let dateTime = new Date()

let day = dateTime.toString().split(' ')[0]
document.querySelector("#day").textContent = day
let time = dateTime.getUTCMilliseconds()
document.querySelector('#time').textContent = time