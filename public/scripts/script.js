$(document).ready(function(){
    //console.log("Ready!");
    makeRequest();
});

function makeRequest(){
    $.ajax({
        method:'GET',
        url:'/location',
        success: function(data) {    
            console.log(data);
        }
    });
}