function getSumOfDigits(integer) {
   const numString = integer.toString();
   let sum = 0;

   for(i = 0; i < numString.length; i++){
       sum += Number(numString[i]);
   }

   return sum;
}