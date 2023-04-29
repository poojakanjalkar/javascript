let a = [1,2,3,4,5,6,7,8,9,10]

const test= ()=> {
  let array = []
  for(let w=0;w<100;w++){
    array.push(w+1)
  }
  for(let a1=0;a1<array.length;a1++){
    if(array[a1]%2==0){
      console.log("even number--", array[a1]);
      // console.log("even number");

    }
    /*else{
      console.log("odd number");
    }*/
  }
}
test();