//Written by William Luk
// posts data to an Adafuit.io feed
let url = 'https://io.adafruit.com/api/v2/Rickums/feeds/testdata/data';

var data = 0;
var check;
var check2;

function setup() {
}

function draw() {
}

function check() {
    var a = document.getElementById("test");
     if ((a.value == "I love Canadian snowstorms") || (a.value == "i love Canadian snowstorms") || (a.value == "I love canadian snowstorms")||(a.value == "i love canadian snowstorms")) {
        data = 1;
        console.log(data);
        sendData(data);
    } else {
        data = 0;
        console.log(data);
        sendData(data);
    }

}

function check2() {
    var a = document.getElementById("test2");
    if ((a.value == "I love Canadian snowstorms") || (a.value == "i love Canadian snowstorms") || (a.value == "I love canadian snowstorms")||(a.value == "i love canadian snowstorms")) {
        data = 1;
        console.log(data);
        sendData(data);
    } else {
        data = 0;
        console.log(data);
        sendData(data);
    }

}

function sendData(turnOn) {
    let postData = {
        "value": turnOn,
        "X-AIO-Key": "aio_QHlN62onLYjUqmGtMcEPqiE36Jth"
    };
    httpPost(url, 'json', postData, function (result) {
        console.log(result);
    });
}
