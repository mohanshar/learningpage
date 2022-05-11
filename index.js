$(document).ready(function () {

    $('#hm').on("click", function () {
        $('#inf').removeClass('active');
        $('#ab').removeClass('active');
        $('#song').removeClass('active');
        $('#hm').addClass('active');
        $('#home').slideDown();
        $('#about').slideUp();
        $('#info').slideUp();
        $('#song1').slideUp();
    });

    $('#inf').on("click", function () {
        $('#inf').addClass('active');
        $('#ab').removeClass('active');
        $('#song').removeClass('active');
        $('#hm').removeClass('active');
        $('#home').slideUp();
        $('#about').slideUp();
        $('#info').slideDown();
        $('#song1').slideUp();
    });

    $('#ab').on("click", function () {
        $('#inf').removeClass('active');
        $('#ab').addClass('active');
        $('#song').removeClass('active');
        $('#hm').removeClass('active');
        $('#home').slideUp();
        $('#about').slideDown();
        $('#info').slideUp();
        $('#song1').slideUp();
    });

    $('#song').on("click", function () {
        $('#inf').removeClass('active');
        $('#ab').removeClass('active');
        $('#song').addClass('active');
        $('#hm').removeClass('active');
        $('#home').slideUp();
        $('#about').slideUp();
        $('#info').slideUp();
        $('#song1').slideDown();
    });

});

function playPause() {

    var w = document.getElementById("pause");
    var y = document.getElementById("myAudio1");

    var fa = document.querySelector('.fa-pause')
    var z = document.getElementById("myAudio");

    if (y.paused || w.innerHTML === 'Play Music' && y.paused || fa.classList.toggle('fa-play')) {
        y.play();
        w.innerHTML = 'Pause Music';
        fa.classList.toggle('fa-pause');
        z.pause();
    }
    else if (w.innerHTML === 'Pause Music' || y.paused && w.innerHTML === 'Pause Music' || fa.classList.toggle('fa-play')) {
        w.innerHTML = 'Play Music';
        y.pause();
        fa.classList.toggle('fa-pause');
        z.pause();
    }

    else {

    }
}

function myFunction() {

    var fa = document.querySelector('.fa-play') // Using a class instead, see note below.
    fa.classList.toggle('fa-pause');

    var z = document.getElementById("myAudio");
    var w = document.getElementById("pause");
    var y = document.getElementById("myAudio1");

    if (z.paused || w.innerHTML === 'Pause Music') {
        z.play();
        y.pause();
        w.innerHTML = 'Play Music';
    }
    else {
        z.pause();
        w.innerHTML = 'Pause Music';
    }
}
