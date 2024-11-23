import badge1 from './assets/64182.svg';
import badge2 from './assets/64183.svg';
import badge3 from './assets/66917.svg';
import badge4 from './assets/66918.svg';

export const LINEA_SEPOLIA_PORTAL_ADDRESS = "0xbcfdd269eb98bf839b6b098e11ed3121123c5752";

export const LINEA_SEPOLIA_HEALTH3_BADGE = "0x5555da02e08a808bb88097f6b04134e221edb123115d531dda3b6e3ce0e36a36";
export const LINEA_SEPOLIA_HEALTH10_BADGE = "0x811159888218a12deb9209ec3f1f1d3e150a0aa05042bead0e9b8a857deee827";
export const LINEA_SEPOLIA_COLLATERAL500_BADGE = "0xb722ce9b358f53a06126b7053c9e5712c8b984e160c1f9ba9c96f80c1cca5579";
export const LINEA_SEPOLIA_COLLATERAL1000_BADGE = "0x8c84aae5181fd0a1a2440de031b5fd9f0eb833aa0398f23c9722f10561ebb08e";

export const LINEA_SEPOLIA_BANK_SCORE = "0x6b46b72dff4589958a45395d42366455a966477ca7a4f49267c000f2719e04ca";

export const badgesData = [
    {
        name: "Healthy Achiever",
        description: "This user has maintained a Health Score > 3, showcasing good assurance of your collateral",
        img: badge1,
        schema: LINEA_SEPOLIA_HEALTH3_BADGE,
        badgeName: "health3_claimed_by",
    },
    {
        name: "Health Champion",
        description: "Verified as having a Health score > 10, determine the strong strong financial responsibility",
        img: badge2,
        badgeName: "health10_claimed_by",
        schema: LINEA_SEPOLIA_HEALTH10_BADGE
    },
    {
        name: "Collateral Verified",
        description: "This badge verifies the user has Collateral base over 500$, ensuring strong financial backing",
        img: badge3,
        badgeName: "collateral500_claimed_by",
        schema: LINEA_SEPOLIA_COLLATERAL500_BADGE
    },
    {
        name: "Secured Lender",
        description: "This badge highlights Collateral base > 1000$, reflecting the user’s significant collateral base, ensuring credibility and trustworthiness in financial",
        img: badge4,
        badgeName: "collateral1000_claimed_by",
        schema: LINEA_SEPOLIA_COLLATERAL1000_BADGE
    }
]