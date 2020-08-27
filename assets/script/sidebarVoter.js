$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#carouselCon').toggleClass('active');
        $('#btnVote').toggleClass('active');
    });

});