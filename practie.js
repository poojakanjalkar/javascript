let a=[55,45,44,67,68,77,89];
let c=a.map(elm=>{
  if(elm%2==1){
    console.log("odd numbers"," ",elm)
    return elm+100;
  }else{
    return elm;}
  //return elm;
})
console.log(c);