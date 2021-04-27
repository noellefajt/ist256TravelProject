$(document).ready(function(){

    console.log("Ready!");
    makeJenRequest();
    // $("#addButton").click(function(){
    //     var str = $("#fname").val();
    //     console.log(str);
    //     console.log("hi");
    // });
    
});


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
    console.log("making ajax request");
    $.ajax({
        method:'GET',
        url:'/locations',
    }).done(function(response){
        console.log(response);
        displayData(response);
    });
}


function displayData(info){
    info.consolidated_weather.forEach(item => {
        let content = $('#content');
        
        let h4 = $(`<h4>${item.applicable_date}</h4>`);
        content.append(h4);
        
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
    
   
   //var fname = $("#fname").val();
   var fullName = $("#fullName").val();
  // var lname = $("#lname").val();
   var date = $("#date").val();
   var time = $("#time").val();
   var activity = $("#activityType").val();
    //console.log(fname);
    //console.log(lname);
    console.log(fullName);
    console.log(date);
    console.log(time);
    console.log(activity);
    //console.log(fname);
    console.log("Reservation created!");

    $.ajax({
        method:'POST',
        url:'/reservations/createRes',
        data:{
            fullName: $("#fullName").val(),
            date: $("#date").val(),
            time: $("#time").val(),
            activity: $("#activityType").val()
        }
    }).done(function(response){
        console.log(response);
        //displayData(response);
    });
}

function updateRes()
{
    console.log("Reservation updated!");
}
var currentResList;
function findRes()
{
    console.log("Reservation found!");
    // var fname = $("#fname").val();
    // //var fname=$('input:text[name=fname]').val();
    // console.log(fname);
    $.ajax({
        method: 'GET',
        url: '/reservations',
        success: (data) => {
            //console.log(data.message);
            //var upData = JSON.parse(data);
            console.log("Reservations: " + JSON.stringify(data));
            console.log(data);
            currentResList = data.slice();
            $("#resList").empty();
            //data.toArray();
            data.forEach(function (reserv){
                console.log(reserv);
                //var resItem = arrayItem.fullName;
                //console.log(resItem);
                //resItem = JSON.stringify(resItem);
               // console.log("array item name" + resItem);
                $("#resList").append("<li>"+reserv.name+"<li>");
                $("#resList").append("<li>"+reserv.date+"<li>");
                $("#resList").append("<li>"+reserv.time+"<li>");
                $("#resList").append("<li>"+reserv.activity+"<li>");
            });
            

        }
    });
}

// function findRes()
// {
//     console.log("Reservation found!");
//     var fullName = $("#fullName").val();
//     // //var fname=$('input:text[name=fname]').val();
//     // console.log(fname);
//     $.ajax({
//         method: 'GET',
//         url: '/reservations/' + fullName,
//         success: (data) => {
//             console.log("Reservations: " + data);
//             $("#resList").empty();
//             $("resList").append(fullName);
           
            

//         }
//     });
// }
// function updateRes(){
//     var id = $("#id").val();
    
//     //mydb.reservations({_id:id}, {$name:$("#fullName").val()}, {$date:$("#date").val()},{$name:$("#time").val()},{$activity:$("#activity").val()});
    
   
//     $.ajax({
//         method: "PUT",
//         url: '/' + id,
//         //dataType: 'json',
//         data:{
//             fullName: $("#fullName").val(),
//             date: $("#date").val(),
//             time: $("#time").val(),
//             activity: $("#activityType").val()
//         }
//     }).success(function(data){
//         updateData.append("<p>Response: Data saved!</p>");
//         console.log("Successful!" + data);
//     }).fail(function(data){
//         console.log("Oops not working" + data);
//     });
// };

// function deleteRes()
// {
//     var nameToDelete = $("#fullName").val();
//     $.ajax({
//         method: 'DELETE',
//         url: '/reservations/' + nameToDelete
//     }).done(function(data){
//         console.log("Your reservation has been deleted");
//     }).fail(function(jqXHR){
//         $("#error").html("The reservation could not be delted")
//     });

// }


        


