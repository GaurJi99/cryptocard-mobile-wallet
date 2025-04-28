import React from "react";
import { Plus, ArrowRight, ArrowLeft, Menu } from "lucide-react";

interface ActionButtonsProps {
  onDeposit: () => void;
  onSend: () => void;
  onConvert: () => void;
  onMore: () => void;
}

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  primary?: boolean;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, primary = false, onClick }) => {
  return (
    <button
      className={`flex flex-col items-center mx-1 focus:outline-none`}
      type="button"
      tabIndex={0}
      onClick={onClick}
    >
      <div className={`action-button hover-scale ${primary ? 'action-button-primary' : 'action-button-secondary'} shadow-md`}>
        {icon}
      </div>
      <span className="text-xs mt-1 font-medium">{label}</span>
    </button>
  );
};

const ActionButtons: React.FC<ActionButtonsProps> = ({ onDeposit, onSend, onConvert, onMore }) => {
  return (
    <div className="flex justify-around my-5 gap-1">
      <ActionButton 
        icon={<Plus size={24} />} 
        label="Deposit"
        primary
        onClick={onDeposit}
      />
      <ActionButton 
        icon={<ArrowRight size={24} />} 
        label="Send"
        onClick={onSend}
      />
      <ActionButton 
        icon={<ArrowLeft size={24} />} 
        label="Convert"
        onClick={onConvert}
      />
      <ActionButton 
        icon={<Menu size={24} />} 
        label="More"
        onClick={onMore}
      />
    </div>
  );
};

export default ActionButtons;
