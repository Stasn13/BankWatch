import { lineaSepolia, mainnet } from 'wagmi/chains';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createConfig, WagmiProvider } from 'wagmi';

export const walletConnectProjectId = 'd149fd0b3fe44636121032492ed688e2';
const chains = [lineaSepolia, mainnet] as const;
export const wagmiConfig = createConfig(
  getDefaultConfig({
    chains,
    walletConnectProjectId,
    appName: 'eFrogs Attestations',
    appDescription: 'Issue attestation of eFrogs ownership',
    appUrl: 'https://efrogs.alainnicolas.fr',
    appIcon: 'https://efrogs.alainnicolas.fr/favicon.jpg',
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