# 1 to 30
A Web-based game created with HTML, CSS, and JavaScript. How fast can you click 1 to 30?

## Preview

![Preview](https://user-images.githubusercontent.com/48369187/58526341-aaaf3080-819c-11e9-9536-c366af62fa12.png)

## Game Play
[Game Play](https://www.youtube.com/watch?v=zMFpgIZ95SA)


## Object-oriented Programming
#### StopWatch
```
var Stopwatch = function () {
    // Private vars
    var startAt = 0;	// Time of last start / resume. (0 if not running)
    var lapTime = 0;	// Time on the clock when last stopped in milliseconds

    var now = function () {
        return (new Date()).getTime();
    };

    // Public methods
    // Start or resume
    this.start = function () {
        startAt = startAt ? startAt : now();
    };

    // Stop or pause
    this.stop = function () {
        // If running, update elapsed time otherwise keep it
        lapTime = startAt ? lapTime + now() - startAt : lapTime;
        startAt = 0; // Paused
    };

    // Reset
    this.reset = function () {
        lapTime = startAt = 0;
    };

    // Duration
    this.time = function () {
        return lapTime + (startAt ? now() - startAt : 0);
    };
};
```

#### Button
```
function Button(btn) {
    this.btn = btn;
    this.found = function (arr, index) {
        if (index < 14) {
            next_value = arr[index];
            this.btn.innerHTML = next_value;
            this.btn.value = next_value;
            return index + 1;
        }
        else {
            this.btn.innerHTML = "";
            this.btn.value = "";
            return index;
        }
    }
}
```

