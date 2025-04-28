
import React from "react";

interface TransactionItemProps {
  merchant: string;
  amount: string;
  date: string;
  status?: string;
  cardLastFour?: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  merchant,
  amount,
  date,
  status,
  cardLastFour,
}) => {
  const isPositive = amount.startsWith('+');
  const formattedDate = new Date(date).toLocaleDateString();
  
  return (
    <div className="py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors rounded-lg px-2">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shadow-sm">
            {merchant === 'Reward' ? '🎁' : '🏢'}
          </div>
          <div>
            <div className="font-semibold text-gray-900">{merchant}</div>
            {cardLastFour && (
              <div className="text-xs text-gray-500">•••• {cardLastFour}</div>
            )}
            <div className="text-xs text-gray-500">{formattedDate}</div>
          </div>
        </div>
        <div className="text-right">
          <div className={`font-semibold ${isPositive ? 'text-green-600' : 'text-gray-900'}`}>
            {amount} USD
          </div>
          {status && (
            <div className={`text-xs font-medium ${
              status === 'Declined' ? 'text-red-500' : 'text-green-600'
            }`}>
              {status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
