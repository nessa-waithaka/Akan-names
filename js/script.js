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

  if (day < 1 || day > 31 || day == "" || day == 0) {
    alert("Enter valid day!")
  }
  if (month < 1 || month > 12 || month == "" || month == 0) {
    alert("Enter valid day!")
  }
  if (year < 1900 || year > 2019 || year == "" || year == 0) {
    alert("Enter valid year!")
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

