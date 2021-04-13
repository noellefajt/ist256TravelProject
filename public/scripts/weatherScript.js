$(document).ready(function(){
    console.log("Ready!");
    makeRequest();
});

function makeRequest(){
    $.ajax({
        method:'GET',
        url:'/weather',
        success: (data) => {
            console.log(data);
        }
    });
}