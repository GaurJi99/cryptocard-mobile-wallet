
import React from "react";

interface WalletCardProps {
  name: string;
  balance: string;
  usdValue: string;
  icon: string;
}

const WalletCard: React.FC<WalletCardProps> = ({ name, balance, usdValue, icon }) => {
  const getIconBackgroundColor = () => {
    if (name === "USDT") return "bg-crypto-usdt";
    if (name === "USDC") return "bg-crypto-usdc";
    return "bg-green-500";
  };

  return (
    <div className="wallet-card">
      <div className="flex items-center gap-2">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${getIconBackgroundColor()}`}>
          <span>{icon}</span>
        </div>
        <span className="text-lg font-medium">{name}</span>
      </div>

      <div className="mt-3">
        <div className="text-2xl font-bold">{balance}</div>
        <div className="text-sm text-gray-500">≈{usdValue} USD</div>
      </div>
    </div>
  );
};

export default WalletCard;
