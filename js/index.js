$('document').ready(function(){
    $('.to-do-1').text(localStorage.getItem("hour-1"));
    $('.to-do-2').text(localStorage.getItem("hour-2"));
    $('.to-do-3').text(localStorage.getItem("hour-3"));
    $('.to-do-4').text(localStorage.getItem("hour-4"));
    $('.to-do-5').text(localStorage.getItem("hour-5"));
    $('.to-do-6').text(localStorage.getItem("hour-6"));
    $('.to-do-7').text(localStorage.getItem("hour-7"));
    $('.to-do-8').text(localStorage.getItem("hour-8"));
    $('.to-do-9').text(localStorage.getItem("hour-9"));
    checkTime();
})
var m = moment();
var time = ['.time-1','.time-2', '.time-3', '.time-4', '.time-5', '.time-6', '.time-7', '.time-8', '.time-9'];
var toDo = ['.to-do-1', '.to-do-2', '.to-do-3', '.to-do-4', '.to-do-5', '.to-do-6', '.to-do-7', '.to-do-8', '.to-do-9'];
var currentHr = m.hour();
var scheduleTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];


$('.current-time').text(moment().format("dddd MMMM DD"));


var checkTime = function(){
    
    for(var i = 0; i <= 8; i++){
        $(time[i]).text(m.hour(scheduleTime[i]).format("hh a"));
        

        if ($(time[i]).text() === moment().format('hh a')){
            $(toDo[i]).css("background-color", "#FFEAC9");
        }else if(moment().hour(currentHr) > moment().hour(scheduleTime[i])){
            $(toDo[i]).css("background-color", "#66DE93");
        }else if(moment().hour(currentHr) < moment().hour(scheduleTime[i])){
            $(toDo[i]).css("background-color", "#C6B4CE");
        };
        
    };
};




$('.save-btn-1').on("click", function(){
    localStorage.setItem("hour-1", $('.to-do-1').text());
});

$('.save-btn-2').on("click", function(){
    localStorage.setItem("hour-2", $('.to-do-2').text());
});

$('.save-btn-3').on("click", function(){
    localStorage.setItem("hour-3", $('.to-do-3').text());
});

$('.save-btn-4').on("click", function(){
    localStorage.setItem("hour-4", $('.to-do-4').text());
});

$('.save-btn-5').on("click", function(){
    localStorage.setItem("hour-5", $('.to-do-5').text());
});

$('.save-btn-6').on("click", function(){
    localStorage.setItem("hour-6", $('.to-do-6').text());
});

$('.save-btn-7').on("click", function(){
    localStorage.setItem("hour-7", $('.to-do-7').text());
});

$('.save-btn-8').on("click", function(){
    localStorage.setItem("hour-8", $('.to-do-8').text());
});

$('.save-btn-9').on("click", function(){
    localStorage.setItem("hour-9", $('.to-do-9').text());
});
