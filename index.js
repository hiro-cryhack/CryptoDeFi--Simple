const ethers = require('ethers');
const fs = require('fs');

// 读取智能合约 ABI
const contractAbi = JSON.parse(fs.readFileSync('SimpleDeFi.json'));

// 与以太坊节点连接
const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/your_infura_project_id');

// 使用私钥实例化钱包
const privateKey = 'your_private_key';
const wallet = new ethers.Wallet(privateKey, provider);

// 实例化智能合约
const contractAddress = 'your_contract_address';
const contract = new ethers.Contract(contractAddress, contractAbi, wallet);

// 交互示例：存款
async function deposit() {
    const amount = ethers.utils.parseEther('0.1'); // 存款金额，以太为单位
    const tx = await contract.deposit({ value: amount });
    await tx.wait();
    console.log('Deposit successful!');
}

// 交互示例：提款
async function withdraw() {
    const amount = ethers.utils.parseEther('0.05'); // 提款金额，以太为单位
    const tx = await contract.withdraw(amount);
    await tx.wait();
    console.log('Withdrawal successful!');
}

// 调用示例函数
deposit();
// withdraw();
