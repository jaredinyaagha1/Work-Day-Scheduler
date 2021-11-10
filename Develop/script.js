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
    dateUpdater();

    timeBlockUpdater();
    
    $(".saveBtn").on("click", function() {
        var textVal =0,
        textTime = 0;

        localStorage.setItem($(this).siblings(".description"), textVal);
        localStorage.setItem($(this).parent("id"), textTime)
        console.log(textVal, textTime)
    });







});