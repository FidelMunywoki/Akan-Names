
function akanNames(){
    var month = document.getElementById("month");
    var day = document.getElementById("date");
    var year = document.getElementById("year");
    var gender = document.getElementsByName("gender");
    var dob = month + " " + day + ", " + year;
    var then = new Date(dob);
    var theDay = then.getDay();
    //Days counting ===>>>>["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var akanMale = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
    var akanFemale = ['Akosua', 'Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
    if (gender === 'Male'){
        return akanMale[theDay];
    }
    else if ( gender === 'Female'){
        return akanFemale[theDay];
    }
}


function outputAkanNames(){
    var 
}



akanName = akanNames();
console.log(akanName);










