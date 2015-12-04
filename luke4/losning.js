require('fs').readFile('./dna', 'utf8', function(err, data) {
  var a = c = g = t = 0
  data.split('').forEach(function(p) {
    if(p === 'A') a++;
    if(p === 'C') c++;
    if(p === 'G') g++;
    if(p === 'T') t++;
  });
  console.log('A'+a+', C'+c+', G'+g+', T'+t);
});