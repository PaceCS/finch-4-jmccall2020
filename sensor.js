load("readline.js");
load("Finch.js");

// Gain access to our finch
let finch = new Finch();

// -----------------------------------------------
// Don't change anything above the line

// Our first set of code will make the Finch move forward and backwards until it detects an obstacle
// while (!finch.getObstacleSensors().right && !finch.getObstacleSensors().left) {
//     finch.setWheelPower(100, 100);
//     wait(1000);
//     finch.setWheelPower(-100, -100);
//     wait(1000);
// }
// finch.setWheelPower(0, 0);
// wait(2000);
//
//
//
//
// // Now we will make the Finch move side to side until it detects a strong light
// while (finch.getLightSensors().right < 100 && finch.getLightSensors().left < 100) {
//     finch.setWheelPower(100, 0);
//     wait(1000);
//     finch.setWheelPower(0, 100);
//     wait(1000);
// }
// finch.setWheelPower(0, 0);
// finch.setLED(0, 0, 0);
// wait(2000);
//
//
//
//
// // Have the Finch change the color of its nose back and forth every second until it detects a strong light
// while (finch.getLightSensors().right < 100 && finch.getLightSensors().left < 100) {
//     finch.setLED(255, 0, 0);
//     wait(1000)
//     finch.setLED(0, 255, 0);
//     wait(1000)
//     finch.setLED(0, 0, 255);
//     wait(1000)
// }
// finch.setWheelPower(0, 0);
// finch.setLED(0, 0, 0);
// wait(2000);
//
//
//
//
// // Have the Finch flash red and blue for 3 seconds if it detects an obstacle.  Have it disarm itself completely if it detects an strong light.
// while (finch.getLightSensors().right < 50 && finch.getLightSensors().left < 50) {
//     while(!finch.getObstacleSensors().right && !finch.getObstacleSensors().left) {
//         wait(100);
//     }
//     for (let i = 0; i < 3; i += 1) {
//         finch.setLED(255, 0, 0);
//         wait(500);
//         finch.setLED(0, 0, 255);
//         wait(500);
//     }
//     finch.setLED(0, 0, 0);
// }
// finch.setLED(0, 0, 0);
// wait(2000);
//



// Have the Finch do the sound and light show that you programmed previously.  It should pause for a second if it detects an obstacle and it should stop completely if it detects a strong light
// while (finch.getLightSensors().right < 100 && finch.getLightSensors().left < 100) {
//     while(!finch.getObstacleSensors().right && !finch.getObstacleSensors().left) {
//         const rounds = 1;
//         const c = 1 + rounds;
//         for (let b = 1; b < c; b += 1){
            // finch.setLED(255,255,255);
            // finch.playTone(420,3000);
            // wait(3000);
            //
            // finch.setLED(255,0,0);
            // finch.playTone(400,250);
            // wait(250);
            // finch.setLED(255,255,255);
            // finch.playTone(420,250);
            // wait(250);
            // finch.setLED(255,0,0);
            // finch.playTone(400,250);
            // wait(250);
            // finch.setLED(255,255,255);
            // finch.playTone(420,250);
            // wait(250);
            // finch.setLED(255,0,0);
            // finch.playTone(400,250);
            // wait(250);
            // finch.setLED(255,255,255);
            // finch.playTone(420,250);
            // wait(250);
            // finch.setLED(255,0,0);
            // finch.playTone(400,3000);
            // wait(3000);
            //
            // finch.setLED(0,0,255);
            // finch.playTone(360,250);
            // wait(250);
            // finch.setLED(255,0,0);
            // finch.playTone(400,250);
            // wait(250);
            // finch.setLED(0,0,255);
            // finch.playTone(360,250);
            // wait(250);
            // finch.setLED(255,0,0);
            // finch.playTone(400,250);
            // wait(250);
            // finch.setLED(0,0,255);
            // finch.playTone(360,250);
            // wait(250);
            // finch.setLED(255,0,0);
            // finch.playTone(400,250);
            // wait(250);
            // finch.setLED(255,0,255);
            // finch.playTone(380,3000);
            // wait(3000);
            //
            // finch.setLED(0,255,255);
            // finch.playTone(340,250);
            // wait(250);
            // finch.setLED(255,0,255);
            // finch.playTone(380,250);
            // wait(250);
            // finch.setLED(0,255,255);
            // finch.playTone(340,250);
            // wait(250);
            // finch.setLED(255,0,255);
            // finch.playTone(380,250);
            // wait(250);
            // finch.setLED(0,255,255);
            // finch.playTone(340,250);
            // wait(250);
            // finch.setLED(255,0,255);
            // finch.playTone(380,250);
            // wait(250);
            // finch.setLED(0,0,255);
            // finch.playTone(360,3000);
            // wait(3000);
            //
            // finch.setLED(0,255,0);
            // finch.playTone(320,250);
            // wait(250);
            // finch.setLED(0,0,255);
            // finch.playTone(360,250);
            // wait(250);
            // finch.setLED(0,255,0);
            // finch.playTone(320,250);
            // wait(250);
            // finch.setLED(0,0,255);
            // finch.playTone(360,250);
            // wait(250);
            // finch.setLED(0,255,0);
            // finch.playTone(320,250);
            // wait(250);
            // finch.setLED(0,0,255);
            // finch.playTone(360,250);
            // wait(250);
            // finch.setLED(0,255,255);
            // finch.playTone(340,3000);
            // wait(3000);
            //
            // finch.setLED(255,255,0);
            // finch.playTone(300,250);
            // wait(250);
            // finch.setLED(0,255,255);
            // finch.playTone(340,250);
            // wait(250);
            // finch.setLED(255,255,0);
            // finch.playTone(300,250);
            // wait(250);
            // finch.setLED(0,255,255);
            // finch.playTone(340,250);
            // wait(250);
            // finch.setLED(255,255,0);
            // finch.playTone(300,250);
            // wait(250);
            // finch.setLED(0,255,255);
            // finch.playTone(340,250);
            // wait(250);
            // finch.setLED(0,255,0);
            // finch.playTone(320,3000);
            // wait(3000);
            //
            // finch.setLED(255,0,0);
            // finch.playTone(400,250);
            // wait(250);
            // finch.setLED(0,255,0);
            // finch.playTone(320,250);
            // wait(250);
            // finch.setLED(255,0,0);
            // finch.playTone(400,250);
            // wait(250);
            // finch.setLED(0,255,0);
            // finch.playTone(320,250);
            // wait(250);
            // finch.setLED(255,0,0);
            // finch.playTone(400,250);
            // wait(250);
            // finch.setLED(0,255,0);
            // finch.playTone(320,250);
            // wait(250);
            // finch.setLED(255,255,0);
            // finch.playTone(300,3000);
            // wait(3000);

//             finch.setLED(255,0,0);
//             finch.playTone(400,250);
//             wait(250);
//             finch.setLED(0,255,0);
//             finch.playTone(320,250);
//             wait(250);
//             finch.setLED(0,0,255);
//             finch.playTone(360,250);
//             wait(250);
//             finch.setLED(255,0,0);
//             finch.playTone(400,250);
//             wait(250);
//             finch.setLED(0,255,0);
//             finch.playTone(320,250);
//             wait(250);
//             finch.setLED(0,0,255);
//             finch.playTone(360,250);
//             wait(250);
//             finch.setLED(255,255,255);
//             finch.playTone(420,3000);
//             wait(5000);
//         }
//     }
//     finch.setLED(0,0,0);
//     finch.playTone(0,1000);
//     wait(1000);
// }
// finch.setLED(0,0,0);
// finch.playTone(0,2000);
// wait(2000)





// Have the Finch do the maze that you programmed earlier but have it pause if it detects an obstacle and stop completely if it detects a strong light

while (finch.getLightSensors().right < 100 && finch.getLightSensors().left < 100) {
    while(!finch.getObstacleSensors().right && !finch.getObstacleSensors().left) {
        // const times = 1;
        // const d = 1 + times;
        // for (let a = 1; a < d; a += 1){
            finch.setWheelPower(200, 200);
            wait(3000);
            finch.setWheelPower(0, 200);
            wait(750);

            // finch.setWheelPower(150, 150);
            // wait(4000);
            // finch.setWheelPower(0, 200);
            // wait(750);
            //
            // finch.setWheelPower(100, 100);
            // wait(2000);
            // finch.setWheelPower(0, 200);
            // wait(750);

            finch.setWheelPower(200, 200);
            wait(2000);
            finch.setWheelPower(200, 0);
            wait(750);

            // finch.setWheelPower(200, 200);
            // wait(1000);
            // finch.setWheelPower(200, 0);
            // wait(750);
            //
            // finch.setWheelPower(100, 100);
            // wait(4000);
            // finch.setWheelPower(0, 200);
            // wait(750);
            //
            // finch.setWheelPower(50, 50);
            // wait(4000);
            // finch.setWheelPower(0, 200);
            // wait(750);
            //
            // finch.setWheelPower(100, 100);
            // wait(5000);
            // finch.setWheelPower(0, 200);
            // wait(750);

            finch.setWheelPower(250, 250);
            wait(1600);
            finch.setWheelPower(0,0);
        // }

    }
    finch.setWheelPower(0, 0);
    wait(1000)
}
finch.setWheelPower(0, 0);





































function wait(msecs, buffer) {
    var buf = buffer ? buffer : 100;
    var time1 = new Date().getTime();
    var time2 = new Date().getTime() ;
    while (time2 < time1 + msecs + buf) {
        time2 = new Date().getTime();
    }
}
