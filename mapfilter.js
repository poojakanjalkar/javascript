let b=[20,16,100,2,3,1,8,50,76,89,51,45,13,51,55,97]

//map

let c=b.map(elm=>{
  if(elm%2==0){
    return elm+2 
  }else{
    return elm
  }
  //return elm+2

})
//console.log(c)

//filter

let d=b.filter(elm=>{
  return elm>50&&elm<80&&elm%2==0
})
//console.log(d)

//reduce

//let total=0;
let e=b.reduce((e,elm)=>{
return e+elm;
})
console.log(e)


