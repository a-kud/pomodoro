function getSessionLength() {
    "use strict";
    var sessionElement = document.querySelector("#session-length"),
        timeleftElement = document.querySelector("#time-left"),
        sessionTime = sessionElement.innerHTML;
    
    timeleftElement.innerHTML = sessionTime;
}
