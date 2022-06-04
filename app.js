function realtimeClock() {
    var newClock = new Date();

    var hours = newClock.getHours();
    var minutes = newClock.getMinutes();
    var seconds = newClock.getSeconds();
    var day = newClock.getDay();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];



    var amPm = (hours < 12) ? "AM" : "PM";

    hours = (hours > 12) ? hours - 12 : hours;

    hours = ("00" + hours).slice(-2);
    minutes = ("00" + minutes).slice(-2);
    seconds = ("00" + seconds).slice(-2);

    document.getElementById('clock').innerHTML = days[day] + " : " + hours + " : " + minutes+ " :" + seconds;

    var updateClock = setTimeout(realtimeClock, 1000);
}
