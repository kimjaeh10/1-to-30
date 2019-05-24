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

    countDown();
}

function countDown() {
    /* var timeleft = 5;
    var downloadTimer = setInterval(function () {
        counter.innerHTML = timeleft;
        timeleft--;
        if (timeleft < 0) {
            clearInterval(downloadTimer);
            counter.innerHTML = "0";
        }
    }, 1000); */

    /*$(counter).show();
    counter.innerHTML = "5";
    setTimeout(function () { counter.innerHTML = "4"; }, 200);
    setTimeout(function () { counter.innerHTML = "3"; }, 400);
    setTimeout(function () { counter.innerHTML = "2"; }, 600);
    setTimeout(function () { counter.innerHTML = "1"; }, 800);
    setTimeout(function () { $(counter).hide(); }, 1000);
    

    startButton.disabled = true;
    enable();*/

    var count = 5;
    var timer = null;


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
    button1.removeAttribute("disabled");
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
    console.log(button1);
    $(button1).hover(function () {
        $(this).toggleClass("startb");
    });
    $(button2).hover(function () {
        $(this).toggleClass("startb");
    });
    $(button3).hover(function () {
        $(this).toggleClass("startb");
    });
    $(button4).hover(function () {
        $(this).toggleClass("startb");
    });
    $(button5).hover(function () {
        $(this).toggleClass("startb");
    });
    $(button6).hover(function () {
        $(this).toggleClass("startb");
    });
    $(button7).hover(function () {
        $(this).toggleClass("startb");
    });
    $(button8).hover(function () {
        $(this).toggleClass("startb");
    });
    $(button9).hover(function () {
        $(this).toggleClass("startb");
    });
    $(button10).hover(function () {
        $(this).toggleClass("startb");
    });
    $(button11).hover(function () {
        $(this).toggleClass("startb");
    });
    $(button12).hover(function () {
        $(this).toggleClass("startb");
    });
    $(button13).hover(function () {
        $(this).toggleClass("startb");
    });
    $(button14).hover(function () {
        $(this).toggleClass("startb");
    });
    $(button15).hover(function () {
        $(this).toggleClass("startb");
    });
    $(button16).hover(function () {
        $(this).toggleClass("startb");
    });
}