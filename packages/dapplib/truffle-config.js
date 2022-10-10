require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture bread tail tragic educate ranch remember modify half clip obscure gauge'; 
let testAccounts = [
"0x13d915ad3bc3e4129cba06f503c9bbc3cd233374df365fd087d26c1fe97e64a2",
"0xa39e657aba75d39e39f4b127e85f7f62512e4b71f2b08704e88a82aabe73d49c",
"0x1fb546a677f5ef2ae6fc14ca12eb6aaed6bb4561e51b46cb6d1fae65e014b49c",
"0x969d8861b3ec42b0be2bcd51517b65852f303cf35e99e4d266fe1f88b2eef499",
"0x727c39b8a9fa573b4fb17ac4a67dec0cca10f86456a1fdad0210126231f70e56",
"0x7f05fd06415c42cbfeb7da65459f4d716574ff0af3b834a34122e67ac7024638",
"0xcf7a709b233db534229874fdb1837cc64a800b042e4b5115f6d02ec50aa00822",
"0x3fbcbc87c8e7be33720186b43812aa8494179be64e63f91cfe03421db2f164cc",
"0x0a3d06464126a8f095e632b80b2e1c45c2cccbcff113fbee1633532c5bba6598",
"0x63cd3cdd5f833ac2e2821d4b25746fe00a9475db0bbd3ba8270ff72da9095751"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

