var child_process = require('child_process');

module.exports = function(hackerDS) {
  var self = this;

  var runningPlayer = null;

  self.init = function() {
    console.log('init hackerDS music');
  }

  hackerDS.on('music.start', function(state){
    if(state){
      child_process.execFile('mpc', ['add', 'http://uwstream1.somafm.com:80']);
      child_process.execFile('mpc', ['play', '1']);
    } else {
      child_process.execFile('mpc', ['stop']);
    }
  })
}
