//Display current date and time

$(document).ready(function() {
    init();
  
    function init() {
      setInterval(dynamicTime, 1000);
      displayText()
    }
 
  //Display local storage values in text area
function displayText() {
  
  let timeBlocks = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
  let textIDs = [$("#area-9"),$("#area-10"),$("#area-11"),$("#area-12"),$("#area-13"),$("#area-14"),$("#area-15"),$("#area-16"),$("#area-17")]
  
  for(i=0; i<timeBlocks.length; i++) {
    textIDs[i].text(localStorage.getItem(timeBlocks[i]))
    }   
  }



function dynamicTime() {
  var currentTime = moment().format('LLL');

  $("#currentTime").text(currentTime);
    
    
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
          .css('background-color', 'ivory');
      } else {
        $('#' + timeIDs[i])
          .find('textarea')
          .css('background-color', 'rgba(233, 77, 77, 0.925');
      }
    }

    //Save input into local storage on click
    
    function saveTask(event) {
      //console.log(event)
    var textInput = $(this)
    .closest('tr')
    .find('textarea')
    .val();
   
    localStorage.setItem(event.target.id, textInput);
    }

   $('.save-button').on('click', saveTask)
    
   

})
