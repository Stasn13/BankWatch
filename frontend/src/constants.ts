import badge1 from './assets/64182.svg';
import badge2 from './assets/64183.svg';
import badge3 from './assets/66917.svg';
import badge4 from './assets/66918.svg';

export const LINEA_SEPOLIA_PORTAL_ADDRESS = "0xbcfdd269eb98bf839b6b098e11ed3121123c5752";

export const LINEA_SEPOLIA_HEALTH3_BADGE = "0x32649d42f5bfd50c099f6a5bc2ed2915cebb80cf8f2fd4de928c68f3ae5e0194";
export const LINEA_SEPOLIA_HEALTH10_BADGE = "0x975af5e8ecbc17251efb69b10570e31528152820376d928ef95d6656c0d1732e";
export const LINEA_SEPOLIA_COLLATERAL500_BADGE = "0x96a5d50b397785e50d3c4e100c3e29f60c8d2cbf2a33040444bd43dbc12ec36c";
export const LINEA_SEPOLIA_COLLATERAL1000_BADGE = "0x98863b9b46a85ca7bcbb2e5bacd50485380affebf5a1e8785b9bad5191275b9b";

export const LINEA_SEPOLIA_BANK_SCORE = "0x6b46b72dff4589958a45395d42366455a966477ca7a4f49267c000f2719e04ca";

export const badgesData = [
    {
        name: "Healthy Achiever",
        description: "This user has maintained a Health Score > 3, showcasing good assurance of your collateral",
        img: badge1,
        schema: LINEA_SEPOLIA_HEALTH3_BADGE
    },
    {
        name: "Health Champion",
        description: "Verified as having a Health score > 10, determine the strong strong financial responsibility",
        img: badge2,
        schema: LINEA_SEPOLIA_HEALTH10_BADGE
    },
    {
        name: "Collateral Verified",
        description: "This badge verifies the user has Collateral base over 500$, ensuring strong financial backing",
        img: badge3,
        schema: LINEA_SEPOLIA_COLLATERAL500_BADGE
    },
    {
        name: "Secured Lender",
        description: "This badge highlights Collateral base > 1000$, reflecting the user’s significant collateral base, ensuring credibility and trustworthiness in financial",
        img: badge4,
        schema: LINEA_SEPOLIA_COLLATERAL1000_BADGE
    }
]