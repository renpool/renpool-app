import { deployments } from "renpool-contracts";

// export const NETWORK_CONTEXT_NAME = 'NETWORK'

// export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const NETWORKS = {
    1: {
        name: "Mainnet",
        faucet: "Mainnet",
        etherscan: "https://etherscan.io/address/",
        contracts: {
            REN_TOKEN: deployments.mainnet.renTokenAddr,
            DARKNODE_REGISTRY: deployments.mainnet.darknodeRegistryAddr,
            DARKNODE_REGISTRY_STORE: deployments.mainnet.darknodeRegistryStoreAddr,
            DARKNODE_PAYMENT: deployments.mainnet.darknodePaymentAddr,
            CLAIM_REWARDS: deployments.mainnet.claimRewardsAddr,
            GATEWAY_REGISTRY: deployments.mainnet.gatewayRegistryAddr,
            REN_POOL_FACTORY: "0x0000000000000000000000000000000000000000",
        },
    },
    // 3: {
    //   name: 'Ropsten',
    //   faucet: 'Ropsten',
    //   etherscan: 'https://ropsten.etherscan.io/address/',
    // },
    // 4: {
    //   name: 'Rinkeby',
    //   faucet: 'https://faucet.rinkeby.io',
    //   etherscan: 'https://rinkeby.etherscan.io/address/',
    // },
    // 5: {
    //   name: 'Goerli',
    //   faucet: 'Goerli',
    //   etherscan: 'https://goerli.etherscan.io/address/',
    // },
    42: {
        name: "Kovan",
        faucet: "https://support.mycrypto.com/how-to/getting-started/where-to-get-testnet-ether",
        etherscan: "https://kovan.etherscan.io/address/",
        contracts: {
            REN_TOKEN: deployments.kovan.renTokenAddr,
            DARKNODE_REGISTRY: deployments.kovan.darknodeRegistryAddr,
            DARKNODE_REGISTRY_STORE: deployments.kovan.darknodeRegistryStoreAddr,
            DARKNODE_PAYMENT: deployments.kovan.darknodePaymentAddr,
            CLAIM_REWARDS: deployments.kovan.claimRewardsAddr,
            GATEWAY_REGISTRY: deployments.kovan.gatewayRegistryAddr,
            // REN_POOL: '0xf1e98770ab8ed1364371B8c7DBdA56633F7cB6a9',
            REN_POOL_FACTORY: import.meta.env.VITE_REN_POOL_FACTORY,
        },
    },
    1337: {
        name: "Localhost 8545",
        faucet: "https://faucet.rinkeby.io",
        etherscan: "https://etherscan.io/address/",
        contracts: {
          REN_TOKEN: deployments.kovan.renTokenAddr,
          DARKNODE_REGISTRY: deployments.kovan.darknodeRegistryAddr,
          DARKNODE_REGISTRY_STORE: deployments.kovan.darknodeRegistryStoreAddr,
          DARKNODE_PAYMENT: deployments.kovan.darknodePaymentAddr,
          CLAIM_REWARDS: deployments.kovan.claimRewardsAddr,
          GATEWAY_REGISTRY: deployments.kovan.gatewayRegistryAddr,
          // REN_POOL: '0xf1e98770ab8ed1364371B8c7DBdA56633F7cB6a9',
          REN_POOL_FACTORY: import.meta.env.VITE_REN_POOL_FACTORY,
        },
    },
};

// export const SUPPORTED_CHAIN_IDS = Object.keys(NETWORKS).map(key => parseInt(key, 10))

export const CHAIN_ID = import.meta.env.VITE_CHAIN_ID;
export const NETWORK = NETWORKS[CHAIN_ID];

// export enum ContractNames {
// RenPool = 'RenPool',
// RenToken = 'RenToken',
// ^ Implementation of the Ren Token used when network === '1337'.
// In live networks we use the IERC20 interface.
// See /context/RenTokenProvider.tsx
// }

// export const DEFAULT_REQUEST_TIMEOUT = 60 * 1000
