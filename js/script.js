function myFunc() {
    let d = document.getElementById("day").value;
    let m = document.getElementById("month").value;
    let y = document.getElementById("year").value;
    let g = document.getElementById("gender").value;

    let CC = parseInt(y.slice(0, 2));
    let YY = parseInt(y.slice(2, 4));
    let MM = parseInt(m);
    let DD = parseInt(d);

    let birthday = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    let birthdate = birthday.toFixed(0);

    //document.getElementById("result").innerHTML = birthdate;
}