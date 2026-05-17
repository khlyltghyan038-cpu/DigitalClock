function updateTime() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; 
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("time").innerHTML =
    `${hours}:${minutes}:${seconds}`;
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();

  document.getElementById("date").innerHTML =
    `${day}/${month}/${year}`;

  document.getElementById("ampm").innerHTML = ampm;
}

setInterval(updateTime , 1000);

updateTime();