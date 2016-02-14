// 2-D array containing name and code
// First dimension of array holds arrays of name and code
// Second dimension holds name on 0 index and code on 1 index
var fs = require('fs');


var file_init = 'var five     = require("johnny-five");\n\
var Particle = require("particle-io");\n\
var Firebase = require("firebase");\n\
//var Parse    = require("parse/node");\n\
\n\
var usersRef = new Firebase("https://omniwolfdsn.firebaseio.com/Devices");\n\
\n\
\n\
usersRef.child("TestDevice1").set({sound:"fasle",motion:"false",fire:"false"});\n\
var board = new five.Board({\n\
  io: new Particle({\n\
    token: "a2e6ecc21a92fbeb22c212b3f068b1a482374f13",\n\
    deviceId: "3b0040000447343339373536"\
  })\n\
});\n\
\n\
board.on("ready", function() {\n\
\n\
\n\
  ';



var static_sensor_array = {
  motion_detector:"  \n\
var motion = new five.Sensor.Digital('D0');\n\
  motion.on('change', function() {\n\
      if (this.value == 0) {\n\
        console.log('motion detected');\n\
        usersRef.child('TestDevice1').update({motion:'true'});\n\
\n\
    }\n\
  });\n\
\n\
\n\
    ",
  //baby_monitor:"baby_monitor",
//  heart_rate_monitor:"heart rate monitor",
  fire_detector:"\n\
var flame  = new five.Sensor.Digital('D1');\n\
  flame.on('change', function() {\n\
    if (this.value == 1) {\n\
      console.log('fire detected');\n\
      usersRef.child('TestDevice1').update({fire:'true'});\n\
    }\n\
  });\n\
\n\
\n\
  ",
  sound_detector:"\n\
var mic    = new five.Sensor('A0');\n\
  mic.on('change', function() {\n\
      if (this.value < 500) {\n\
        console.log(this.value);\n\
        usersRef.child('TestDevice1').update({sound:'true'});\n\
      }\n\
    });\n\
\n\
\n\
    "
};

file_end = "});";


function codeGen(sensor_array) {
    var codeString = "";

var keys = [];
for (var i = 0; i < sensor_array.length; i++)
        {
        codeString +=  "\n" + static_sensor_array[sensor_array[i]];
        }
        var file = file_init +"\n" + codeString + "\n" + file_end;
        fs.writeFile("custom.js", file, function(err) {
            if(err) {
                return console.log(err);
            }

            console.log("File has been generated");
});
}
