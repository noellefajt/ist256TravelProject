$(document).ready(function(){

    console.log("Ready!");
    makeVinceRequest();
    makeJenRequest();
    // $("#addButton").click(function(){
    //     var str = $("#fname").val();
    //     console.log(str);
    //     console.log("hi");
    // });
    
});

function makeVinceRequest(){
    $.ajax({
        method:'GET',
        url:'/activity',
        success: (data) => {
            console.log(data);
        }
    });
}


/*
function makeRequest(){
    $.ajax({
        method:'GET',
        url:'/reservations',
        success: function(data) {    
            console.log(data);
        }
    });
}*/

function makeJenRequest(){
    $.ajax({
        method:'GET',
        url:'/location',
        success: function(data) {    
            console.log(data);
        }
    }).done(function(response){
        console.log(response);
        displayData(response);
    });
}


function displayData(info){
    info.consolidated_weather.forEach(item => {
        let content = $('#content');
        
        let h3 = $(`<h3>${item.applicable_date}</h3>`);
        content.append(h3);
        
        let p = $(`<p>${"&nbsp;&nbsp;&nbsp;&nbsp;- Current Temperature: " + item.the_temp + "&#176;C"}</p>`);
        let p1 = $(`<p>${"&nbsp;&nbsp;&nbsp;&nbsp;- Maximum Temperature: " + item.max_temp + "&#176;C"}</p>`);
        let p2 = $(`<p>${"&nbsp;&nbsp;&nbsp;&nbsp;- Minimum Temperature: " + item.min_temp + "&#176;C"}</p>`);
        let p3 = $(`<p>${"&nbsp;&nbsp;&nbsp;&nbsp;- " + item.humidity + "% Humidity"}</p>`);
        let p4 = $(`<p>${"&nbsp;&nbsp;&nbsp;&nbsp;- " + item.weather_state_name}</p>`);
        content.append(p);
        content.append(p1);
        content.append(p2);
        content.append(p3);
        content.append(p4);
        
    });
}            

function addRes()
{
    
   
   var fname = $("#fname").val();
   var lname = $("#lname").val();
   var date = $("#date").val();
   var time = $("#time").val();
   var activity = $("#activityType").val();
    console.log(fname);
    console.log(lname);
    console.log(date);
    console.log(time);
    console.log(activity);
    //console.log(fname);
    console.log("Reservation created!");
}

function updateRes()
{
    console.log("Reservation updated!");
}

function findRes()
{
    console.log("Reservation found!");
    //var fname = $("#fname").val();
    var fname=$('input:text[name=fName]').val();
    console.log(fname);
}

function deleteRes()
{
    console.log("Reservation deleted!");
}



        

