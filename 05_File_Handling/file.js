const fs = require("fs");

//Sync call
// fs.writeFileSync("./test.txt","Hey Vivek, How are you? I am Fine Thank you")

// //Async
// fs.writeFile("./test2.txt","Hey vivek,, How are You?",(err)=>{})

// const contacts = fs.readFileSync("./contacts.txt","utf-8")
// console.log(contacts)

// const contacts2 = fs.readFile("./contacts.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("Error",err)
//     }else{
//         console.log(data)
//     }
// })
// console.log(contacts2) //undefined

fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

fs.cpSync("./test.txt", "./copy.txt");
