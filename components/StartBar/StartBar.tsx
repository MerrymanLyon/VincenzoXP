import React from "react";
import styles from "./StartBar.module.css";
import Image from "next/image";
import winLogo from "../../assets/Windows-logo.png";
import StartMenu from "components/StartMenu/StartMenu";
import { useSelector } from "react-redux";
import { RootState } from "@/types";
import store from "@/redux/store";
import { removeTab, setFocusedTab, toggleMinimizeTab } from "@/redux/tabSlice";

interface StartBarProps {
  disabled?: boolean;
}

const StartBar: React.FC<StartBarProps> = ({ disabled = false }) => {
  const [openStartMenu, setOpenStartMenu] = React.useState(false);
  const Tabs = useSelector((state: RootState) => state.tab.tray);
  const currTabID = useSelector((state: RootState) => state.tab.id);

  const handleStartMenu = () => {
    if (disabled) return;
    setOpenStartMenu(!openStartMenu);
  };

  const handleTabClick = (id: number) => {
    const targetTab = Tabs.find((tab) => tab.id === id);
    if (!targetTab) return;

    if (targetTab.isMinimized) {
      store.dispatch(toggleMinimizeTab(id));
      store.dispatch(setFocusedTab(id));
    } else {
      if (currTabID === id) {
        store.dispatch(toggleMinimizeTab(id));
      } else {
        store.dispatch(setFocusedTab(id));
      }
    }
  };

  return (
    <div
      className={styles.startBar}
      style={{
        width: "100%",
        minWidth: "100%",
        boxSizing: "border-box",
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: 99999,
      }}
    >
      {openStartMenu && !disabled && (
        <StartMenu closeMenu={() => setOpenStartMenu(false)} />
      )}
      <div
        className={`${styles.startButton} ${disabled ? styles.disabledStart : ""}`}
        onClick={handleStartMenu}
        style={{
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.8 : 1,
        }}
      >
        <Image src={winLogo} alt="Windows Logo" width={18} height={18} />
        <span className={styles.startText}>start</span>
      </div>

      <div className={styles.taskbarItems}>
        {Tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${styles.taskbarItem} ${
              !tab.isMinimized && currTabID === tab.id ? styles.activeTask : ""
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            <Image src={tab.Icon} alt={tab.title} width={16} height={16} />
            <span className={styles.taskTitle}>{tab.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartBar;
