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
const lastNumber = document.getElementById("last-number");
const currentNumber = document.getElementById("current-number");
const nextNumber = document.getElementById("next-number");

// Object-oriented programming - Have to figure out how to pass by reference in JavaScript
/*
function Button(btn) {
    this.btn = btn;
    this.found = function (value, queue) {
        console.log(this);
    }
}

var Button1 = new Button(button1);
var Button2 = new Button(button2);
var Button3 = new Button(button3);
var Button4 = new Button(button4);
var Button5 = new Button(button5);
var Button6 = new Button(button6);
var Button7 = new Button(button7);
var Button8 = new Button(button8);
var Button9 = new Button(button9);
var Button10 = new Button(button10);
var Button11 = new Button(button11);
var Button12 = new Button(button12);
var Button13 = new Button(button13);
var Button14 = new Button(button14);
var Button15 = new Button(button15);
var Button16 = new Button(button16);

Button1.found();
*/

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

    gameplay();
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
    button1.classList.remove("button-num");
    button2.classList.remove("button-num");
    button3.classList.remove("button-num");
    button4.classList.remove("button-num");
    button5.classList.remove("button-num");
    button6.classList.remove("button-num");
    button7.classList.remove("button-num");
    button8.classList.remove("button-num");
    button9.classList.remove("button-num");
    button10.classList.remove("button-num");
    button11.classList.remove("button-num");
    button12.classList.remove("button-num");
    button13.classList.remove("button-num");
    button14.classList.remove("button-num");
    button15.classList.remove("button-num");
    button16.classList.remove("button-num");
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
    button2.classList.add("button-num");
    button3.classList.add("button-num");
    button4.classList.add("button-num");
    button5.classList.add("button-num");
    button6.classList.add("button-num");
    button7.classList.add("button-num");
    button8.classList.add("button-num");
    button9.classList.add("button-num");
    button10.classList.add("button-num");
    button11.classList.add("button-num");
    button12.classList.add("button-num");
    button13.classList.add("button-num");
    button14.classList.add("button-num");
    button15.classList.add("button-num");
    button16.classList.add("button-num");
}

function gameplay() {
    // Reset next number board
    lastNumber.innerHTML = " ";
    currentNumber.innerHTML = 1;
    nextNumber.innerHTML = 2;

    // Create a queue for storing numbers 1 to 30
    for (var i = 1; i <= 30; i++) {
        queue_1to30.push(i);
    }

    // Create a queue for storing nubmers 17 to 30
    for (var i = 17; i <= 30; i++) {
        queue_17to30.push(i);
    }

    var index = 0;

    $(button1).click(function () {
        var value = button1.value;
        if (value == queue_1to30[index]) {
            console.log("found");
            nextNumberBoard(value);
            // Remove the found number
            queue_1to30.shift();

            // Assign next number if available
            if (queue_17to30 && queue_17to30.length) {
                next_value = queue_17to30.shift()
                button1.innerHTML = next_value;
                button1.value = next_value;
            }
            else {
                button1.innerHTML = "";
                button1.value = "";
            }

            checkLastNumber(value);
        }
        else {
            console.log("not found");
        }
    });

    $(button2).click(function () {
        var value = button2.value;
        if (value == queue_1to30[index]) {
            console.log("found");
            nextNumberBoard(value);
            // Remove the found number
            queue_1to30.shift();

            // Assign next number if available
            if (queue_17to30 && queue_17to30.length) {
                next_value = queue_17to30.shift()
                button2.innerHTML = next_value;
                button2.value = next_value;
            }
            else {
                button2.innerHTML = "";
                button2.value = "";
            }

            checkLastNumber(value);
        }
        else {
            console.log("not found");
        }
    });

    $(button3).click(function () {
        var value = button3.value;
        if (value == queue_1to30[index]) {
            console.log("found");
            nextNumberBoard(value);
            // Remove the found number
            queue_1to30.shift();

            // Assign next number if available
            if (queue_17to30 && queue_17to30.length) {
                next_value = queue_17to30.shift()
                button3.innerHTML = next_value;
                button3.value = next_value;
            }
            else {
                button3.innerHTML = "";
                button3.value = "";
            }

            checkLastNumber(value);
        }
        else {
            console.log("not found");
        }
    });

    $(button4).click(function () {
        var value = button4.value;
        if (value == queue_1to30[index]) {
            console.log("found");
            nextNumberBoard(value);
            // Remove the found number
            queue_1to30.shift();

            // Assign next number if available
            if (queue_17to30 && queue_17to30.length) {
                next_value = queue_17to30.shift()
                button4.innerHTML = next_value;
                button4.value = next_value;
            }
            else {
                button4.innerHTML = "";
                button4.value = "";
            }

            checkLastNumber(value);
        }
        else {
            console.log("not found");
        }
    });

    $(button5).click(function () {
        var value = button5.value;
        if (value == queue_1to30[index]) {
            console.log("found");
            nextNumberBoard(value);
            // Remove the found number
            queue_1to30.shift();

            // Assign next number if available
            if (queue_17to30 && queue_17to30.length) {
                next_value = queue_17to30.shift()
                button5.innerHTML = next_value;
                button5.value = next_value;
            }
            else {
                button5.innerHTML = "";
                button5.value = "";
            }

            checkLastNumber(value);
        }
        else {
            console.log("not found");
        }
    });

    $(button6).click(function () {
        var value = button6.value;
        if (value == queue_1to30[index]) {
            console.log("found");
            nextNumberBoard(value);
            // Remove the found number
            queue_1to30.shift();

            // Assign next number if available
            if (queue_17to30 && queue_17to30.length) {
                next_value = queue_17to30.shift()
                button6.innerHTML = next_value;
                button6.value = next_value;
            }
            else {
                button6.innerHTML = "";
                button6.value = "";
            }

            checkLastNumber(value);
        }
        else {
            console.log("not found");
        }
    });

    $(button7).click(function () {
        var value = button7.value;
        if (value == queue_1to30[index]) {
            console.log("found");
            nextNumberBoard(value);
            // Remove the found number
            queue_1to30.shift();

            // Assign next number if available
            if (queue_17to30 && queue_17to30.length) {
                next_value = queue_17to30.shift()
                button7.innerHTML = next_value;
                button7.value = next_value;
            }
            else {
                button7.innerHTML = "";
                button7.value = "";
            }

            checkLastNumber(value);
        }
        else {
            console.log("not found");
        }
    });

    $(button8).click(function () {
        var value = button8.value;
        if (value == queue_1to30[index]) {
            console.log("found");
            nextNumberBoard(value);
            // Remove the found number
            queue_1to30.shift();

            // Assign next number if available
            if (queue_17to30 && queue_17to30.length) {
                next_value = queue_17to30.shift()
                button8.innerHTML = next_value;
                button8.value = next_value;
            }
            else {
                button8.innerHTML = "";
                button8.value = "";
            }

            checkLastNumber(value);
        }
        else {
            console.log("not found");
        }
    });

    $(button9).click(function () {
        var value = button9.value;
        if (value == queue_1to30[index]) {
            console.log("found");
            nextNumberBoard(value);
            // Remove the found number
            queue_1to30.shift();

            // Assign next number if available
            if (queue_17to30 && queue_17to30.length) {
                next_value = queue_17to30.shift()
                button9.innerHTML = next_value;
                button9.value = next_value;
            }
            else {
                button9.innerHTML = "";
                button9.value = "";
            }

            checkLastNumber(value);
        }
        else {
            console.log("not found");
        }
    });

    $(button10).click(function () {
        var value = button10.value;
        if (value == queue_1to30[index]) {
            console.log("found");
            nextNumberBoard(value);
            // Remove the found number
            queue_1to30.shift();

            // Assign next number if available
            if (queue_17to30 && queue_17to30.length) {
                next_value = queue_17to30.shift()
                button10.innerHTML = next_value;
                button10.value = next_value;
            }
            else {
                button10.innerHTML = "";
                button10.value = "";
            }

            checkLastNumber(value);
        }
        else {
            console.log("not found");
        }
    });

    $(button11).click(function () {
        var value = button11.value;
        if (value == queue_1to30[index]) {
            console.log("found");
            nextNumberBoard(value);
            // Remove the found number
            queue_1to30.shift();

            // Assign next number if available
            if (queue_17to30 && queue_17to30.length) {
                next_value = queue_17to30.shift()
                button11.innerHTML = next_value;
                button11.value = next_value;
            }
            else {
                button11.innerHTML = "";
                button11.value = "";
            }

            checkLastNumber(value);
        }
        else {
            console.log("not found");
        }
    });

    $(button12).click(function () {
        var value = button12.value;
        if (value == queue_1to30[index]) {
            console.log("found");
            nextNumberBoard(value);
            // Remove the found number
            queue_1to30.shift();

            // Assign next number if available
            if (queue_17to30 && queue_17to30.length) {
                next_value = queue_17to30.shift()
                button12.innerHTML = next_value;
                button12.value = next_value;
            }
            else {
                button12.innerHTML = "";
                button12.value = "";
            }

            checkLastNumber(value);
        }
        else {
            console.log("not found");
        }
    });

    $(button13).click(function () {
        var value = button13.value;
        if (value == queue_1to30[index]) {
            console.log("found");
            nextNumberBoard(value);
            // Remove the found number
            queue_1to30.shift();

            // Assign next number if available
            if (queue_17to30 && queue_17to30.length) {
                next_value = queue_17to30.shift()
                button13.innerHTML = next_value;
                button13.value = next_value;
            }
            else {
                button13.innerHTML = "";
                button13.value = "";
            }

            checkLastNumber(value);
        }
        else {
            console.log("not found");
        }
    });

    $(button14).click(function () {
        var value = button14.value;
        if (value == queue_1to30[index]) {
            console.log("found");
            nextNumberBoard(value);
            // Remove the found number
            queue_1to30.shift();

            // Assign next number if available
            if (queue_17to30 && queue_17to30.length) {
                next_value = queue_17to30.shift()
                button14.innerHTML = next_value;
                button14.value = next_value;
            }
            else {
                button14.innerHTML = "";
                button14.value = "";
            }

            checkLastNumber(value);
        }
        else {
            console.log("not found");
        }
    });

    $(button15).click(function () {
        var value = button15.value;
        if (value == queue_1to30[index]) {
            console.log("found");
            nextNumberBoard(value);
            // Remove the found number
            queue_1to30.shift();

            // Assign next number if available
            if (queue_17to30 && queue_17to30.length) {
                next_value = queue_17to30.shift()
                button15.innerHTML = next_value;
                button15.value = next_value;
            }
            else {
                button15.innerHTML = "";
                button15.value = "";
            }

            checkLastNumber(value);
        }
        else {
            console.log("not found");
        }
    });

    $(button16).click(function () {
        var value = button16.value;
        if (value == queue_1to30[index]) {
            console.log("found");
            nextNumberBoard(value);
            // Remove the found number
            queue_1to30.shift();

            // Assign next number if available
            if (queue_17to30 && queue_17to30.length) {
                next_value = queue_17to30.shift()
                button16.innerHTML = next_value;
                button16.value = next_value;
            }
            else {
                button16.innerHTML = "";
                button16.value = "";
            }

            checkLastNumber(value);
        }
        else {
            console.log("not found");
        }
    });
}

function checkLastNumber(value) {
    if (value == 30) {
        console.log("last number clicked");
        startButton.disabled = false;
        startButton.classList.remove("disabled");
        disable();
    }
}

function nextNumberBoard(value) {
    val = parseInt(value);
    if (val < 29) {
        lastNumber.innerHTML = val;
        currentNumber.innerHTML = val + 1;
        nextNumber.innerHTML = val + 2;
    }
    else if (val == 29) {
        lastNumber.innerHTML = 29;
        currentNumber.innerHTML = 30;
        nextNumber.innerHTML = " ";
    }
    else if (val == 30) {
        lastNumber.innerHTML = "";
        currentNumber.innerHTML = "X";
        nextNumber.innerHTML = "";
    }
}

function timer() {

}