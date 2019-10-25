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

    //var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let fname = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let mname = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    if (birthdate == 0 && g == "female") {
        document.getElementById("result").innerHTML = fname[0];
    }
    else if (birthdate == 1 && g == "female") {
        document.getElementById("result").innerHTML = fname[1];
    }

    else if (birthdate == 2 && g == "female") {
        document.getElementById("result").innerHTML = fname[2];
    }

    else if (birthdate == 3 && g == "female") {
        document.getElementById("result").innerHTML = fname[3];
    }

    else if (birthdate == 4 && g == "female") {
        document.getElementById("result").innerHTML = fname[4];
    }

    else if (birthdate == 5 && g == "female") {
        document.getElementById("result").innerHTML = fname[5];
    }

    else if (birthdate == 6 && g == "female") {
        document.getElementById("result").innerHTML = fname[6];
    }
}