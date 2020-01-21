exports.main = () => {
  //192.168.1.5
  const mac = 'C8:02:10:2E:E8:AE'
  lgtv = require("lgtv");

  
  var retry_timeout = 10; // seconds
  lgtv.discover_ip(retry_timeout, function(err, ipaddr) {
    if (err) {
      console.log("Failed to find TV IP address on the LAN. Verify that TV is on, and that you are on the same LAN/Wifi.");
  
    } else {
      lgtv.connect(ipaddr, function(err, response) {
        if(!err) {
          lgtv.set_volume(15, function(err, response){
            lgtv.disconnect()
          })
        }
      })
    }
  });
}