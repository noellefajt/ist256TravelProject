$(document).ready(function(){
    console.log("Ready!");
    makeRequest();
});

function makeRequest(){
    $.ajax({
        method:'GET',
        url:'/activity',
        success: (data) => {
            console.log(data);
        }
    });
}