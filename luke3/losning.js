function erSkuddar(){
  if(ar%100 == 0){
    return ar%400 == 0;
  }
  return ar%4 == 0;
}

var antalldager = 0;
var fredager = 0;

for(var ar = 1; ar < 2016; ar++){
  if((antalldager+256)%7 == 0){
    fredager++;
  }

  antalldager += erSkuddar ? 366 : 365;
}
console.log(fredager);