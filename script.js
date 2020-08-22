var time = new Date().getHours();
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 7; // 7AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 3; // 3PM

// PARTY TIME BUTTON VARIABLE HERE //
var isPartyTime = false;

// NEW FUNCTION & CALLING IT //
// CODE TO GET STORE REAL TIME //
 
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

// ------------------------------------- //

// PARTYTIMEBUTTON LINK TO HTML  //
var partyTimeButton = document.getElementById("partyTimeButton");

// BUTTON FUNCTION //
var partyEvent = function() {
   
    if (isPartyTime === false) {
       isPartyTime = true;
       time = partyTime;

       // text in the button should read "Party Over"
       partyTimeButton.innerText="Party Over"; //* IS THIS WRONG */

       // color of the button should be "#e69447" (bonus!)
       partyTimeButton.style.backgroundColor = "#e69447";  
           
    }

    else {
       isPartyTime = false;
       time = new Date().getHours();

       // text in the button should read "PARTY TIME!"
       partyTimeButton.innerText = "Party Time!"; //* IS THIS WRONG */
       // color of the button should be "#cf39dd" (bonus!)
       partyTimeButton.style.backgroundColor = "#cf39dd";

    }
 };  

 // TIME SELECTOR VARIABLES //
 // WAKE UP //
    var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
 // LUNCH //
    var lunchTimeSelector = document.getElementById("lunchTimeSelector");
 // NAP //
    var napTimeSelector = document.getElementById("napTimeSelector");

 // FUNCTION TIME SELECTORS //

    var wakeUpEvent = function()
    {
        wakeupTime = wakeUpTimeSelector.value;
    };

    var lunchEvent = function()
    {
        lunchTime = lunchTimeSelector.value;
    };

    var napEvent = function()
    {
        napTime = napTimeSelector.value;
    };

 // EVENT LISTENERS FOR FUNCTIONS //
 // PARTY BUTTON //
    partyTimeButton.addEventListener("click", partyEvent);
 // ----------------- //
 // SET WAKE UP //
    wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
 // SET LUNCH //
    lunchTimeSelector.addEventListener("change", lunchEvent);
 // SET NAP //
    napTimeSelector.addEventListener("change", napEvent);
    