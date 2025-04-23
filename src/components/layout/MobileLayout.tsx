
import { ReactNode } from "react";
import BottomNavigation from "./BottomNavigation";

interface MobileLayoutProps {
  children: ReactNode;
  hideNavigation?: boolean;
  activeTab?: "home" | "card" | "benefits" | "hub";
}

const MobileLayout = ({ children, hideNavigation = false, activeTab = "home" }: MobileLayoutProps) => {
  return (
    <div className="mobile-container flex flex-col">
      <div className="flex-1 overflow-y-auto pb-16">
        {children}
      </div>
      {!hideNavigation && <BottomNavigation activeTab={activeTab} />}
    </div>
  );
};

export default MobileLayout;
