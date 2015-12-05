require('fs').readFile('./ord', 'utf8', function(err, data) { 
  var totalAnagrams = data.split('\n').map(function (ord) {
    return ord.split('').sort().join('');
  }).sort().filter(function(ord, i, ordliste){
    return ordliste[i] == ordliste[i+1] || ordliste[i] == ordliste[i-1]
  }).length;

  console.log(totalAnagrams);
});