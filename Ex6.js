var clockInterval; 
 
function q1() { 
    clockInterval = setInterval(Clock, 1000); 
} 
 
function Clock() {     let d = new Date(); 
    var time = d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();     document.getElementById("clock").innerHTML = time; 
    document.getElementById("stop").innerHTML = "<button class=\"btn btndanger mt-3\" onclick=\"q1Stop()\">Stop</button>"; 
 
} 
 
function q1Stop() {     clearInterval(clockInterval); 
} 
 
 
//Q2 
 
var bgc = null; 
 
function q2() { 
    bgc = setInterval(bg, 500); 
} 
 
function bg() { 
    var div = document.getElementById('bg'); 
 
    if (div.style.backgroundColor === 'aqua')         div.style.backgroundColor = 'teal';     else 
        div.style.backgroundColor = 'aqua'; 
 
} 
 
function q2Stop() {     clearInterval(bgc); 
}
//Q3 
function inc() { 
    var div = document.getElementById('font');     document.getElementById('font').style = "font-size:50px"; 
} 
 
function dec() { 
    var div = document.getElementById('font');     document.getElementById('font').style = "font-size:28px"; 
 
} 
 
var interval; 
 
function q4Start() { 
    car = document.getElementById("car");     interval = setInterval(q4Move, 20); 
 
} 
 
function q4Stop() {     clearInterval(interval); 
} 
 
function q4Move() { 
 
    car.style.left = parseInt(car.style.left) + 2 + "px";     console.log(parseInt(car.style.left) > parseInt(screen.width))    
     if (parseInt(car.style.left) > parseInt(screen.width)) {         car.style.left = "0px"; 
    } 
}
 
function q5() { 
    document.getElementById("bfr").innerHTML = "Before 2000";     document.getElementById("aft").innerHTML = "After 2000";     let student = [{ name: "Udhaya", regNo: "URK20CS2111", dob: 
"08/Apr/2003" }, 
        { name: "Alex", regNo: "URK20CS2099", dob: "5/May/" }, 
        { name: "Mia", regNo: "URK20CS2058", dob: "11/Jul/1991" }, 
        { name: "Marshal", regNo: "URK20CS2011", dob: "20/Dec/2004" }, 
        { name: "Aaron", regNo: "URK20CS3009", dob: "26/Feb/1990" }, 
    ] 
    for (let i = 0; i < student.length; i++) { 
        if (parseInt(student[i].dob.split("/")[2]) < 2000) { 
            document.getElementById("before").innerHTML += student[i].name + "\'s " + "Register Number is " + student[i].regNo + " and the DOB is " + student[i].dob + "<br><br>"; 
        } else 
            document.getElementById("after").innerHTML += student[i].name + "\'s " + "Register Number is " + student[i].regNo + " and the DOB is " + student[i].dob + "<br><br>"; 
 
    } 
} 
