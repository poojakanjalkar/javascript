const person={
  firstName:"Pavan",
  lastName:"Adhav",
  age:31,
  eyeColor:"brown",
  city:"Pune",
  isActive:true
}

let items=["pooja","shreya","Divya","prisha","siya"];
let lstname=["adhav","yede","pawar","tru","diwan"];
let age=[22,21,34,23,21];
let color=["blue","brown","pink","yellow","red"];
let city=["pune","nanded","yavatmal","nagpur","mumbai"];
let active=[true,false];
let n=1.0;
//console.log(items[Math.floor(Math.random()* items.length)])
// console.log(Math.random())
//console.log(person);
const getRandomAge=(ageArray)=>{
  let randomNumber=Math.random()*ageArray.length
  //console.log("generated random number"," ",randomNumber)
  let index=Math.floor(randomNumber)
  //console.log("generated index"," ",index)
  //console.log("randomly generated age"," ",age[index])
  return age[index]

}
//getRandomAge(age)
let final=[];
function generateArray(x){
  for(let i=0;i<=x;i++){
    let p={
      firstName:items[Math.floor(Math.random()*items.length)],
      lastName:lstname[Math.floor(Math.random()*lstname.length)],
      age:getRandomAge(age),
      color:color[Math.floor(Math.random()*color.length)],
      city:city[Math.floor(Math.random()*city.length)],
      active:active[Math.floor(Math.random()*active.length)],
    }

    final.push(p)

  }
  return final

}
let generatedArray1=generateArray(20)
console.log(generatedArray1)

