/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function togNav() {
    var x = document.getElementsByClassName("navbar");
    var i = 0;


    if (x[i].style.width < '10%') {
        openNav();
    } else {
        closeNav();
    }
}


function openNav() {

    var x = document.getElementsByClassName("navbar");
    var i = 0;

        if ($(window).width() > 960) {

            for (i = 0; i < x.length; i++) {
                x[i].style.width = '25%';

            }

        } else {
            for (i = 0; i < x.length; i++) {
                x[i].style.width = '80%';
            }
        }

        var y = document.getElementsByClassName("sidenav-link");
        var i;
        for (i = 0; i < y.length; i++) {
            y[i].style.visibility = "visible";
        }

        document.getElementById("overlay").style.visibility = "visible";
        document.getElementById("cont").style.marginLeft = "25%";
        document.getElementsByTagName("html")[0].style.overflowX = "hidden";

}

function closeNav() {
    var y = document.getElementsByClassName("sidenav-link");
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].style.visibility = "hidden";
    }
    var x = document.getElementsByClassName("navbar");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.width = '0%';
    }


    document.getElementById("overlay").style.visibility = "hidden";
    document.getElementById("cont").style.overflow = "visible";
    document.getElementById("cont").style.marginLeft = "0%";

}

function hover(element) {
    element.setAttribute('src', 'img/common/menu-hover.png');
}

function unhover(element) {
    element.setAttribute('src', 'img/common/menu.png');
}
