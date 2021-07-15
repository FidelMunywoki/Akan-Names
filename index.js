
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



// getting user inputs:
$(document).ready(function() {
    $("form#form").submit(function(event) {
        event.preventDefault();
        var y = parseInt($("#year").val());
        var m = parseInt($("#month").val());
        var d = parseInt($("#date").val());
        var g = $("input:radio[name=gender]:checked").val();
        var result = akanNames(y, m, d, g);
         document.getElementById("post-akan-name").innerHTML="Your akan name is: " + result;

         //confetti
        var duration = 15 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
        }

        var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);

        //refresh page
        document.getElementById("form").reset();
    });
});





