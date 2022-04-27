require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name reward stick clutch grace crime tackle typical'; 
let testAccounts = [
"0x1b0b70d762e99371b6e8e658fee802e783a37e8febc38675373c0e5998e4284d",
"0xd41b8eef610197211612167768a9f471fdf40ef5adbf3263d4c539fc643939be",
"0xa8b0a21a591f23c6d60ad6c04de1fc925f0f9137ba0e1307838f466beec02f60",
"0x8e439d3173152308e28f93c92f32990058036bf3e04322467b127e00d1624d50",
"0x2b557ccde384d172c01da72cd2206cd8cd63ddf65b6aa57e10dbf2841aef8bcf",
"0xe73d135b00c45f32eb0f0749d4aec6266a0c7911668f37b47a6762beb642ec0e",
"0xc22cba1465e0931170573cb321fc7d26ac3a3c48ba1aa5431dc98df5cae59988",
"0x8c491d002d2ebae29558168bb0741700b443606b92326028a2ec1f66e2e294cf",
"0xe34f2fa169371f73c56770c1e315cd9a5d7676cf3f17dbaf51e88f8a39f79597",
"0xae6802606563343edb22a1531519db03b59cf9666e9f95707a2e22ddfa78dc21"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

