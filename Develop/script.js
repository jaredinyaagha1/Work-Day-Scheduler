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
        JSON.parse(localStorage.getItem(inputTime));

        $(".time-block").each(function() {
            
            if ($(this).attr("id") === inputTime) {
                $(this).children("textarea")[0].value = localStorage.getItem(inputTime);
            }


            
        })
    }
   
    $(".saveBtn").on("click", function() {
        var inputVal = JSON.stringify($(this).siblings("textarea")[0].value),
        inputTime = JSON.stringify($(this).parent().attr("id"));

       localStorage.setItem(inputTime, inputVal);
        // console.log(JSON.parse(localStorage.getItem(inputTime)));
        // timeBlockSetter(inputSave);
    });

     
    dateUpdater();
    timeBlockUpdater();
    timeBlockSetter();
    

    
});