$(document).ready(function(){
    console.log("Ready!");
    makeRequest();
});

function makeRequest(){
    $.ajax({
        method:'GET',
        url:'/location',
        success: (data) => {
            console.log(data);
        }
    });
}