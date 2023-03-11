// this function is called every time the mouse wheel is scrolled
function carouselScrollDown() {
    $('.carousel').on('scroll mousewheel', function (e) {
        e.preventDefault();
        document.body.style.overflowX = 'hidden';
    });
    $('.carousel').carousel('next')

}

function carouselScrollUp() {
    $('.carousel').carousel('prev')
}

// select the carousel container
//if you declare the script before the body, it calls the function even though rest of page hasn't rendered, therefore
//use onload function
window.onload = (function () {
    var wheel = document.getElementById('carouselSlide');
    wheel.addEventListener('wheel', function (event) {
        if (event.deltaY > 0) {
            carouselScrollDown();
        } else {
            carouselScrollUp();
        }
    });
    
    var w = document.documentElement.clientWidth || window.innerWidth;
    if (w <= 480) {
        var element = document.getElementById("carousel-item-mobile");
        element.classList.add("active");
    } else {
        var element = document.getElementById("carousel-item-desktop");
        element.classList.add("active");
    }
});