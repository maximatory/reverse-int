module.exports = function reverse (n) {
   n = n.toString()
   let i = n.length -1;
   let result = '';
   
   while(i >= 0){
      if(n[i] === '-') {
        result = `${result}`;
      } else {
        result = `${result}${n[i]}`;
      }
      i = i - 1;
   };
   return result;
}
