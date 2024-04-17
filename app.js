const age = document.querySelector("#birthdate");
const years = document.querySelector(".box-years span");
const months = document.querySelector(".box-months span");
const days = document.querySelector(".box-days span");
const hours = document.querySelector(".box-hours span");
const seconds = document.querySelector(".box-seconds span");
const milsec = document.querySelector(".box-milsec span");

function calculate() {
  let birthday = new Date(this.value);
  let today = new Date();

  let userAgeMilsec = today - birthday;

  milsec.innerText = userAgeMilsec;
  seconds.innerText = Math.floor(userAgeMilsec / 1000);
  hours.innerText = Math.floor(seconds.innerText / 60 / 60);
  days.innerText = Math.floor(hours.innerText / 24);
  months.innerText = Math.floor(days.innerText / 30.44);
  years.innerText = Math.floor(days.innerText / 365);
}

age.addEventListener("input", calculate);
