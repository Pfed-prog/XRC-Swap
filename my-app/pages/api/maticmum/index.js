import { getContractInfo } from "../../../utils/contracts";
import { ethers } from "ethers";
import UniswapV2Pair from "../../../utils/contracts/UniswapV2Pair.json";
import ERC20 from "../../../utils/contracts/ERC20.json";

export default async function handler(req, res) {
  try {
    const { address, abi } = getContractInfo(80001);

    var customHttpProvider = new ethers.providers.JsonRpcProvider(
      "https://rpc-mumbai.maticvigil.com"
    );

    const contract = new ethers.Contract(address, abi, customHttpProvider);

    const currentCount = ethers.BigNumber.from(
      await contract.allPairsLength()
    ).toNumber();

    let items = [];

    for (let i = currentCount; i > 0; i--) {
      const pairAddress = await contract.allPairs(i - 1);
      const Pair = new ethers.Contract(
        pairAddress,
        UniswapV2Pair.abi,
        customHttpProvider
      );

      const token0 = await Pair.token0();
      const token1 = await Pair.token1();

      const Token0 = new ethers.Contract(token0, ERC20.abi, customHttpProvider);
      const Token1 = new ethers.Contract(token0, ERC20.abi, customHttpProvider);

      const name0 = await Token0.name();
      const name1 = await Token1.name();

      const reserves = await Pair.getReserves();
      const reserves0 = ethers.BigNumber.from(reserves._reserve0).toNumber();
      const reserves1 = ethers.BigNumber.from(reserves._reserve1).toNumber();

      const supply = ethers.BigNumber.from(await Pair.totalSupply()).toNumber();

      items.push({
        token0Address: token0,
        token1Address: token1,
        token0Name: name0,
        token1Name: name1,
        token0Reserves: reserves0,
        token1Reserves: reserves1,
        totalSupply: supply,
        pairAddress: pairAddress,
      });
    }

    res.status(200).json(items);
  } catch (err) {
    res.status(500).send({ error: "failed to fetch data" + err });
  }
}