import { Card } from '../ui/Card';
import BadgeCard from '../ui/BadgeCard';

import badge1 from '../assets/64182.svg';
import badge2 from '../assets/64183.svg';
import badge3 from '../assets/66917.svg';
import badge4 from '../assets/66918.svg';
import { useReadContract } from 'wagmi';
import { LINEA_SEPOLIA_PORTAL_ADDRESS } from '../constants';
import { useEffect } from 'react';


export const badgesData = [
    {
        name: "Badge",
        description: "Lorem ipsum dolor sit amet",
        img: badge1
    },
    {
        name: "Badge",
        description: "Lorem ipsum dolor sit amet",
        img: badge2
    },
    {
        name: "Badge",
        description: "Lorem ipsum dolor sit amet",
        img: badge3
    },
    {
        name: "Badge",
        description: "Lorem ipsum dolor sit amet",
        img: badge4
    }
]

const Badges = ({ veraxSdk }: { veraxSdk: any }) => {

    const issueAttestation = async () => {
        try {
            let receipt = await veraxSdk.portal.attest(
                LINEA_SEPOLIA_PORTAL_ADDRESS,
                {
                    schemaId:
                        '0x5dc8bc9158dd69ee8a234bb8f9ab1f4f17bb52c84b6fd4720d58ec82bb43d2f5', // todo use my schema
                    expirationDate: Math.floor(Date.now() / 1000) + 2592000,
                    subject: 0x230cDe8909aeBBc48CfBDf6fCc9A642439d77F83, //address,
                    attestationData: [
                        // {
                        //     contract: ,
                        //     balance,
                        // },
                    ],
                },
            );
            console.log(receipt)
        } catch (e) {
            console.error(e);
            if (e instanceof Error) {
                if (e.message.includes('User rejected the request')) {
                    console.log('User denied transaction signature');
                } else {
                    console.log(`${DEFAULT_ERROR_MESSAGE} - ${e.message}`);
                }
            } else {
                console.log(DEFAULT_ERROR_MESSAGE);
            }
        }

        useEffect(() => {
            issueAttestation()
        }, [])
    }

    return (
        <Card className="bg-foreground-light">
            <div className="flex gap-3">
                {badgesData.map(badge => <BadgeCard badge={badge} key={badge.name} />)}
            </div>
        </Card>
    )
}

export default Badges
