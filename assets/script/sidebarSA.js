$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#carouselCon').toggleClass('active');
        $('#card-con').toggleClass('active');
        $('#btnVote').toggleClass('active');
        $('#realtime').toggleClass('active');
    });

});