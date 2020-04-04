// open other terminal and run  
// ganache-cli -d -p 8546
// need to have 2 windows open. One that is running ganache with the ganache-cli command
// and another where you try running your program

const ethers = require('ethers');
let provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8546/');
let wallet = new ethers.Wallet('0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d', provider);

let tx = {
    to: "0x7b37F303C53F6895464dD492C838291c63CEC890",
    value: ethers.utils.parseEther('1.0')
};

let sendPromise = wallet.sendTransaction(tx);

sendPromise.then((tx) => {
    console.log(tx);
});

// sendPromise.catch((error) => {
//     console.error(error);
// });