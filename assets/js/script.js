
// TODO Save reference to necessary DOM elements
// What IDs and Classes were used on the modal form so we can capture the values?
    var curTimeEl = $('#time-display')
    var date
    var modalTitleEl = $(".modal-title")
    var datepickerel = $( "#datepicker" )
    console.log(datepickerel)
    console.log(curTimeEl.text());
// TODO How do we capture the current date in the following format Feb 21, 1998 at 01:32:30 pm
    // What tools do we have to dynamically update the time every second?
    var update = function () {
        date = moment(new Date())
        curTimeEl.text(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
    };
    
    $(curTimeEl).ready(function(){
        update();
        setInterval(update, 1000);
    });
    $(".modal").delegate("#datepicker", "focusin", function(){
        $(this).datepicker();
        changeMonth:true;
        changeDay:true
    })
    $('.modal').ready(function() {
        $('#txtDate').datepicker('setDate', 'today');
    });

    
// TODO What jQuery UI interactions/widgets will be used in this project?

// TODO Research how to implement tables in Bootstrap: https://getbootstrap.com/docs/4.0/content/tables/
    // Can we create certain elements dynamically using jQuery based on user input?

// TODO What math will we need to calculate the Days Until Due Date and Potential Total Earnings columns?