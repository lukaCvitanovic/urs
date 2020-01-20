//192.168.1.5
const mac = 'C8:02:10:2E:E8:AE'
lgtv = require("lgtv");
var wol = require('node-wol');

 
var retry_timeout = 10; // seconds
lgtv.discover_ip(retry_timeout, function(err, ipaddr) {
  if (err) {
    console.log("Failed to find TV IP address on the LAN. Verify that TV is on, and that you are on the same LAN/Wifi.");
 
  } else {
      try {
          wol.wake(mac, {
              address: ipaddr,
              port: 3000
            }, function(error) {
              if(error) {
                return;
              }
            });
            var magicPacket = wol.createMagicPacket(mac);
      }
      catch {
        lgtv.disconnect();
      }
  }
});