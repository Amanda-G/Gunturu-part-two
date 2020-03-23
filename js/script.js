
var vacationType = prompt("What type of vacation would you like to take; musical, tropical, or adventurous?");

var destination = "";

if(vacationType==="musical"){
    destination = "New Orleans.";
    document.writeln("Type: musical");
}

else if (vacationType==="tropical"){
    destination = "a beach in Mexico.";
    document.writeln("Type: tropical");
}

else if (vacationType==="adventurous"){
    destination = "whitewater rafting at the Grand Canyons.";
    document.writeln("Type: adventurous");
}

var groupSize = prompt("How many people will be going on this trip?");

var transportation = "";

if(groupSize=='1' || groupSize=='2'){
    transportation = "First Class"
    document.writeln("Travelers: " + groupSize);
}

else if(groupSize==3 || groupSize==4 || groupSize==5){
    transportation = "helicoptor";
    document.writeln("Travelers: " + groupSize);
}

else {
    transportation = "charter flight";
    document.writeln("Travelers: " + groupSize);
}

var str1 = "For a " + vacationType + " vacation, you should go to " + destination;
var str2 = " With a group of " + groupSize + " people, you should take a " + transportation + " to get there.";
    
var result = str1 .concat(str2);
console.log(result);