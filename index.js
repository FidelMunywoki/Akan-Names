//getting information from the form.
$(document).ready(function() {
    $("form#form").submit(function(event) {
        event.preventDefault();
        var year = parseInt($("#year").val());
        var month = parseInt($("#month").val());
        var date = parseInt($("#date").val());
        var gender = $("input:radio[name=gender]:checked").val();
        var result = akanNames(year, month, date,gender)
    })
})