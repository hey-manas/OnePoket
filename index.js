const express = require('express');
const port = 3000;

const app = express();
//server connection on port 3000
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.use('/',(req,res)=>{
 res.send("Hello world!");
})

//sum num of array
const handleData=(array)=>{
    let num=1
for(let i=0; i<array.length; i++){
    num+=array[i]
}
return num
}
let data=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
console.log("sum of array ",handleData(data))
//read file and count string 
var fs = require('fs')
  
fs.readFile("data.txt", 'utf8', ((err, data)=>{
    {
        if (err) throw err;
        console.log("count of string in data.text:",data.length)
      }
}));