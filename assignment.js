const fs = require('fs');
const util = require('util')
const fs_readFile = util.promisify(fs.readFile)
const fs_writeFile = util.promisify(fs.writeFile)

async function homework(){
    try{
        await fs_writeFile('./1.txt', '11111');
       await console.log('1.txt created');
        const data1 = await fs_readFile('./1.txt','UTF-8');
        await fs_writeFile('./2.txt', data1 + '22222');
       await console.log('2.txt created');
       const data2 = await fs_readFile('./2.txt','UTF-8');
       await fs_writeFile('./3.txt', data2 + '33333');
       await console.log('3.txt created');
       const data3 = await fs_readFile('./3.txt','UTF-8');
       await console.log(data3)
    } catch(err){
        console.log(err);
    }
}

homework();