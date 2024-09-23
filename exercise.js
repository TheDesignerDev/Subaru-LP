// Add any required JS here

// Smooth scrolling for internal links
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});

