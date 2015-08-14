/**fweweve**/

var Cylon = require('cylon');
var bot;
function fly (robot) {
    bot = robot;
    bot.drone.disableEmergency();
    bot.drone.ftrim();
    bot.drone.takeoff();
    bot.drone.left(0.2);
    after (2*1000, function () {
        bot.drone.left(0);
    });
    bot.drone.forward(0.2);
    after (4*1000, function (){
        bot.drone.forward(0)
    });

    bot.drone.right(0.2);
    after(6*1000, function(){
    bot.drone.right(0)
});


    after (10*1000, function (){
    bot.drone.land();

});
    after (12*1000, function (){
        bot.drone.stop ();
    });
}

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
    .on("ready", fly);
    
// Fly the bot
function fly(robot) {

}

Cylon.start();
