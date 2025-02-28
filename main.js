let ramadan = new Date("3 1 2025 0:0:0").getTime();
let count = setInterval(() => {
  let now = new Date().getTime();
  let diff = ramadan - now;
  let month = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  let days = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  document.querySelector(".month").innerHTML = month;
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
  if (diff < 0) {
    clearInterval(count);
    document.querySelector(".end").innerHTML = "It,s Now";
    document.querySelector(".month").innerHTML = "";
    document.querySelector(".days").innerHTML = "";
    document.querySelector(".hours").innerHTML = "";
    document.querySelector(".minutes").innerHTML = "";
    document.querySelector(".seconds").innerHTML = "";
    document.querySelector(".parent").style.display = `none`;
  }
}, 1000);
