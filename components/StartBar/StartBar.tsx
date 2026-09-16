import React, { useState } from "react";
import styles from "./StartBar.module.css";
import Image from "next/image";
import winLogo from "../../assets/Windows-logo.png";
import StartMenu from "components/StartMenu/StartMenu";
import { useSelector } from "react-redux";
import { RootState } from "@/types";
import store from "@/redux/store";
import { setFocusedTab } from "@/redux/tabSlice";

interface StartBarProps {
  disabled?: boolean;
}

const StartBar: React.FC<StartBarProps> = ({ disabled = false }) => {
  const [openStartMenu, setOpenStartMenu] = useState(false);
  const Tabs = useSelector((state: RootState) => state.tab.tray);
  const currTabID = useSelector((state: RootState) => state.tab.id);

  const handleStartClick = () => {
    if (disabled) return;
    setOpenStartMenu(!openStartMenu);
  };

  return (
    <div className={styles.startBar}>
      {openStartMenu && !disabled && (
        <StartMenu menuControl={() => setOpenStartMenu(false)} />
      )}
      <div
        className={styles.startButton}
        onClick={handleStartClick}
        style={{
          cursor: disabled ? "not-allowed" : "pointer",
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
            onClick={() => {
              if (disabled) return;
              store.dispatch(setFocusedTab(tab.id));
            }}
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
