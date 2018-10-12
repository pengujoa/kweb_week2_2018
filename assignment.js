const fs = require('fs');

function readFile(fileName,type){
    return new Promise((resolve, reject)=>{
        fs.readFile(fileName,type,(err,data)=> {
            err ? reject(err) : resolve(data);
        });
    }); 
}

function writeFile(fileName,fow){
    return new Promise((resolve, reject)=>{
        fs.writeFile(fileName,fow,(err)=> {
            err ? reject(err) : resolve(fow);
        });
    }); 
}


writeFile('./1.txt', '11111')
    .then(function(){console.log('1.txt created'); return readFile('./1.txt','UTF-8');})
    .then(function(data1){return writeFile('./2.txt',data1 + '22222');})
    .then(function(){console.log('2.txt created'); return readFile('./2.txt','UTF-8');})
    .then(function(data2){return writeFile('./3.txt',data2 + '33333');})
    .then(function(){console.log('3.txt created'); return readFile('./3.txt','UTF-8');})
    .then(function(data3){console.log(data3)})
    .catch(function(err){
    console.log(err);
    });