require('fs').readFile('./kurser', 'utf8', function(err, data) {
  var kurser = data.split('\n').map(parseFloat);
  var max = 0;

  for(var i = 0; i < kurser.length; i++){
    for(var j = i+1; j < kurser.length; j++) {
      max = Math.max(kurser[j]-kurser[i], max);
    }
  }

  console.log(max.toFixed(4));
});