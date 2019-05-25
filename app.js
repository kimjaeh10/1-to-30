var queue_1to30 = [];
var queue_17to30 = [];
var count = 5;
var restart = false;
const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const button4 = document.getElementById("button-4");
const button5 = document.getElementById("button-5");
const button6 = document.getElementById("button-6");
const button7 = document.getElementById("button-7");
const button8 = document.getElementById("button-8");
const button9 = document.getElementById("button-9");
const button10 = document.getElementById("button-10");
const button11 = document.getElementById("button-11");
const button12 = document.getElementById("button-12");
const button13 = document.getElementById("button-13");
const button14 = document.getElementById("button-14");
const button15 = document.getElementById("button-15");
const button16 = document.getElementById("button-16");
const counter = document.getElementById("count-down");
const startButton = document.getElementById("start-button");

// Create a queue for storing nubmers 17 to 30
for (var i = 16; i <= 30; i++) {
    queue_17to30.push(i);
}

function start() {
    var queue_1to16 = []

    // Create a queue storing numbers 1 to 16 in random order
    while (queue_1to16.length < 16) {
        buttonNum = Math.floor(Math.random() * 16 + 1);
        if (!queue_1to16.includes(buttonNum)) {
            queue_1to16.push(buttonNum);
        }
    }

    // Assign initial numbers on buttons
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
        if (i == 3) {
            button3.innerHTML = input;
            button3.value = input;
        }
        if (i == 4) {
            button4.innerHTML = input;
            button4.value = input;
        }
        if (i == 5) {
            button5.innerHTML = input;
            button5.value = input;
        }
        if (i == 6) {
            button6.innerHTML = input;
            button6.value = input;
        }
        if (i == 7) {
            button7.innerHTML = input;
            button7.value = input;
        }
        if (i == 8) {
            button8.innerHTML = input;
            button8.value = input;
        }
        if (i == 9) {
            button9.innerHTML = input;
            button9.value = input;
        }
        if (i == 10) {
            button10.innerHTML = input;
            button10.value = input;
        }
        if (i == 11) {
            button11.innerHTML = input;
            button11.value = input;
        }
        if (i == 12) {
            button12.innerHTML = input;
            button12.value = input;
        }
        if (i == 13) {
            button13.innerHTML = input;
            button13.value = input;
        }
        if (i == 14) {
            button14.innerHTML = input;
            button14.value = input;
        }
        if (i == 15) {
            button15.innerHTML = input;
            button15.value = input;
        }
        if (i == 16) {
            button16.innerHTML = input;
            button16.value = input;
        }        
    }

    // Disable the start button
    startButton.disabled = true;
    startButton.classList.add("disabled");

    // First Start
    if (!restart) {
        restart = true;
        countDown();
    }
    // Restart
    else if (restart) {
        count = 5;
        countDown();
    }

    //gameplay();
}

function countDown() {
    $(counter).show();
    if (count <= 0) {
        $(counter).hide();
        enable();
        clearTimeout(r);
        return;
    }
    else {
        counter.innerHTML = count;
    }
    count--;
    r = setTimeout("countDown()", 500);
}

function disable() {
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
    button5.disabled = true;
    button6.disabled = true;
    button7.disabled = true;
    button8.disabled = true;
    button9.disabled = true;
    button10.disabled = true;
    button11.disabled = true;
    button12.disabled = true;
    button13.disabled = true;
    button14.disabled = true;
    button15.disabled = true;
    button16.disabled = true;    
}

function enable() {
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;
    button10.disabled = false;
    button11.disabled = false;
    button12.disabled = false;
    button13.disabled = false;
    button14.disabled = false;
    button15.disabled = false;
    button16.disabled = false;
    button1.classList.add("button-num");
    $(button2).hover(function () {
        $(this).toggleClass("button-num");
    });
    $(button3).hover(function () {
        $(this).toggleClass("button-num");
    });
    $(button4).hover(function () {
        $(this).toggleClass("button-num");
    });
    $(button5).hover(function () {
        $(this).toggleClass("button-num");
    });
    $(button6).hover(function () {
        $(this).toggleClass("button-num");
    });
    $(button7).hover(function () {
        $(this).toggleClass("button-num");
    });
    $(button8).hover(function () {
        $(this).toggleClass("button-num");
    });
    $(button9).hover(function () {
        $(this).toggleClass("button-num");
    });
    $(button10).hover(function () {
        $(this).toggleClass("button-num");
    });
    $(button11).hover(function () {
        $(this).toggleClass("button-num");
    });
    $(button12).hover(function () {
        $(this).toggleClass("button-num");
    });
    $(button13).hover(function () {
        $(this).toggleClass("button-num");
    });
    $(button14).hover(function () {
        $(this).toggleClass("button-num");
    });
    $(button15).hover(function () {
        $(this).toggleClass("button-num");
    });
    $(button16).hover(function () {
        $(this).toggleClass("button-num");
    });
}

function gameplay() {
    for (var i = 1; i <= 30; i++) {
        queue_1to30.push(i);
    }

    var index = 0;

    $(button1).click(function () {
        var value = button1.value;
        if (value == queue_1to30[index]) {
            console.log("found");
        }
        else {
            console.log("not found");
        }
    });
}
