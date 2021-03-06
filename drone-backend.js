var Cylon = require('cylon');
var bot;

// Initialise the robot
Cylon.robot()
    .connection("ardrone", {
        adaptor: 'ardrone',
        port: '192.168.1.1'
    })
    .device("drone", {
        driver: "ardrone",
        connection: "ardrone"
    })
    .device("nav", {
        driver: "ardrone-nav",
connection: "ardrone"
})

    .on("ready", fly)
;

    
// Fly the bot
function fly(robot) {

    bot = robot;


    bot.drone.config('general:navdata_demo', 'TRUE');
    bot.nav.on("navdata", function(data) {
        console.log(data);

    })

    bot.drone.ftrim();
    bot.drone.disableEmergency();
        bot.drone.takeoff();

   /* after(5*1000, function() {
        bot.drone.forward(0.1);
    });
    after(7*1000, function() {
        bot.drone.forward(0);
    });
    after(9*1000, function() {
        bot.drone.clockwise(0.2);
    });
    after(10*1000, function() {
        bot.drone.clockwise(0);
    });


    after(11*1000, function() {
        bot.drone.forward(0.1);
    });
    after(13*1000, function() {
        bot.drone.forward(0);
    });
    after(15*1000, function() {
        bot.drone.clockwise(0.2);
    });
    after(16*1000, function() {
        bot.drone.clockwise(0);
    });


    after(15*1000, function() {
        bot.drone.forward(0.1);
    });
    after(17*1000, function() {
        bot.drone.forward(0);
    });
    after(19*1000, function() {
        bot.drone.clockwise(0.2);
    });
    after(20*1000, function() {
        bot.drone.clockwise(0);
    });

    after(21*1000, function() {
        bot.drone.forward(0.1);
    });
    after(23*1000, function() {
        bot.drone.forward(0);
    });
    after(25*1000, function() {
        bot.drone.clockwise(0.2);
    });
    after(26*1000, function() {
        bot.drone.clockwise(0);
    });



    after(27*1000, function() {
        bot.drone.rightFlip(0.2);
    });
    after(30*1000, function() {
        bot.drone.rightFlip(0);
    });


    after(33*1000, function() {
        bot.drone.clockwise(0.2);
    });
    after(34*1000, function() {
        bot.drone.clockwise(0);
    });

*/
    after(5*1000, function() {
        bot.drone.counterClockwise(0.8);
    });
    after(5.2*1000, function() {
        bot.drone.counterClockwise(0);
    });

    after(10*1000, function() {
        bot.drone.counterClockwise(0.8);
    });
    after(11*1000, function() {
        bot.drone.counterClockwise(0);
    });




    after(15*1000, function() {
        bot.drone.land();
    });
    after(20*1000, function() {
        bot.drone.stop();
    });

}

Cylon.start();
