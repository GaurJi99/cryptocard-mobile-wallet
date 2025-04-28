
import React from "react";

interface WalletCardProps {
  name: string;
  balance: string;
  usdValue: string;
  icon: string;
  onClick?: () => void;
}

const WalletCard: React.FC<WalletCardProps> = ({ name, balance, usdValue, icon, onClick }) => {
  const getIconBackgroundColor = () => {
    if (name === "USDT") return "bg-crypto-usdt";
    if (name === "USDC") return "bg-crypto-usdc";
    if (name === "USD") return "bg-cryptoCard-primary";
    return "bg-green-500";
  };

  return (
    <button 
      className="wallet-card hover-scale shadow-md focus:outline-none w-full text-left transition-all duration-200 hover:shadow-lg"
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-md ${getIconBackgroundColor()}`}>
          <span>{icon}</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold">{name}</span>
            <div className="text-xs text-gray-500">≈ {usdValue} USD</div>
          </div>
          <div className="text-2xl font-bold text-gray-900 mt-1">{balance}</div>
        </div>
      </div>
    </button>
  );
};

export default WalletCard;
