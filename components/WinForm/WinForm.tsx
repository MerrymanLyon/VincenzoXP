import { ReactNode, useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import styles from "./WinForm.module.css";
import WinToolBar from "components/WinToolbar/WinToolBar";
import { StaticImageData } from "next/image";
import Image from "next/image";
import {
  maximizeTab,
  minimizeTab,
  removeTab,
  setFocusedTab,
} from "@/redux/tabSlice";
import store from "@/redux/store";
import { useSelector } from "react-redux";
import { App, RootState } from "@/types";

const unfocusedAdjustment = "brightness(1.05)";

const WinForm = (props: {
  id: number;
  title: string;
  message: string;
  children: ReactNode;
  icon: StaticImageData;
  zIndex: number;
  programType: App;
  prompt: boolean;
}) => {
  const [isMaximized, setMaximised] = useState(false);
  const [isMinimized, setMinimised] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const nodeRef = useRef<HTMLDivElement>(null);

  const currTabID = useSelector(
    (state: RootState) => state.tab.currentFocusedTab
  );

  // Sincronizza il focus iniziale all'apertura se non c'è un'altra finestra attiva
  useEffect(() => {
    if (currTabID === -1 || currTabID === 0) {
      store.dispatch(setFocusedTab({ id: props.id }));
    }
  }, []);

  const handleMaximize = () => {
    setMaximised(!isMaximized);
    store.dispatch(maximizeTab({ id: props.id }));
    store.dispatch(setFocusedTab({ id: props.id }));
  };

  const handleMinimize = () => {
    setMinimised(!isMinimized);
    store.dispatch(minimizeTab({ id: props.id }));
    store.dispatch(setFocusedTab({ id: -1 }));
  };

  const handleClose = () => {
    store.dispatch(removeTab({ id: props.id }));
  };

  const handleDrag = (_e: any, data: { x: number; y: number }) => {
    setPosition({ x: data.x, y: data.y });
  };

  const promptDisplay = "inline";
  const promptWidth = "450px";
  const promptHeight = "auto";
  const normalDisplay = isMinimized ? "none" : "flex";
  const normalWidth = isMaximized ? "100%" : "750px";
  const normalHeight = isMaximized ? "calc(100% - 35px)" : "75%";

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".titlebar-drag-handle"
      disabled={isMaximized}
      position={isMaximized ? { x: 0, y: 0 } : position}
      onStop={handleDrag}
      bounds="parent"
    >
      <div
        ref={nodeRef}
        onMouseDown={() => {
          store.dispatch(setFocusedTab({ id: props.id }));
        }}
        style={{
          top: isMaximized ? "0px" : "calc(50% - 37.5% - 17.5px)",
          left: isMaximized ? "0px" : "calc(50% - 375px)",
          position: "absolute",
          display: props.prompt ? promptDisplay : normalDisplay,
          flexDirection: "column",
          width: props.prompt ? promptWidth : normalWidth,
          height: props.prompt ? promptHeight : normalHeight,
          zIndex: props.zIndex,
        }}
        className={styles.window}
      >
        {/* BARRA DEL TITOLO TRASCINABILE */}
        <div
          className={
            currTabID === props.id
              ? `${styles.titlebar} titlebar-drag-handle`
              : `${styles.titlebar_unfocused} titlebar-drag-handle`
          }
          style={{ cursor: isMaximized ? "default" : "move" }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              pointerEvents: "none",
            }}
          >
            {!props.prompt && props.icon && (
              <Image
                width={20}
                height={20}
                alt="icon"
                src={props.icon.src}
                className={styles.icon}
              />
            )}
            <div className={styles.title}>{props.title}</div>
          </div>

          <div
            className={styles.titlecontrols}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {!props.prompt && (
              <div
                onClick={handleMinimize}
                style={{
                  filter: currTabID === props.id ? "" : unfocusedAdjustment,
                }}
                className={styles.minimise}
              />
            )}
            {!props.prompt && (
              <div
                onClick={handleMaximize}
                style={{
                  filter: currTabID === props.id ? "" : unfocusedAdjustment,
                }}
                className={isMaximized ? styles.resize : styles.maximise}
              />
            )}
            <div
              onClick={handleClose}
              style={{
                filter: currTabID === props.id ? "" : unfocusedAdjustment,
              }}
              className={styles.close}
            />
          </div>
        </div>

        {/* CORPO DELLA FINESTRA */}
        <div
          className={
            currTabID === props.id
              ? styles.windowborder
              : styles.windowborder_unfocused
          }
        >
          <div className={styles.windowsbody}>
            {!props.prompt && props.programType !== App.EDUCATION && (
              <WinToolBar
                title={props.title}
                icon={props.icon}
                programType={props.programType}
                id={props.id}
              />
            )}
            {props.children}
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default WinForm;
