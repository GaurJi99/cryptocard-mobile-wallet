
import React from "react";
import MobileLayout from "@/components/layout/MobileLayout";
import { Mail, Gift, Ticket, BookOpen, Users, MessageCircle } from "lucide-react";

interface CategoryItemProps {
  icon: React.ReactNode;
  label: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-2">
        {icon}
      </div>
      <span className="text-xs">{label}</span>
    </div>
  );
};

const HubPage: React.FC = () => {
  return (
    <MobileLayout activeTab="hub">
      <header className="px-4 pt-6 pb-4">
        <h1 className="text-2xl font-bold">Hub</h1>
      </header>

      <section className="px-4 mb-6">
        <h2 className="text-lg font-bold mb-4">Popular</h2>
        <div className="grid grid-cols-3 gap-4">
          <CategoryItem icon={<Mail size={24} />} label="Referral" />
          <CategoryItem icon={<Gift size={24} />} label="Gift" />
          <CategoryItem icon={<Ticket size={24} />} label="Vouchers" />
        </div>
      </section>

      <section className="px-4 mb-6">
        <h2 className="text-lg font-bold mb-4">Card</h2>
        <div className="grid grid-cols-3 gap-4">
          <CategoryItem 
            icon={<div className="w-6 h-4 bg-red-400 rounded-sm"></div>} 
            label="Apply" 
          />
          <CategoryItem 
            icon={<div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-md">💰</div>} 
            label="Priority" 
          />
        </div>
      </section>

      <section className="px-4 mb-6">
        <h2 className="text-lg font-bold mb-4">Transaction</h2>
        <div className="grid grid-cols-4 gap-4">
          <CategoryItem icon={<span className="text-xl">💳</span>} label="Deposit" />
          <CategoryItem icon={<span className="text-xl">💸</span>} label="Withdraw" />
          <CategoryItem icon={<span className="text-xl">📤</span>} label="Send" />
          <CategoryItem icon={<span className="text-xl">📥</span>} label="Receive" />
        </div>
      </section>

      <section className="px-4 mb-8">
        <h2 className="text-lg font-bold mb-4">Support</h2>
        <div className="grid grid-cols-3 gap-4">
          <CategoryItem icon={<BookOpen size={24} />} label="Learn" />
          <CategoryItem icon={<Users size={24} />} label="Community" />
          <CategoryItem icon={<MessageCircle size={24} />} label="Chat" />
        </div>
      </section>
    </MobileLayout>
  );
};

export default HubPage;
