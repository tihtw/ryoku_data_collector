var EventSource = require('eventsource');
var request = require('request');
// var sqlite3 = require('sqlite3')

const device_mac = '00155B009610';
const device_key = '';


var ev = new EventSource('https://sampo.tih.tw:8081/2/device/' + device_mac + '?event-stream');
console.log(ev);
ev.onmessage = function(e) {
	console.log(e.data);


  // https://curl.trillworks.com/#node
  var dataString = 'payload='+e.data;

  var options = {
      url: 'https://www.example.com',
      method: 'POST',
      body: dataString
  };

  function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
          console.log(body);
      }
  }

  request(options, callback);
};

ev.onerror = function(e) {
	console.log("error: ", e);
};


