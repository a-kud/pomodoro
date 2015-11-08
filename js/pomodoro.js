function counter() {
    "use strict";
    var sessionButtons = document.querySelectorAll(".session-counter-btn"),
        breakButtons = document.querySelectorAll(".break-counter-btn"),
        i = 0,
        update = function (e) {

            var divId = this.parentNode.id, // div's id name where clicked button is located
                path = "#" + divId + " span", // path to timer's length
                timerLengthElement = document.querySelector(path),
                oldLength = parseInt(timerLengthElement.innerHTML, 10),
                newLength;

            if (e.target.innerHTML === "+") {
                newLength = oldLength + 1;
            } else {
                if (oldLength > 0) {
                    newLength = oldLength - 1;
                } else {
                    newLength = 0;
                }
            }
            
            if (divId === "session") {
                timerLengthElement.innerHTML = newLength;
                document.querySelector("#time-left").innerHTML = newLength;
            } else {
                timerLengthElement.innerHTML = newLength;
            }
            
            
        };

    for (i; i < sessionButtons.length; i += 1) {
        sessionButtons[i].addEventListener("click", update, false);
        breakButtons[i].addEventListener("click", update, false);
    }
}

function getSessionLength() {
    "use strict";
    var sessionElement = document.querySelector("#session-length"),
        timeleftElement = document.querySelector("#time-left"),
        sessionTime = sessionElement.innerHTML;
    
    timeleftElement.innerHTML = sessionTime;
}




/** Starts countdown timer.
  * @function countdownStart
  * @param {integer} duration - Countdown duration in seconds.
  * @param {object} display - Document element where timer should
  * be displayed.
  */
function countdownStart(duration, a, display) {    
    "use strict";
    var timer = duration, 
                minutes,
                seconds, 
                t; // setInterval in countdown method
   
    t = setInterval(function() {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            
            display.innerHTML = minutes + ":" + seconds;
            
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);       
}

window.onload = counter;