/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 * 
 * https://trufflesuite.com/docs/truffle/reference/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

// const HDWalletProvider = require('@truffle/hdwallet-provider');
//
const HDWalletProvider = require('@truffle/hdwallet-provider'); 
require ('dotenv') .config();
const mnemonic = process.env["MNEMONIC"]

module.exports = {
 

  networks: {
   
  
      rinkeby: {
        networkCheckTimeout: 10000,
        provider: () => new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/68b848662d794a64b2ea81b81dc56230'),
        network_id: 4,       // Ropsten's id
        gas: 6721975,
        gasPrice: 20000000000,        // Ropsten has a lower block limit than mainnet
        confirmations: 2,    // # of confs to wait between deployments. (default: 0)
        timeoutBlocks: 2000000000,  // # of blocks before a deployment times out  (minimum/default: 50)
        skipDryRun: true  // Skip dry run before migrations? (default: false for public nets )
      
      },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 1000000
  },

  // Configure your compilers 0x08229957DB817B43E44b50223BF2C8cEcDCca91e
  compilers: {
    solc: {
      version: "0.5.16",      // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
       enabled: true,
       runs: 1000
        },
       evmVersion: "byzantium"
       },
    },
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows:
  // $ truffle migrate --reset --compile-all
  //
  // db: {
    // enabled: false,
    // host: "127.0.0.1",
    // adapter: {
    //   name: "sqlite",
    //   settings: {
    //     directory: ".db"
    //   }
    // }
  // }
};
