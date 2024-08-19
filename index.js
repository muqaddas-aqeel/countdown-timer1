// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// const differenceInSeconds_1 = require("date-fns/fp/differenceInSeconds");
// function* countdownTimer(second) {
//     while (second > 0) {
//         yield second;
//         second--;
//     }
// }
// // counter initialization
// let timerIterator = countdownTimer(10);
// function displayCountdown() {
//     let result = timerIterator.next();
//     if (!result.done) {
//         const now = new Date();
//         const countdownTimer = new Date(now.getTime() + (result.value * 1000));
//         const remainingSeconds = (0, differenceInSeconds_1.differenceInSeconds)(countdownTimer, now);
//         console.log(`Remaining Seconds: ${remainingSeconds}`);
//         setTimeout(displayCountdown, 1000);
//     }
//     else {
//         console.log("Countdown Complete!");
//     }
// }
// //invoke
// displayCountdown();
