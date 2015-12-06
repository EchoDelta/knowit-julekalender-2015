var paran = function (left, right) {
  if(left == 0 && right == 0) 
    return 1;
  
  if(left == 0) 
    return paran(0, right-1);

  if(right <= left) 
    return paran(left-1, right);

  return paran(left-1, right) + paran(left, right-1)
}

console.log(paran(13, 13));