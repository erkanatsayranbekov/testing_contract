const { ethers } = require('hardhat');

async function main(){
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    let balance = await deployer.provider.getBalance(deployer.address);
    balance = ethers.formatEther(balance);
    console.log("Account balance: ", balance);

    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    const transaction = await counter.waitForDeployment();
    console.log("Contract address: ", transaction.target);
}

main().then(() => process.exit(0)).catch(() => process.exit(1))