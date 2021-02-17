function CountDownTimer(dt, display)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
        document.getElementById("time").style.fontSize = "100px";
        display.textContent = days + ":" + hours + ":" + minutes + ":" + seconds;
    }

    timer = setInterval(showRemaining, 1000);
}

window.onload = function () {
        document.getElementById("time").style.fontSize = "100px";
        display = document.querySelector('#time');  
    CountDownTimer('10/30/2020 2:1 AM', display);

};
