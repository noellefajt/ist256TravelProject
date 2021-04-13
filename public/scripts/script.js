$(document).ready(function(){
    //console.log("Ready!");
    makeRequest();
});

/*
function makeRequest(){
    $.ajax({
        method:'GET',
        url:'/location',
        success: function(data) {    
            console.log(data);
        }
    });
}*/

function makeRequest(){
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
    info.data.forEach(item => {
        let content = $('#content');
        let h1 = $(`<h1>${"hello world"}</h1>`);
            //let h1 = $(`<h1>${item.loc.timezone + " "}</h1>`);
        content.append(h1);
    });
}            
        
    /*
            let h3 = $(`<h3>${"Height: " + item.height_feet + " feet " + item.height_inches + " inches"}</h3>`);
            content.append(h3);
            
            let h4 = $(`<h4>${"Weight: " + item.weight_pounds + " pounds"}</h4>`);
            content.append(h4);
        
            let ul = $('<ul></ul>');
            
            info.data.forEach(teamInfo => {
                let li1 = $(`<li>${"Team Name: " + teamInfo.team.full_name}</li>`);
                let li2 = $(`<li>${"Team Abbreviation: " + teamInfo.team.abbreviation}</li>`);
                let li3 = $(`<li>${"City: "+ teamInfo.team.city}</li>`);
                let li4 = $(`<li>${"Conference: "+ teamInfo.team.conference}</li>`);
                let li5 = $(`<li>${"Division: "+ teamInfo.team.division}</li>`);
                
                ul.append(li1);
                ul.append(li2);
                ul.append(li3);
                ul.append(li4);
                ul.append(li5);
            });

        content.append(ul);
    */   