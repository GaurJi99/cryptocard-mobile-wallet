
import React from "react";
import { PlusCircle, ArrowRightLeft, SendHorizontal, MoreHorizontal } from "lucide-react";

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  primary?: boolean;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, primary = false, onClick }) => {
  return (
    <div className="flex flex-col items-center" onClick={onClick}>
      <div className={`action-button ${primary ? 'action-button-primary' : 'action-button-secondary'}`}>
        {icon}
      </div>
      <span className="text-xs mt-1">{label}</span>
    </div>
  );
};

const ActionButtons: React.FC = () => {
  return (
    <div className="flex justify-around my-6">
      <ActionButton 
        icon={<PlusCircle size={24} />} 
        label="Deposit"
        primary 
      />
      <ActionButton 
        icon={<SendHorizontal size={24} />} 
        label="Send" 
      />
      <ActionButton 
        icon={<ArrowRightLeft size={24} />} 
        label="Convert" 
      />
      <ActionButton 
        icon={<MoreHorizontal size={24} />} 
        label="More" 
      />
    </div>
  );
};

export default ActionButtons;
