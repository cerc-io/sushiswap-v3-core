import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/dist/types'

const func: DeployFunction = async function ({
  ethers,
  getNamedAccounts,
  deployments,
  getChainId,
}: HardhatRuntimeEnvironment) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  const existingDeployments = await deployments.all()
  const n = Object.keys(existingDeployments).filter(key => key.startsWith('TestUniswapV3Callee')).length;
  const nextDeployment = `TestUniswapV3Callee-${n}`

  await deploy(nextDeployment, {
    from: deployer,
    args: [],
    log: true,
    deterministicDeployment: false,
    contract: 'TestUniswapV3Callee'
  })
}

func.tags = ['TestUniswapV3Callee']

export default func

// Usage: pnpm hardhat --network docker deploy --tags TestUniswapV3Callee
