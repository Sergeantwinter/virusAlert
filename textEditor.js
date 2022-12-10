const fs = require('fs');
const path = require('path');
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdoutl
});

rl.question(`Enter your question (press enter when done): `, function (content){
    rl.question(`Enter name of file: `, function(fileName){
        fs.writeFile(
         path.join(__dirname, `/${fileName}.txt`),
         content,
         function (err){
         if (err) {
            console.log("There is an error!");
            return;
            } 
          } 
        );
        rl.close();
    });
});