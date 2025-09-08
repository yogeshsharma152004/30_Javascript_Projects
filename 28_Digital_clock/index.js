let hrs = document.getElementById("hrs");

let min = document.getElementById("min");

let sec = document.getElementById("sec");

setInterval(() => {
  let current = new Date();

  hrs.innerHTML = (current.getHours() < 10?"0" : "") +current.getHours();

  min.innerHTML = (current.getMinutes() < 10?"0" : "") + current.getMinutes();

  sec.innerHTML = (current.getSeconds() < 10?"0" : "")+current.getSeconds();
}, 1000);
