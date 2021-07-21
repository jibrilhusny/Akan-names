const akanMaleArray = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

const akanFemaleArray = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function getDate() {

    let dateAcquired = document.getElementById("date").value;
    console.log(dateAcquired);

    let male = document.getElementById("male");

    let female = document.getElementById("female");


    if (dateAcquired == "") {
        alert("Please enter a valid date")

    } else if (male.checked == false && female.checked == false) {
        alert("Please select your gender")

    }

    date = new Date(dateAcquired);
    console.log(date);



    CC = date.getFullYear();
    CC = CC.toString().substr(0, 2);
    console.log(CC);


    YY = date.getFullYear();
    YY = YY.toString().substr(2, 4);
    console.log(YY);


    MM = date.getMonth();
    console.log(MM);


    DD = date.getDate();
    console.log(DD);


    dateOfTheWeek = date.getDay();
    let dd = Math.round(
        (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
    );
    console.log(dateOfTheWeek);

    return dateOfTheWeek;
}

function formValidation() {
    getDate();
    if (male.checked) {
        console.log(akanMaleArray[dateOfTheWeek]);
        document.getElementById("display").innerHTML = `Your name is` + `<span>` + akanMaleArray[dateOfTheWeek] + `</span>` + '<br>' + "You were born on  " + date.toLocaleString('en-us', { weekday: 'long' });
    } else if (female.checked) {
        console.log(akanFemaleArray[dateOfTheWeek]);
        document.getElementById("display").innerHTML = `Your name is` + `<span>` + akanFemaleArray[dateOfTheWeek] + `</span>` + `<br>` + `You were born on  ` + date.toLocaleString('en-us', { weekday: 'long' });
    }
}


function onSubmit() {
    formValidation();

}