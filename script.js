//Display current date and time

$(document).ready(function() {
    init();
  
    function init() {
      dynamicTime()
    }
    var currentTime = moment().format('LLL');


function dynamicTime() {
    $("#currentTime").text(currentTime);
    setInterval(dynamicTime, 1000);
    
    //console.log(dynamicTime());
 } 

//color code blocks based on past/present/future
var currentHourInt = parseInt(moment().format('H'));

var timeIDs = $('#schedule-table tr[id]')
      .map(function() {
        return this.id;
      })
      .get();

for (var i = 0; i < timeIDs.length; i++) {
    var timeIDsInt = parseInt(timeIDs[i]);
    //console.log(timeIDsInt)

    if (timeIDsInt < currentHourInt) {
        $('#' + timeIDs[i])
          .find('textarea')
          .css('background-color', 'rgb(183, 199, 216)');
      } else if (timeIDsInt === currentHourInt) {
        $('#' + timeIDs[i])
          .find('textarea')
          .css('background-color', '#fc7c73');
      } else {
        $('#' + timeIDs[i])
          .find('textarea')
          .css('background-color', '#6ef55c');
      }
    }

    //Save input into local storage
    
    function saveTask() {
    var textInput = $(this)
    .closest('tr')
    .find('textarea')
    .val();
   
    localStorage.setItem('task', textInput);
        return(textInput)
    }

   $('.save-button').on('click', saveTask)
    
   

})
