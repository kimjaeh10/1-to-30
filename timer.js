StopWatch = function () {
    var startAt = 0;

    var now = function () {
        return (new Data()).getTime();
    };

    this.time = function () {
        return now() - startAt;
    }
}

function pad(num, digit) {
    var s = "0000" + num;
    return s.substr(s.length - digit);
}

function foramtTime(time) {
    var m = s = ms = 0;
    var newTime = '';

    h = Math.floor(time / (60 * 1000));
    time = time % (60 * 1000);
    s = Math.floor(time / 1000);
    ms = time % 1000;

    newTime = pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 2);
    return newTime;

}

const timer = document.getElementById("time");
var clocktimer;
var t = new StopWatch();

function update() {
    timer.innerHTML = foramtTime(t.time());
}

function start() {
    clocktimer = setInterval("update()", 1);
}

function stop() {
    clearInterval(clocktimer);
}

function reset() {
    this.startAt = 0;
    update();
}