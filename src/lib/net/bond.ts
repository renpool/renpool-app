import { BigNumber } from '@ethersproject/bignumber'

export const DECIMALS = 18

export const TENS = BigNumber.from(10).pow(DECIMALS)

export const BOND = BigNumber.from(100_000).mul(TENS)

export const MAX_UINT256 = BigNumber.from(2).pow(256).sub(1)

export const FAUCET_AMOUNT = BigNumber.from(1000).mul(TENS)
