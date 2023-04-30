let a=['z','a','b','c','d','e','f','g']


function printArrayElement(x){
  console.log("length of array is"," ",a.length)
  for(let i=0;i<=a.length;i++){
    // if(i%2==0){
      console.log(a[i])
    // }
  }
}
//printArrayElement(a);
console.log(a.push("h","i","j"));

console.log(a.sort());
for(let n=0;n<=a.length;n++){
  console.log(a[n]);
}
