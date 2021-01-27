
///testing array inputs into Impress Automate  
function makeArr(data) {
   var tempArr = data.split();
   return tempArr;
}

var newArr = makeArr(input);

return input +' '+ newArr;

var names = 'Harry,John,Clark,Peter,Rohn,Alice';
var nameArr = names.split(',');
console.log(nameArr);


// iterate through input array and output as a column on the page
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

//******  Various experiments on pulling correct attribute values during CSV import   *******/

total = '10,12,1,7,18,9,0,45,65,841,56,23,654,181,1,4,46,748,1,46,94,85,230,20,56,98,78,15,48,8,45,65,5,89,6,5,4,78,9,5,23,5,8,9,6,5,23,6,5,8,9,66,5,4,2,2'
var total = data.getFromParent('transaction');
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
return console.log(sumTotal(total));

return data.get("Array-Client.Client["+data.currentIndexIn("Array-Client.Client")+"].Name");
var y = data.getFromParent('transactions');

return y;


// Sum script that worked with small sample import, crashing on larger import and returning null value
// data.getFromParent pulls ALL values in that column
var total = '10,20,30,45,60'
var total = data.getFromParent('transaction');
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

// Working to pull values from sibling columns, no nested or child tables
return data.get("Records.Record["+data.currentIndexIn("Records.Record")+"].transaction");

//final version with the sum script working as intended. 
var total = data.get("Records.Record["+data.currentIndexIn("Records.Record")+"].transaction");
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
return sumTotal(total);

//Script from Zach for replacing non printable characters
//Replace all non-printable characters in a string
//.replace([^ -~]+g,'~'))

//possible later version of same script from Chandler, written by zach
return originalValue.replace(/\u00A0/g," ").replace(/\u000A/g,"~").replace(/[^\x20-\x7E]+/g, '-').replace(/~/g,'\n');