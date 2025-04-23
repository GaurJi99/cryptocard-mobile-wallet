
import React from "react";
import { Eye, Snowflake, ShieldAlert, Settings } from "lucide-react";

interface CardActionProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const CardAction: React.FC<CardActionProps> = ({ icon, label, onClick }) => {
  return (
    <button 
      className="flex flex-col items-center" 
      onClick={onClick}
    >
      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
};

const CardActions: React.FC = () => {
  return (
    <div className="flex justify-around my-6">
      <CardAction 
        icon={<Eye size={20} />} 
        label="View" 
      />
      <CardAction 
        icon={<Snowflake size={20} />} 
        label="Freeze" 
      />
      <CardAction 
        icon={<ShieldAlert size={20} />} 
        label="Limit" 
      />
      <CardAction 
        icon={<Settings size={20} />} 
        label="Settings" 
      />
    </div>
  );
};

export default CardActions;
