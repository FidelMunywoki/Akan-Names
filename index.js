
function akanNames(y, m, d, g){ 
    var dob = m + " " + d + ", " + y;
    var then = new Date(dob);
    var theDay = then.getDay();
    //Days counting ===>>>>["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var akanMale = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
    var akanFemale = ['Akosua', 'Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
    if (g === 'Male'){
        return akanMale[theDay];
    }
    else if ( g === 'Female'){
        return akanFemale[theDay];
    }
}



// User interface (or front-end) logic:
$(document).ready(function() {
    $("form#form").submit(function(event) {
        event.preventDefault();
        var y = parseInt($("#year").val());
        var m = parseInt($("#month").val());
        var d = parseInt($("#date").val());
        var g = $("input:radio[name=gender]:checked").val();
        var result = akanNames(y, m, d, g);
        alert("Your akan name is: " + result);
        //refresh page
        document.getElementById("form").reset();
    });
});





