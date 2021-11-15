$(document).ready(function() {
    function dateUpdater () {
        var today = moment();
        $("#currentDay").text(today.format("MMM Do, YYYY"));
    }

    function timeBlockUpdater () {
        var currHour = moment().hour();
        // 
        $(".time-block").each(function() {
            var timeBlockHour = parseInt($(this).attr("id"));

            if (timeBlockHour < currHour) {
                $(this).addClass("past");
            } else if (timeBlockHour === currHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

    function timeBlockSetter () {

        $(".time-block").each(function() {
            var timeBlockID =  JSON.stringify($(this).attr("id")),
            timeBlockText = $(this).children("textarea")[0],
            timeBlockStorage = localStorage.getItem(timeBlockID);
            
            if (timeBlockID) {
                console.log("keys: " + Object.keys(timeBlockStorage), "value: " + timeBlockStorage);
                // console.log(timeBlockID);
                // console.clear
                // timeBlockText.text(timeBlockStorage)
            }

            else {
                console.log("error");
            }

            
        })
    }
   
    $(".saveBtn").on("click", function() {
        var inputVal = JSON.stringify($(this).siblings("textarea")[0].value),
        inputTime = JSON.stringify($(this).parent().attr("id"));

        localStorage.setItem(inputTime, inputVal);
        // console.log(inputTime);
        timeBlockSetter();

    });

     
    dateUpdater();
    timeBlockUpdater();
    timeBlockSetter();
    
    
});