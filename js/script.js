let CC, YY, DD, MM, day, dayValue;
let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amma"];

function validate(){
    var gender = document.getElementsByName("gender");
    if(document.forms.year.value == "" ||document.forms.year.value.length !=4 || document.forms.year.value > 2100 || document.forms.year.value < 1900){
        alert("Please enter a valid year eg. 1999")
        document.forms.year.focus();
        return false;

    }
    else if (document.forms.month.value == "" || isNaN(document.forms.value) || document.forms.month.value.length)
}