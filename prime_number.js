let num=11
for(let i=num;i<num;i++){
let count=0
  for(let j=2;j<=num;j++){
    if(i%j===0 && i!==j){
      count++
    }
}if(count==0){
  console.log(i,"bhai ye prime hai")
  }
}