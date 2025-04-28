
import React from "react";

interface CryptoCardProps {
  lastFour: string;
  network: "visa" | "mastercard";
  name?: string;
  frozen?: boolean;
  showDetails?: boolean;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ 
  lastFour, 
  network, 
  name, 
  frozen = false, 
  showDetails = false 
}) => {
  return (
    <div className={`crypto-card backdrop-blur-xl bg-gradient-to-br from-cryptoCard-dark via-cryptoCard-dark/90 to-cryptoCard-dark/80 ${frozen ? "opacity-75" : ""}`}>
      {/* Card Logo */}
      <div className="absolute top-4 left-4">
        <div className="text-white font-bold text-2xl bg-white/10 p-2 rounded-lg">P</div>
      </div>
      
      {/* Card Holder Name */}
      {name && (
        <div className="absolute top-4 right-4">
          <span className="text-sm text-white/90 font-medium bg-white/10 py-1 px-3 rounded-full">
            {name}
          </span>
        </div>
      )}
      
      {/* Card Number */}
      <div className="absolute bottom-14 left-4">
        {showDetails ? (
          <div className="flex space-x-3">
            <div className="text-lg font-mono text-white/80">••••</div>
            <div className="text-lg font-mono text-white/80">••••</div>
            <div className="text-lg font-mono text-white/80">••••</div>
            <div className="text-lg font-mono text-white/90">{lastFour}</div>
          </div>
        ) : (
          <div className="text-lg font-mono text-white/90">•••• {lastFour}</div>
        )}
      </div>
      
      {/* Card Network */}
      <div className="absolute bottom-4 right-4">
        {network === "visa" && (
          <div className="text-white font-bold text-2xl tracking-wider">VISA</div>
        )}
        {network === "mastercard" && (
          <div className="flex">
            <div className="w-7 h-7 rounded-full bg-red-500 opacity-90"></div>
            <div className="w-7 h-7 rounded-full bg-yellow-500 opacity-90 -ml-4"></div>
          </div>
        )}
      </div>
      
      {/* Frozen Overlay */}
      {frozen && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-2xl">
          <div className="text-white text-xl font-bold bg-white/10 px-6 py-2 rounded-lg">
            FROZEN
          </div>
        </div>
      )}
    </div>
  );
};

export default CryptoCard;
