
import { Link } from "react-router-dom";
import { Home, CreditCard, Info, Menu } from "lucide-react";

type BottomNavigationProps = {
  activeTab: "home" | "card" | "benefits" | "hub";
};

const BottomNavigation = ({ activeTab }: BottomNavigationProps) => {
  const tabs = [
    { 
      name: "home", 
      label: "Home", 
      icon: Home, 
      path: "/" 
    },
    { 
      name: "card", 
      label: "Card", 
      icon: CreditCard, 
      path: "/card" 
    },
    { 
      name: "benefits", 
      label: "Benefits", 
      icon: Info, 
      path: "/benefits" 
    },
    { 
      name: "hub", 
      label: "Hub", 
      icon: Menu, 
      path: "/hub" 
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 flex items-center justify-around h-20 px-2 z-50 shadow-lg">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          to={tab.path}
          className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 ${
            activeTab === tab.name 
              ? "text-cryptoCard-primary scale-110" 
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          <tab.icon size={24} strokeWidth={2} />
          <span className="text-xs mt-1 font-medium">{tab.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default BottomNavigation;
