function scramble(str1, str2) {
 console.log(str2, str1);
 var counter = 0;
 var length = str2.length;
 for (letter in str2){
   //console.log(str2[letter]);
   var compare = str2[letter];
  //console.log("test");
   for (checker in str1){
     var checker1 = Number.parseInt(checker) +1;
     if(compare == str1[checker]){
       //console.log("Matched " + compare + " and " + str1[checker]);
       str1 = str1.slice(0, checker) + str1.slice(checker1, str1.length);
       console.log(str1);
       counter +=1;
     }
     
   }
 }
 console.log(counter, length);
 if (counter>= length){
   return true;
 }
 else{
   return false;
 }
}
