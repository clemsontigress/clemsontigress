//Display current date and time

$(document).ready(function() {
    init();
  
    function init() {
      dynamicTime()
    }


function dynamicTime() {
    
    var currentTime = moment().format('LLL');
    $("#currentTime").text(currentTime);
    setInterval(dynamicTime, 1000);
    console.log(currentTime)
    console.log(dynamicTime)
 } 






})
