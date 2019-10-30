function myFunc() {
  let d = document.getElementById("day").value;
  let m = document.getElementById("month").value;
  let y = document.getElementById("year").value;
  let g = document.getElementById("gender").value;

  /*let CC = parseInt(y.slice(0, 2));
  let YY = parseInt(y.slice(2, 4));
  let MM = parseInt(m);
  let DD = parseInt(d);

  let birthday = (((CC / 4) - (2 * CC - 1)) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
  let birthdate = birthday.toFixed(0);*/

  let date = new Date(`${y}-${m}-${d}`);
  let birthdate = date.getDay();

  if (d < 1 || d > 31) {
    alert("Enter valid day!")
  }
  if (m < 1 || m > 12) {
    alert("Enter valid month!")
  }
  if (y < 1400 || y > 2019) {
    alert("Enter valid year!")
  }
  if (m == 2 && d < 1 || d > 29) {
    alert("Enter valid date!")
  }

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let fname = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  let mname = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

  if (g == "female") {
    document.getElementById("result1").innerHTML = days[birthdate];
    document.getElementById("result").innerHTML = fname[birthdate];
  }

  else if (g == "male") {
    document.getElementById("result1").innerHTML = days[birthdate];
    document.getElementById("result").innerHTML = mname[birthdate];
  }
}

