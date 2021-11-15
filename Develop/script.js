$(document).ready(function() {
    function dateUpdater () {
        var today = moment();
        $("#currentDay").text(today.format("MMM Do, YYYY"));
    }

    function timeBlockUpdater () {
        var currHour = moment().hour();

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
        $(".time-block").each(function(index) {
            var timeBlockID =  $(this).attr("id"),
            timeBlockText = $(this).children("textarea"),
            timeBlockStorage = localStorage.getItem(JSON.stringify(timeBlockID));
            militaryTime = index + 9;
            
            if (timeBlockID == militaryTime) {
                timeBlockText.html(JSON.parse(timeBlockStorage));
            }

            else {
                console.log("error");
            };
        });
    }
   
    $(".saveBtn").on("click", function() {
        var inputVal = JSON.stringify($(this).siblings("textarea")[0].value),
        inputTime = JSON.stringify($(this).parent().attr("id"));

        localStorage.setItem(inputTime, inputVal);
    });

    dateUpdater();
    timeBlockUpdater();
    timeBlockSetter();
});