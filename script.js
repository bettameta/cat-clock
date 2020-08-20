// CODE TO GET STORE REAL TIME //
var time = new Date().getHours();
// -- //
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 6; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

// ADD NEW VARIABLES AND FUNCTION CODES HERE //

// MESSAGE TEXT FOR TIME OUTPUT HERE //
var messageText;
var whatTimeIsItJS = document.getElementById('timeEvent');

// IMAGE FOR TIME OUTPUT HERE //
var lolcat = document.getElementById('lolcat');
var image = "https://i.postimg.cc/Zn0Sn507/frodo-main.jpg";

// START TIMED FUNCTIONS HERE //
if (time == partyTime){
	
    image = "https://www.zarias.com/wp-content/uploads/2016/02/71010216-funny-cat-pictures.jpg";
    messageText = "IT'S PARTEE TIME!!";

} else if (time == napTime) {	

    image = "https://i.postimg.cc/Y0wbhXXv/frodo-nap.jpg";
    messageText = "IT'S NAP TIME...";
  
} else if (time == lunchTime) {	
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
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
// TIME TEXT CALL OUT HERE //
whatTimeIsItJS.innerText = messageText;

// TIME IMAGE CALL OUT HERE //
lolcat.src = image;

// CLOCK TIME KEEPERS //