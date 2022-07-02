// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // Allows the save button to work properly, listens for user to click on, then runs function to save.
    $(".saveBtn").on("click", function () {
        // Get nearby values of the work in JQuery
        var text = $(this).siblings(".work").val();
        var time = $(this).parent().attr("id");

        // LOCAL STORAGE- SAVES TEXT
        localStorage.setItem(time, text);
    })
   
    function timeRecorder() {
        // GETS CURRENT TIME
        var currentTime = moment().hour();

        // loop over time blocks
        $(".hourRow").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // LOCAL STORAGE, RETRIEVING ITEM IF THERE IS ANY LOCALSTORAGE WRITTEN
    $("#hour9 .work").val(localStorage.getItem("hour9"));
    $("#hour10 .work").val(localStorage.getItem("hour10"));
    $("#hour11 .work").val(localStorage.getItem("hour11"));
    $("#hour12 .work").val(localStorage.getItem("hour12"));
    $("#hour13 .work").val(localStorage.getItem("hour13"));
    $("#hour14 .work").val(localStorage.getItem("hour14"));
    $("#hour15 .work").val(localStorage.getItem("hour15"));
    $("#hour16 .work").val(localStorage.getItem("hour16"));
    $("#hour17 .work").val(localStorage.getItem("hour17"));

    timeRecorder();
})