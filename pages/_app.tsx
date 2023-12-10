import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, Chain } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  arbitrum,
  goerli,
  mainnet,
  optimism,
  polygon,
  base,
  zora,
  manta,
  mantleTestnet,
  sepolia,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

// const EthTestnet: Chain = {
//   id: 1,
//   name: 'LocalFork',
//   network: 'Mumbai Testnet',
//   nativeCurrency: { name: 'TestEth', symbol: 'ETH', decimals: 18 },
//   rpcUrls: {
//     public: { http: ['http://13.232.85.53:8545/'] },
//     default: { http: ['http://13.232.85.53:8545/'] },
//   },
//   testnet: true,
// };

// const { chains: ethChains } = configureChains([EthTestnet], [publicProvider()]);

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
    manta,
    mantleTestnet,
    sepolia,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Cross-Chain',
  projectId: '754200c0317eb11745c63f81ade362a9',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;