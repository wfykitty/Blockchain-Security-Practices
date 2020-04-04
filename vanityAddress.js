const crypto = require('crypto')
const ethUtil = require("ethereumjs-util")

let Generator = function () {
let privKey = crypto.randomBytes(32)
let pubKey = ethUtil.privateToPublic(privKey)
let hashedPubKey = ethUtil.keccak256(pubKey)
let truncatedHashedPubKey = hashedPubKey.slice(12)
let keyWithHex = '0x'+truncatedHashedPubKey.toString('hex')

return {
    PrivateKey: '0x' + privKey.toString('hex'),
    address: keyWithHex };
}

let listPair = function() {
while(true) { let data = Generator();
    if(data.address.slice(0, 6) === '0x1234') {
    return data; } }};

console.log(listPair())

