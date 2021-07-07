$('document').ready(function(){
    $('.to-do-1').text(localStorage.getItem("hr-1"));
    $('.to-do-2').text(localStorage.getItem("hr-2"));
    $('.to-do-3').text(localStorage.getItem("hr-3"));
    $('.to-do-4').text(localStorage.getItem("hr-4"));
    $('.to-do-5').text(localStorage.getItem("hr-5"));
    $('.to-do-6').text(localStorage.getItem("hr-6"));
    $('.to-do-7').text(localStorage.getItem("hr-7"));
    $('.to-do-8').text(localStorage.getItem("hr-8"));
    $('.to-do-9').text(localStorage.getItem("hr-9"));
})

$('.save-btn-1').on("click", function(){
    localStorage.setItem("hr-1", $('.to-do-1').text());
});

$('.save-btn-2').on("click", function(){
    localStorage.setItem("hr-2", $('.to-do-2').text());
});

$('.save-btn-3').on("click", function(){
    localStorage.setItem("hr-3", $('.to-do-3').text());
});

$('.save-btn-4').on("click", function(){
    localStorage.setItem("hr-4", $('.to-do-4').text());
});

$('.save-btn-5').on("click", function(){
    localStorage.setItem("hr-5", $('.to-do-5').text());
});

$('.save-btn-6').on("click", function(){
    localStorage.setItem("hr-6", $('.to-do-6').text());
});

$('.save-btn-7').on("click", function(){
    localStorage.setItem("hr-7", $('.to-do-7').text());
});

$('.save-btn-8').on("click", function(){
    localStorage.setItem("hr-8", $('.to-do-8').text());
});

$('.save-btn-9').on("click", function(){
    localStorage.setItem("hr-9", $('.to-do-9').text());
});
