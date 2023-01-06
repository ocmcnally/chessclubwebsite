var i = 0;
var txt = "Chess@Brown";
var speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.querySelector("h1").textContent += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();

$(".click-sound").click(function () {
    var audio = new Audio("sounds/click.mp3");
    audio.volume = 0.25;
    audio.play();
})

$("h1").click(function () {
    var title = $("h1");
    title.addClass("h1-clicked");
    setTimeout(function () {
        title.removeClass("h1-clicked");
    }, 300);
})