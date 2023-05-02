
let data = [
  {
    firstName: 'pooja',
    lastName: 'adhav',
    age: 22,
    color: 'brown',
    city: 'nanded',
    active: true
  },
  {
    firstName: 'Divya',
    lastName: 'pawar',
    age: 21,
    color: 'pink',
    city: 'nagpur',
    active: false
  },
  {
    firstName: 'pooja',
    lastName: 'pawar',
    age: 22,
    color: 'yellow',
    city: 'mumbai',
    active: false
  },
  {
    firstName: 'shreya',
    lastName: 'diwan',
    age: 21,
    color: 'brown',
    city: 'nagpur',
    active: false
  },
  {
    firstName: 'prisha',
    lastName: 'diwan',
    age: 21,
    color: 'blue',
    city: 'mumbai',
    active: false
  },
  {
    firstName: 'prisha',
    lastName: 'adhav',
    age: 34,
    color: 'red',
    city: 'nagpur',
    active: false
  },
  {
    firstName: 'pooja',
    lastName: 'diwan',
    age: 34,
    color: 'red',
    city: 'yavatmal',
    active: true
  },
  {
    firstName: 'siya',
    lastName: 'diwan',
    age: 22,
    color: 'yellow',
    city: 'nanded',
    active: false
  },
  {
    firstName: 'siya',
    lastName: 'diwan',
    age: 21,
    color: 'blue',
    city: 'yavatmal',
    active: false
  },
  {
    firstName: 'pooja',
    lastName: 'diwan',
    age: 21,
    color: 'red',
    city: 'nanded',
    active: true
  },
  {
    firstName: 'pooja',
    lastName: 'adhav',
    age: 22,
    color: 'pink',
    city: 'nanded',
    active: true
  },
  {
    firstName: 'pooja',
    lastName: 'adhav',
    age: 21,
    color: 'blue',
    city: 'nagpur',
    active: false
  },
  {
    firstName: 'Divya',
    lastName: 'yede',
    age: 22,
    color: 'pink',
    city: 'nagpur',
    active: false
  },
  {
    firstName: 'prisha',
    lastName: 'diwan',
    age: 23,
    color: 'brown',
    city: 'pune',
    active: false
  },
  {
    firstName: 'shreya',
    lastName: 'yede',
    age: 23,
    color: 'blue',
    city: 'nanded',
    active: false
  },
  {
    firstName: 'pooja',
    lastName: 'adhav',
    age: 23,
    color: 'yellow',
    city: 'mumbai',
    active: true
  },
  {
    firstName: 'prisha',
    lastName: 'yede',
    age: 23,
    color: 'brown',
    city: 'yavatmal',
    active: false
  },
  {
    firstName: 'pooja',
    lastName: 'yede',
    age: 21,
    color: 'red',
    city: 'pune',
    active: false
  },
  {
    firstName: 'Divya',
    lastName: 'diwan',
    age: 23,
    color: 'red',
    city: 'nanded',
    active: true
  },
  {
    firstName: 'shreya',
    lastName: 'diwan',
    age: 21,
    color: 'brown',
    city: 'mumbai',
    active: false
  },
  {
    firstName: 'pooja',
    lastName: 'tru',
    age: 22,
    color: 'red',
    city: 'nanded',
    active: false
  }
]


// console.log(data.length)


// 1) write function to get all active users
// 2) write function to get all user whose age is 21
// 3) write function to get all user whose city is Pune 
// 4) Write function to get addition of all user age


//console.log(data[0].firstName)
// 1) write function to get all active users
function getAllActiveUser(){
  let userActive=data.filter(elm=>{
    //console.log("element is"," ",elm)
    if(elm.active==true){
      return elm;
    }
  })
  console.log("active users array is"," ",userActive.length," ",userActive)

}
//getAllActiveUser();

// 2) write function to get all user whose age is 21
function getAllUserAge(){
  let userAge=data.filter(elm=>{
    if(elm.age==10){
      return elm;
    }
})
  console.log("all user whose age 21 is"," ",userAge.length," ",userAge);

  }
  //getAllUserAge();

  // 3) write function to get all user whose city is Pune 

function getAllUserCity(){
  let userCity=data.filter(elm=>{
    if(elm.city=='pune'){
      return elm;
    }
  })
  console.log("users whose city is pune is"," ",userCity.length," ",userCity);
}
//getAllUserCity();

// 4) Write function to get addition of all user age
function getAdditionOfAges(){
  let total=0;
  let ageAddition=data.reduce((acc,elm)=>{
    console.log("-----", JSON.stringify(acc.age),JSON.stringify(elm))
    // acc=acc+elm.age;
    return acc+ elm.age;
   
},0)
  console.log("total age of all user is"," ",total, ageAddition);
}
getAdditionOfAges();