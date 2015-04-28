var child_process = require('child_process');

module.exports = function(hackerDS) {
  var self = this;

  var runningPlayer = null;

  self.init = function() {
    console.log('init hackerDS music');
  }

  hackerDS.on('music.start', function(state){
    if(state){
      if(!runningPlayer){
        runningPlayer = child_process.execFile('cvlc', ['http://somafm.com/groovesalad.pls']);
      }
    } else {
      runningPlayer.kill();
      runningPlayer = null;
    }
  })
}
