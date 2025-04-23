
import React from "react";
import MobileLayout from "@/components/layout/MobileLayout";
import CryptoCard from "@/components/ui/CryptoCard";
import CardActions from "@/components/sections/CardActions";
import TransactionItem from "@/components/ui/TransactionItem";
import { MOCK_CARDS, MOCK_TRANSACTIONS } from "@/lib/constants";
import { MailOpen, Plus, Filter } from "lucide-react";

const CardPage: React.FC = () => {
  // Use the first card for display, or handle empty state
  const card = MOCK_CARDS[0] || { 
    id: 'default',
    lastFour: '0000', 
    network: 'visa' as const,
    name: undefined,
    frozen: false,
    expired: false
  };
  const cardTransactions = MOCK_TRANSACTIONS.filter(tx => tx.cardLastFour === card.lastFour);

  return (
    <MobileLayout activeTab="card">
      <header className="px-4 pt-6 pb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Cards</h1>
        <div className="flex items-center gap-4">
          <button>
            <MailOpen size={20} />
          </button>
          <button>
            <Plus size={20} />
          </button>
        </div>
      </header>

      <section className="px-4 mb-2">
        <CryptoCard
          lastFour={card.lastFour}
          network={card.network}
          name={card.name}
          frozen={card.frozen}
          showDetails={false}
        />
      </section>

      <CardActions />

      <section className="px-4 mb-4">
        <button className="mb-4 w-full py-3 bg-black text-white rounded-full font-medium flex items-center justify-center gap-2">
          <span className="flex items-center gap-1">
            <img src="https://www.gstatic.com/images/icons/material/product/1x/wallet_32dp.png" alt="Google Wallet" className="w-4 h-4" />
            Add to Google Wallet
          </span>
        </button>
      </section>

      <section className="px-4 mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold">Transactions</h2>
          <div className="flex items-center gap-3">
            <button>
              <Filter size={18} />
            </button>
            <button className="text-gray-500">
              •••
            </button>
          </div>
        </div>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          {cardTransactions.length > 0 ? (
            cardTransactions.map((transaction, index) => (
              <TransactionItem
                key={index}
                merchant={transaction.merchant}
                amount={transaction.amount}
                date={transaction.date}
                status={transaction.status}
                cardLastFour={transaction.cardLastFour}
              />
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">
              No transactions yet
            </div>
          )}
        </div>
      </section>
    </MobileLayout>
  );
};

export default CardPage;
