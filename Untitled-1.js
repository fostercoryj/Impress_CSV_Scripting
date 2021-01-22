

var total = '10,20,30,45,60'
//var total = data.getFromParent('transaction');

function sumTotal(){
   var temp = [];
   temp = total.split(',');   
   var sum = 0
   for (i=0;i<=temp.length-1;i++) {
      num = parseInt(temp[i]);
      sum = sum + num; 
   } 
   return sum;
}
console.log(sumTotal(total)) ;