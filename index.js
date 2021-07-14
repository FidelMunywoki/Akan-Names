var month = document.getElementById("month");
var day = document.getElementById("date");
var year = document.getElementById("year");
var gender = document.getElementsByName("gender");

function akanNames(month, day, year, gender){
    var dob = month + " " + day + ", " + year;
    var then = new Date(dob);
    var theDay = then.getDay();
    //Days counting ===>>>>["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var akanMale = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
    var akanFemale = ['Akosua', 'Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
    if (gender === 'Male'){
        console.log(akanMale[theDay]);
    }
    else if ( gender === 'Female'){
        console.log(akanFemale[theDay]);
    }
}












var month = 'Jan';
var day = 19;
var year = 1995
var dob = month + " " + day + ", " + year;
var gender = 'Female'

var then = new Date(dob);
var theDay = then.getDay();
//Days counting ===>>>>["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(theDay);

var akanMale = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
var akanFemale = ['Akosua', 'Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
if (gender === 'Male'){
    console.log(akanMale[theDay]);
}
else if ( gender === 'Female'){
    console.log(akanFemale[theDay]);
}