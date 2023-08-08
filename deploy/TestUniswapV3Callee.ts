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

  await deploy('TestUniswapV3Callee', {
    from: deployer,
    args: [],
    log: true,
    deterministicDeployment: false,
  })
}

func.tags = ['TestUniswapV3Callee']

export default func

// Usage: pnpm hardhat --network docker deploy --tags TestUniswapV3Callee
