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

    function timeBlockSetter (save) {
            var save = JSON.parse(localStorage.getItem(inputTime));
            console.log(save);
        $(".time-block").each(function() {
            
            console.log(save)

            
        })
    }
   
    $(".saveBtn").on("click", function() {
        var inputVal = JSON.stringify($(this).siblings("textarea")[0].value),
        inputTime = JSON.stringify($(this).parent().attr("id"));

        var inputSave = localStorage.setItem(inputTime, inputVal);
        // console.log(JSON.parse(localStorage.getItem(inputTime)));
        timeBlockSetter(inputSave);
    });

     
    dateUpdater();
    timeBlockUpdater();
    // 
    

    
});