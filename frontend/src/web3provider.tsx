import { lineaSepolia, mainnet, sepolia} from 'wagmi/chains';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createConfig, WagmiProvider } from 'wagmi';

export const walletConnectProjectId = 'd149fd0b3fe44636121032492ed688e2';
const chains = [lineaSepolia, sepolia, mainnet] as const;
export const wagmiConfig = createConfig(
  getDefaultConfig({
    chains,
    walletConnectProjectId,
    appName: 'BankWatch',
    appDescription: 'Issue attestation to proof that you are reliable borrower',
  }),
);


const queryClient = new QueryClient();

export const Web3Provider = ({ children }: {children: React.ReactNode}) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};