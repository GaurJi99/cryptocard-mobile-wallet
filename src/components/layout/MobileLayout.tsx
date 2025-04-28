
import { ReactNode } from "react";
import BottomNavigation from "./BottomNavigation";

interface MobileLayoutProps {
  children: ReactNode;
  hideNavigation?: boolean;
  activeTab?: "home" | "card" | "benefits" | "hub";
}

const MobileLayout = ({
  children,
  hideNavigation = false,
  activeTab = "home",
}: MobileLayoutProps) => {
  return (
    <div className="mobile-container flex flex-col bg-gradient-to-br from-cryptoCard-light via-white to-gray-50">
      <div className="flex-1 overflow-y-auto pb-20 pt-6 px-4 scrollbar-none">
        {children}
      </div>
      {!hideNavigation && <BottomNavigation activeTab={activeTab} />}
    </div>
  );
};

export default MobileLayout;
