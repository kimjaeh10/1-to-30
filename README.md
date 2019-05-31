# 1 to 30
A Web-based game created with HTML, CSS, and JavaScript. How fast can you click 1 to 30??

## Preview & Game Play - Clicking on the image takes you to YouTube
[![Game Play](https://user-images.githubusercontent.com/48369187/58526341-aaaf3080-819c-11e9-9536-c366af62fa12.png)](http://www.youtube.com/watch?v=zMFpgIZ95SA "1to30")


## Data Structure - Queue and Array
### 1.
```
// function gameplay()
var queue_1to30 = [1, 2, 3, ... , 28, 29, 30];

$(button1).click(function () {
    var value = button1.value;
    
    // FOUND
    if (value == queue_1to30[0]) {
        playCorrectSound(value);
        nextNumberBoard(value);
        
        // Remove the found number
        queue_1to30.shift();

        // Assign next number if available
        index = Button1.found(array_17to30, index);

        checkLastNumber(value);
    }
    
    // NOT FOUND
    else {
        playIncorrectSound();
    }
});
                .
                .
                .


```
* Compared a button's value and the first number from the queue.
* The user selects a correct button if they are equal - Remove the first number from the queue
* The user selects a wrong button if they are not equal - Keep it
* Re-create a queue when the user presses the start button.

### 2.
```
var queue_1to16 = [];

// function start()
while (queue_1to16.length < 16) {
    buttonNum = Math.floor(Math.random() * 16 + 1);
    if (!queue_1to16.includes(buttonNum)) {
        queue_1to16.push(buttonNum);
    }
}

for (var i = 1; i <= 16; i++) {
    input = queue_1to16.shift();
    if (i == 1) {
        button1.innerHTML = input;
        button1.value = input;
    }
    if (i == 2) {
        button2.innerHTML = input;
        button2.value = input;
    }
                .
                .
                .
}
```
* Created a queue storing numbers 1 to 16 in random order.
* Put all sixteen numbers back into sixteen buttons as the front number got removed from the queue.
* Re-create a queue when the user presses the start button.

### 3.
```
var array_17to30 = [17, 18, ... 29, 30];

// Button object
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

// function gameplay()
$(button1).click(function () {
    var value = button1.value;
    
    // FOUND
    if (value == queue_1to30[0]) {
        playCorrectSound(value);
        nextNumberBoard(value);
        
        // Remove the found number
        queue_1to30.shift();

        // Assign next number if available
        index = Button1.found(array_17to30, index);

        checkLastNumber(value);
    }
    
    // NOT FOUND
    else {
        playIncorrectSound();
    }
});
                .
                .
                .

```
* It can be a queue if passing by reference were allowed in JavaScript.
* Parameter for function found() to update the next number after clicking a correct button.
* As the number gets updated, an index increases by 1 (moving on to the next number)


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

