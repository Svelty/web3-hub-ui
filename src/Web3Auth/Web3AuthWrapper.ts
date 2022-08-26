import { CHAIN_NAMESPACES } from "@web3auth/base";
// import { Web3Auth } from "@web3auth/web3auth/dist/types/modalManager";
import { Web3Auth } from "@web3auth/web3auth";

// // @ts-ignore
export const web3auth = new Web3Auth({
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: '0x5',
    rpcTarget: '',
    displayName: 'Goerli',
    blockExplorer: 'https://goerli.etherscan.io/',
    ticker: 'g-ETH',
    tickerName: 'Goerli Ethereum',
  },
  clientId: '',
  authMode: 'DAPP',//Other option is to run in WALLET mode if we have a wallet implementation
});

// web3auth.initModal()