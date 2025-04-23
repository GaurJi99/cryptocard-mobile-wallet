
import React from "react";
import MobileLayout from "@/components/layout/MobileLayout";
import ActionButtons from "@/components/sections/ActionButtons";
import WalletCard from "@/components/ui/WalletCard";
import TransactionItem from "@/components/ui/TransactionItem";
import { MOCK_WALLETS, MOCK_TRANSACTIONS } from "@/lib/constants";
import { Eye, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const totalValue = MOCK_WALLETS.reduce((sum, wallet) => sum + parseFloat(wallet.usdValue), 0).toFixed(2);

  return (
    <MobileLayout activeTab="home">
      <header className="px-4 pt-6 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <h1 className="text-xl font-bold">CryptoCard</h1>
        </div>
        <div className="flex items-center gap-4">
          <button>
            <Bell size={20} />
          </button>
        </div>
      </header>

      <section className="px-4">
        <div className="flex items-center gap-2 mb-1 text-gray-500">
          <span>Est. Total Value (USD)</span>
          <Eye size={16} />
        </div>
        <div className="flex items-center">
          <h1 className="text-3xl font-bold">{totalValue}</h1>
          <span className="text-gray-400 ml-2">&#62;</span>
        </div>
      </section>

      <ActionButtons />

      <section className="px-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MOCK_WALLETS.map(wallet => (
            <WalletCard
              key={wallet.id}
              name={wallet.name}
              balance={wallet.balance}
              usdValue={wallet.usdValue}
              icon={wallet.icon}
            />
          ))}
        </div>
      </section>

      <section className="px-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold">Cards</h2>
        </div>
        
        <Link to="/card" className="block">
          <div className="border border-gray-200 rounded-xl p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-cryptoCard-primary rounded-md flex items-center justify-center text-white font-bold">P</div>
              <div>
                <h3 className="font-medium">Get your first card</h3>
                <p className="text-sm text-gray-500">Unlock simple spending with your crypto.</p>
              </div>
            </div>
            <button className="mt-4 w-full py-3 rounded-full bg-gray-100 text-sm font-medium">
              Apply card
            </button>
          </div>
        </Link>
      </section>

      <section className="px-4 mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold">Transactions</h2>
          <button className="text-gray-500">
            •••
          </button>
        </div>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          {MOCK_TRANSACTIONS.map((transaction, index) => (
            <TransactionItem
              key={index}
              merchant={transaction.merchant}
              amount={transaction.amount}
              date={transaction.date}
              status={transaction.status}
              cardLastFour={transaction.cardLastFour}
            />
          ))}
        </div>
      </section>
    </MobileLayout>
  );
};

export default Home;
