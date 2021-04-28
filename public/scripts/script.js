$(document).ready(function () {

    console.log("Ready!");
    makeJenRequest();

});



function makeJenRequest() {
    console.log("making ajax request");
    $.ajax({
        method: 'GET',
        url: '/locations',
    }).done(function (response) {
        console.log(response);
        displayData(response);
    });
}


function displayData(info) {
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
var currentResList;
function addRes() {
    var fullName = $("#fullName").val();
    var date = $("#date").val();
    var time = $("#time").val();
    var activity = $("#activity").val();
    console.log(fullName);
    console.log(date);
    console.log(time);
    console.log(activity);
    console.log("Reservation created!");
    $.ajax({
        method: 'POST',
        url: '/reservations/createRes',
        data: {
            fullName: $("#fullName").val(),
            date: $("#date").val(),
            time: $("#time").val(),
            activity: $("#activity").val()
        }
    }).done(function (response) {
        console.log(response);
        $("#confirmation").empty();
        $("#confirmationCode").empty();
        $("#confirmation").append("Please keep your reservation ID for the future you will need it to access reservations details, update or delete your reservations ");
        $("#confirmationCode").append("Reservation ID: " + response._id);
        $("#resList").append("Your reservation information:");
        $("#resList").append("<li> name: " + response.name + "</li>");
        $("#resList").append("<li> date: " + response.date + "</li>");
        $("#resList").append("<li> time: " + response.time + "</li>");
        $("#resList").append("<li> activity: " + response.activity + "</li>");
        $("#fullName").val("");
        $("#date").val("");
        $("#time").val("");
        $("#activity").val("selected");
    });
}

function findRes() {
    console.log("Reservation found!");
    var idToGet = $("#id").val();
    $.ajax({
        method: 'GET',
        url: '/reservations/' + idToGet
    }).done(function (data) {

        console.log(data);
        var reserv = JSON.parse(JSON.stringify(data));

        console.log("Your reservation has been found");
        $("#resList").empty();
        $("#confirmation").empty();
        $("#confirmationCode").empty();
        $("#resList").append("Your reservation information:");
        $("#resList").append("<li> name: " + reserv.name + "</li>");
        $("#resList").append("<li> date: " + reserv.date + "</li>");
        $("#resList").append("<li> time: " + reserv.time + "</li>");
        $("#resList").append("<li> activity: " + reserv.activity + "</li>");
        $("#fullName").val(reserv.name);
        $("#date").val(reserv.date);
        $("#time").val(reserv.time);
        $("#activity").val(reserv.activity);
    }).fail(function (jqXHR) {
        $("#error").html("The reservation could not be found")
    });

}


function updateRes() {
    var idToUpdate = $("#id").val();
    var fullName = $("#fullName").val();
    var date = $("#date").val();
    var time = $("#time").val();
    var activity = $("#activity").val();
    console.log(idToUpdate);
    $.ajax({
        method: 'PUT',
        url: '/reservations/' + idToUpdate,
        data: {
            name: $("#fullName").val(),
            date: $("#date").val(),
            time: $("#time").val(),
            activity: $("#activity").val()
        }


    }).done(function (response) {
        console.log(response);
        console.log("hi update");
        console.log("Your reservation has been updated");
        $("#confirmation").empty();
        $("#confirmationCode").empty();
        $("#resList").empty();
        $("#resList").append("Your reservation has been updated for id:" + idToUpdate);
        $("#resList").append("<li> name: " + fullName + "</li>");
        $("#resList").append("<li> date: " + date + "</li>");
        $("#resList").append("<li> time: " + time + "</li>");
        $("#resList").append("<li> activity: " + activity + "</li>");

    }).fail(function (jqXHR) {
        $("#error").html("The reservation could not be updated")
    });

}

function deleteRes() {
    var idToDelete = $("#id").val();
    console.log(idToDelete);
    $.ajax({
        method: 'DELETE',
        url: '/reservations/' + idToDelete
    }).done(function (data) {
        console.log(idToDelete);
        console.log("Your reservation has been deleted");
        $("#confirmation").empty();
        $("#confirmationCode").empty();
        $("#resList").empty();
        $("#resList").append("Your reservation has been deleted for id:" + idToDelete);
        $("#fullName").val("");
        $("#date").val("");
        $("#time").val("");
        $("#activity").val("selected");
    }).fail(function (jqXHR) {
        $("#error").html("The reservation could not be delted")
    });

}





