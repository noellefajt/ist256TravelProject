//code adjusted from JSON inclass practice 

const data = {
    "subwayData": {
        "greenLine": [
            {
                "stopName": "Park Street",
                "time": [
                    "11:00pm"
                ]
            },
            {
                "stopName": "Boylston",
                "time": [
                    "11:01pm"
                ]
            },
             {
                "stopName": "Arlington",
                "time": [
                    "11:03pm"
                ]
            },
             {
                "stopName": "Copley",
                "time": [
                    "11:04pm"
                ]
            },
             {
                "stopName": "Hynes Convention Center",
                "time": [
                    "11:06pm"
                ]
            },
        ],

        "orangeLine": [
             {
                "stopName": "North Station",
                "time": [
                    "11:00pm"
                ]
            },
            {
                "stopName": "Haymarket",
                "time": [
                    "11:06pm"
                ]
            },
             {
                "stopName": "State",
                "time": [
                    "11:12pm"
                ]
            },
             {
                "stopName": "Downtown Crossing",
                "time": [
                    "11:18pm"
                ]
            },
        ],

        "blueLine": [
            {
                "stopName": "Maverick",
                "time": [
                    "11:00pm"
                ]
            },
             {
                "stopName": "Aquarium",
                "time": [
                    "11:05pm"
                ]
            },
             {
                "stopName": "State",
                "time": [
                    "11:10pm"
                ]
            },
             {
                "stopName": "Government Center",
                "time": [
                    "11:15pm"
                ]
            },
        ],

        "redLine": [
           {
                "stopName": "Charles",
                "time": [
                    "11:00pm"
                ]
            },
             {
                "stopName": "Park Street",
                "time": [
                    "11:09pm"
                ]
            },
             {
                "stopName": "Downtown Crossing",
                "time": [
                    "11:18pm"
                ]
            },
             {
                "stopName": "South Station",
                "time": [
                    "11:27pm"
                ]
            },

        ]

    }
}
//fucntion handles a green button click 
function greenClick() {
    
    let greenData = document.getElementById("lineData");
    greenData.innerHTML = null;
    data.subwayData.greenLine.forEach(stop => {
        let p = document.createElement("p")
        let pText = document.createTextNode(stop.stopName);
        p.appendChild(pText);
        greenData.appendChild(p);
    })
      data.subwayData.greenLine.forEach(stop => {
        let p = document.createElement("p");
        let pText = document.createTextNode(stop.time);
        p.appendChild(pText);
        greenData.appendChild(p);
    })
    let img = document.createElement("img");
    img.src = "images/subwaylinegreen.png";
    greenData.appendChild(img);
}
document.getElementById("greenButton").addEventListener("click", greenClick);

//function handles orange button clicks  
function orangeClick() {
    let orangeData = document.getElementById("lineData");
    orangeData.innerHTML = null;
    data.subwayData.orangeLine.forEach(stop => {
        let p = document.createElement("p");
        let pText = document.createTextNode(stop.stopName);
        p.appendChild(pText);
        orangeData.appendChild(p);
    })
    data.subwayData.orangeLine.forEach(stop => {
        let p = document.createElement("p");
        let pText = document.createTextNode(stop.time);
        p.appendChild(pText);
        orangeData.appendChild(p);
    })
    let img = document.createElement("img");
    img.src = "images/subwaylineorange.png";
    orangeData.appendChild(img);
}
document.getElementById("orangeButton").addEventListener("click", orangeClick);

//function handles blue button click 
function blueClick() {
    let blueData = document.getElementById("lineData");
    blueData.innerHTML = null;
    data.subwayData.blueLine.forEach(stop => {
        let p = document.createElement("p");
        let pText = document.createTextNode(stop.stopName);
        p.appendChild(pText);
        blueData.appendChild(p);
    })
    data.subwayData.blueLine.forEach(stop => {
        let p = document.createElement("p");
        let pText = document.createTextNode(stop.time);
        p.appendChild(pText);
        blueData.appendChild(p);
    })
    let img = document.createElement("img");
    img.src = "images/subwaylineblue.png";
    blueData.appendChild(img);
}
document.getElementById("blueButton").addEventListener("click", blueClick);

//function handles red button click 
function redClick() {
    let redData = document.getElementById("lineData");
    redData.innerHTML = null;
    data.subwayData.redLine.forEach(stop => {
        let p = document.createElement("p");
        let pText = document.createTextNode(stop.stopName);
        p.appendChild(pText);
        redData.appendChild(p);
    })
    data.subwayData.redLine.forEach(stop => {
        let p = document.createElement("p");
        let pText = document.createTextNode(stop.time);
        p.appendChild(pText);
        redData.appendChild(p);
    })
    let img = document.createElement("img");
    img.src = "images/subwayMapRed.png";
    redData.appendChild(img);
}
document.getElementById("redButton").addEventListener("click", redClick);
