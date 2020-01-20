
var wol = require('node-wol');
var CONFIG = require('../config')

var turnOn = function() {
  wol.wake(CONFIG.lgtvmac, {
    address: CONFIG.lgtvip,
    port: 3000
  }, function(error) {
    if(error) {
      return;
    }
  });
  var magicPacket = wol.createMagicPacket(CONFIG.lgtvmac);
};

turnOn()