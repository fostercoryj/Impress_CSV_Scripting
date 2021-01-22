function makeArr(data) {
    var tempArr = data.split();
    return tempArr;
}

var newArr = makeArr(input);

return input +' '+ newArr;

var names = 'Harry,John,Clark,Peter,Rohn,Alice';
var nameArr = names.split(',');
console.log(nameArr);


// iterate through input array
//var input = [10,20,30,45,60]
var input = '10,20,30,45,60'


function rowOutput(){
   var temp = new Array();
   temp = input.split(",");   
   var rowString = ''
   for (i = temp.length-1;i>=0; i--) {
      rowString = rowString + temp[i] + '\n';
   } 
   return rowString;
}

//console.log(rowOutput())

var total = ('65,45,0,9,18,7,1,12');//data.getFromParent('transaction');
function sumTotal(){
   var temp = new Array();
   temp = total.split(',');   
   var sum = 0
   for (i=0;i<=temp.length-1;i++) {
      num = parseInt(temp[i]);
      sum = sum + num; 
   } 
   return sum;
}
return console.log(sumTotal(total));


//total for csv column data
var total = data.getFromParent('transaction');
function sumTotal(){
   var temp = new Array();
   temp = total.split(',');   
   var sum = 0
   for (i=0;i<=temp.length-1;i++) {
      num = parseInt(temp[i]);
      sum = sum + num; 
   } 
   return sum;
}
return sumTotal(total);

//string into array into column of strings

function rowOutput(){
    var temp = [];
    temp = input.split(",");   
    var rowString = ''
    for (i=temp.length-1;i>=0;i--) {
       rowString = rowString + temp[i] + '\n';
    } 
    return rowString;
 } 
 return rowOutput(input);

 // capitalize first letter of every word

function toTitleCase(input) {
   return input.replace(/\w\S*/g, function(txt){
       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
   });
}
console.log(toTitleCase(input));

// capitalize first letter of first word
input = 'here is a very long string of words to use '

return input[0].toUpperCase() + input.slice(1).toLowerCase();






function rowOutput(){
    var temp = new Array();
    temp = input.split(",");   
    var rowString = ''
    for (i=temp.length-1;i>=0; i--) {
       rowString = rowString + temp[i] + '\n';
    } 
    return rowString;
 }