const date = document.getElementById("date");

const day = document.getElementById("day");

const month = document.getElementById("month");

const year = document.getElementById("year");

const today = new Date();

const week = ["Sunday" , "Monday" , "Tuesday" , "Wednesday", "Thursday" , "Friday" ,"Saturday"];

const allmonth = ["January", "February", "March","April","May","June","July","August" ,"September","October","November","December"];

date.innerHTML = (today.getDate() < 10? "0" : "" ) + today.getDate();

day.innerHTML = week[today.getDay()]

month.innerHTML = allmonth[today.getMonth()]

year.innerHTML = today.getFullYear();