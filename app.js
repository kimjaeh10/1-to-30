var queue_17to30 = []
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
const countDown = document.getElementById("count-down");

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
        }
        if (i == 2) {
            button2.innerHTML = input;
        }
        if (i == 3) {
            button3.innerHTML = input;
        }
        if (i == 4) {
            button4.innerHTML = input;
        }
        if (i == 5) {
            button5.innerHTML = input;
        }
        if (i == 6) {
            button6.innerHTML = input;
        }
        if (i == 7) {
            button7.innerHTML = input;
        }
        if (i == 8) {
            button8.innerHTML = input;
        }
        if (i == 9) {
            button9.innerHTML = input;
        }
        if (i == 10) {
            button10.innerHTML = input;
        }
        if (i == 11) {
            button11.innerHTML = input;
        }
        if (i == 12) {
            button12.innerHTML = input;
        }
        if (i == 13) {
            button13.innerHTML = input;
        }
        if (i == 14) {
            button14.innerHTML = input;
        }
        if (i == 15) {
            button15.innerHTML = input;
        }
        if (i == 16) {
            button16.innerHTML = input;
        }
    }

    // Start to count down
    countDown.innerHTML = "5";
    setTimeout(function () { countDown.innerHTML = "4" }, 1000);
    setTimeout(function () { countDown.innerHTML = "3" }, 1000);
    setTimeout(function () { countDown.innerHTML = "2" }, 1000);
    setTimeout(function () { countDown.innerHTML = "1" }, 1000);
}

function countDown() {

}