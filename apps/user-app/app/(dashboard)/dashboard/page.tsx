import prisma from "@repo/db/client";
import { AddMoney } from "../../../components/AddMoneyCard";
import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransactions } from "../../../components/OnRampTransactions";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import Image from 'next/image'
import profilePic from '/Users/aadarshsharma/Desktop/home-pay-friends-right.webp'

async function getBalance() {
    const session = await getServerSession(authOptions);
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}

async function getOnRampTransactions() {
    const session = await getServerSession(authOptions);
    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}

export default async function() {

    return <div className="w-screen">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
            Dashboard
        </div>
        <div className="font-bold text-2xl pt-2 mb-12 font-sans">
            Hi, welcome to your dashboard!
        </div>
        <div>
            <div className="text-2xl mb-4">Pay friends</div>
            <div className="grid grid-cols-1 md:grid-cols-2"> 
                <div className="font-sans">
                    Transafer provides a seamless way for users 
                    to add funds to their digital wallet and make peer-to-peer transfers. 
                    Leveraging the Bank API, users can securely link their bank accounts to the wallet, 
                    enabling quick and convenient fund transfers. Whether sending money to friends, family, 
                    or splitting bills, our platform simplifies the process with easy-to-use interfaces and robust
                    security measures. With a focus on user experience and reliability, we aim to redefine how people
                    manage and transfer their funds digitally.
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
        </div>
    </div>
}