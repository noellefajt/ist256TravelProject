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
    document.getElementById("table")
    let greenStop = document.getElementById("lineStop");
    let greenTime = document.getElementById("lineTime");
    let greenImg = document.getElementById("linePhoto");
    greenStop.innerHTML = null;
    greenTime.innerHTML = null;
    greenImg.innerHTML = null;

    data.subwayData.greenLine.forEach(stop => {
        //prints out stop name 
        let p = document.createElement("p")
        let pText = document.createTextNode(stop.stopName);
        p.classList.add("border");
        p.appendChild(pText);
        greenStop.appendChild(p);

        //prints out stop time
        let t = document.createElement("p");
        let tText = document.createTextNode(stop.time);
        t.classList.add("border");
        t.appendChild(tText);
        greenTime.appendChild(t);
    })

    let img = document.createElement("img");
    img.src = "images/subwaylinegreen.png";
    greenImg.appendChild(img);
}
document.getElementById("greenButton").addEventListener("click", greenClick);

//function handles orange button clicks  
function orangeClick() {
    let orangeStop = document.getElementById("lineStop");
    let orangeTime = document.getElementById("lineTime");
    let orangeImg = document.getElementById("linePhoto");
    orangeStop.innerHTML = null;
    orangeTime.innerHTML = null;
    orangeImg.innerHTML = null;


    data.subwayData.orangeLine.forEach(stop => {
        let p = document.createElement("p");
        let pText = document.createTextNode(stop.stopName);
        p.classList.add("border");
        p.appendChild(pText);
        orangeStop.appendChild(p);

        //prints out stop time
        let t = document.createElement("p");
        let tText = document.createTextNode(stop.time);
        t.classList.add("border");
        t.appendChild(tText);
        orangeTime.appendChild(t);
    })

    let img = document.createElement("img");
    img.src = "images/subwaylineorange.png";
    orangeImg.appendChild(img);
}
document.getElementById("orangeButton").addEventListener("click", orangeClick);

//function handles blue button click 
function blueClick() {
    let blueStop = document.getElementById("lineStop");
    let blueTime = document.getElementById("lineTime");
    let blueImg = document.getElementById("linePhoto");
    blueStop.innerHTML = null;
    blueTime.innerHTML = null;
    blueImg.innerHTML = null;

    data.subwayData.blueLine.forEach(stop => {
        let p = document.createElement("p");
        let pText = document.createTextNode(stop.stopName);
        p.classList.add("border");
        p.appendChild(pText);
        blueStop.appendChild(p);

        //prints out stop time
        let t = document.createElement("p");
        let tText = document.createTextNode(stop.time);
        t.classList.add("border");
        t.appendChild(tText);
        blueTime.appendChild(t);
    })

    let img = document.createElement("img");
    img.src = "images/subwaylineblue.png";
    blueImg.appendChild(img);
}
document.getElementById("blueButton").addEventListener("click", blueClick);

//function handles red button click 
function redClick() {
    let redStop = document.getElementById("lineStop");
    let redTime = document.getElementById("lineTime");
    let redImg = document.getElementById("linePhoto");
    redStop.innerHTML = null;
    redTime.innerHTML = null;
    redImg.innerHTML = null;

    data.subwayData.redLine.forEach(stop => {
        let p = document.createElement("p");
        let pText = document.createTextNode(stop.stopName);
        p.classList.add("border");
        p.appendChild(pText);
        redStop.appendChild(p);

        //prints out stop time
        let t = document.createElement("p");
        let tText = document.createTextNode(stop.time);
        t.classList.add("border");
        t.appendChild(tText);
        redTime.appendChild(t);
    })

    let img = document.createElement("img");
    img.src = "images/subwayMapRed.png";
    redImg.appendChild(img);
}
document.getElementById("redButton").addEventListener("click", redClick);
