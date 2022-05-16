var CC, YY, MM, day, dayValue;
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amma"];

//Validating gender
function validate(){
    var gender = document.getElementsByName('gender');
    if(document.form.year.value === '' || document.form.year.value.length != 4 || document.form.year.value > 2100 || document.form.year.value <= 1900){
        alert('Invalid Year');
        document.form.year.focus();
        return false;
    } 
    else if (document.form.month.value === '' || isNaN(document.form.month.value) || document.form.month.value.length != 2 || document.form.month.value > 12 || document.form.month.value <= 0){
        alert('Invalid month');
        document.form.month.focus();
        return false;
    }
    else if (document.form.date.value === '' || isNaN(document.form.month.value) || document.form.date.value.length != 2 ||document.form.date.value > 31 || document.form.date.value <= 0 ){
        alert('Invalid date');
        document.form.date.focus();
        return false;
    }
    else{
        return true;
    }
}

//calculating date
function calculateDate(){
    year = document.getElementById('year');
    CC = parseInt(year.subtracting(0, 2));
    YY = parseInt(year.subtracting(2, 4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    d =  d = (((CC/4) -2 * CC - 1) +((5 * YY/4)) + ( (26 * (MM - 1) / 10) ) + DD)%7;
    console.log(d)
    return (Math.floor(d));
}

//get gender
function getGender(){
    var gender = document.getElementsByName("gender");

    if (gender[0].checked == true){
        var gender = "male";
    }
    else if (gender[1].checked == true){
        var gender = "female";
    }
    else{
        return false;
    }

    switch(gender){
        case "male":
            if(dayValue == 1){
                alert("Your Akan name is " + maleNames[0] + " and you were born on " + dayNames[0]);
            }
            else if(dayValue == 2){
                alert("Your Akan name is " + maleNames[1] + " and you were born on " + dayNames[1]);
            }
            else if(dayValue == 3){
                alert("Your Akan name is " + maleNames[2] + " and you were born on " + dayNames[2]);
            }
            else if(dayValue == 4){
                alert("Your Akan name is " + maleNames[3] + " and you were born on " + dayNames[3]);
            }
            else if(dayValue == 5){
                alert("Your Akan name is " + maleNames[4] + " and you were born on " + dayNames[4]);
            }
            else if(dayValue == 6){
                alert("Your Akan name is " + maleNames[5] + " and you were born on " + dayNames[5]);
            }
            else if(dayValue == 7){
                alert("Your Akan name is " + maleNames[6] + " and you were born on " + dayNames[6]);
            }
           break;
        case "female":
            if(dayValue == 1){
                alert("Your Akan name is " + femaleNames[0] + " and you were born on " + dayNames[0]);
            }
            else if(dayValue == 2){
                alert("Your Akan name is " + femaleNames[1] + " and you were born on " + dayNames[1]);
            }
            else if(dayValue == 3){
                alert("Your Akan name is " + femaleNames[2] + " and you were born on " + dayNames[2]);
            }
            else if(dayValue == 4){
                alert("Your Akan name is " + femaleNames[3] + " and you were born on " + dayNames[3]);
            }
            else if(dayValue == 5){
                alert("Your Akan name is " + femaleNames[4] + " and you were born on " + dayNames[4]);
            }
            else if(dayValue == 6){
                alert("Your Akan name is " + femaleNames[5] + " and you were born on " + dayNames[5]);
            }
            else if(dayValue == 7){
                alert("Your Akan name is " + femaleNames[6] + " and you were born on " + dayNames[6]);
            }
            break;
            // default:
    }

}


//finding the name
function findName(){
    dayValue= calculateDate();
    getGender();

}
