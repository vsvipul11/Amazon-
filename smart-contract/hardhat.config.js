require('@nomiclabs/hardhat-waffle')
require('dotenv').config({ path: '.env' })

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})
const ALCHEMY_API_KEY="wI2o6lJZGNKJXCickhw9iicusMG9tdN5";
const RINKEBY_PRIVATE_KEY="40d9968cbb722a30e46ed94af33ad5dc081216b4232501494345ba36633292ab";


module.exports = {
  solidity: '0.8.4',
  networks:{
    rinkeby:{
      url:`https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts:[`${RINKEBY_PRIVATE_KEY}`],


    },
  }
  
};