var noon = 12;
var evening = 6; // 6PM
var wakeupTime = 7; // 7AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 3; // 3PM

// NEW FUNCTION & CALLING IT //
// CODE TO GET STORE REAL TIME //
var time = new Date().getHours();
 
var updateClock = function() 
{
 
// the rest of the LOLCat code you wrote up until this step
// ADD NEW VARIABLES AND FUNCTION CODES HERE //

// MESSAGE TEXT FOR TIME OUTPUT HERE //

var whatTimeIsItJS = document.getElementById('timeEvent');
var messageText;

// IMAGE FOR TIME OUTPUT HERE //
var lolcat = document.getElementById('lolcat');
var image = "https://i.postimg.cc/Zn0Sn507/frodo-main.jpg";

// PARTY TIME BUTTON VARIABLE HERE //
var isPartyTime = false;


// START TIMED FUNCTIONS HERE //
if (time == partyTime){
	
    image = "https://i.postimg.cc/fR9TbmKG/partee-cat.jpg";
    messageText = "IT'S PARTEE TIME!!";

} else if (time == napTime) {	

    image = "https://i.postimg.cc/Y0wbhXXv/frodo-nap.jpg";
    messageText = "IT'S NAP TIME...";
  
} else if (time == lunchTime) {	
    image = "https://i.postimg.cc/HLkWX6MK/kitty-lunch.jpg";
    messageText = "IT'S NOM NOM NOM TIME!!";
  
} else if (time == wakeupTime) {	
    image = "https://i.postimg.cc/MTpk3p06/group-wakeup.jpg";
    messageText = "IT'S TIME TO GET UP.";
  
} else if (time < noon) {

    messageText = "Good morning!";
  
  
} else if (time > evening) {

    messageText = "Good Evening!";
  
} else {

    messageText = "Good afternoon!";
}

// MOVED THE BOTTOM OF CODE UP WHEN ADDED "CLOCK TIME KEEPERS"

// TIME TEXT CALL OUT HERE //
whatTimeIsItJS.innerText = messageText;

// TIME IMAGE CALL OUT HERE //
lolcat.src = image;

 
showCurrentTime();
 
};

// CLOCK TIME KEEPERS //
var showCurrentTime = function()

{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

updateClock();
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

    var isPartyTime = false;
    
    var partyEvent = function() {
    
    if (isPartyTime === false) {
        isPartyTime = true;
        time = partyTime;
        // text in the button should read "Party Over"
        // color of the button should be "#0A8DAB" (bonus!)
    }
    else {
        isPartyTime = false;
        time = new Date().getHours();
        // text in the button should read "PARTY TIME!"
        // color of the button should be "#222" (bonus!)
    }
    };