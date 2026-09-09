import styles from "./Outlook.module.css";
import mailto from "../../assets/toolbar/mailto.png";
import send from "../../assets/toolbar/sendmail.png";
import Image from "next/image";
import cut from "../../assets/toolbar/cut.png";
import copy from "../../assets/toolbar/copy.png";
import paste from "../../assets/toolbar/paste.png";
import undo from "../../assets/toolbar/undo.png";
import check from "../../assets/toolbar/check.png";
import spelling from "../../assets/toolbar/spelling.png";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { AppDirectory } from "@/appData";
import { addTab } from "@/redux/tabSlice";
import store from "@/redux/store";
import { useSelector } from "react-redux";
import { RootState } from "@/types";

const Outlook = () => {
  const currTabID = useSelector((state: RootState) => state.tab.id);
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async () => {
    if (!from || !subject || !message || isSending) {
      return;
    }

    setIsSending(true);

    const payload = {
  service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  public_key: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  template_params: {
    from_email: from,
    subject: subject,
    message: message,
  },
};


    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const newTab = {
          ...AppDirectory.get(7),
          id: uuidv4(),
          zIndex: currTabID,
          title: "Outlook - Message Sent!",
          message: "Your message has been sent! I will get back to you soon!",
        };
        store.dispatch(addTab(newTab));

        setFrom("");
        setSubject("");
        setMessage("");
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      const errorTab = {
        ...AppDirectory.get(5),
        id: uuidv4(),
        zIndex: currTabID,
        title: "Error - Email Failed",
        message: "Failed to send email. Please try again later.",
      };
      store.dispatch(addTab(errorTab));
    } finally {
      setIsSending(false);
    }
  };

  const isFormValid =
    from.trim() !== "" &&
    subject.trim() !== "" &&
    message.trim() !== "" &&
    !isSending;

  return (
    <div className={styles.main}>
      <div className={styles.icons_toolbar}>
        <div 
          className={isFormValid ? styles.icon : styles.icon_disabled}
          onClick={isFormValid ? sendEmail : undefined}
          style={{ cursor: isFormValid ? "pointer" : "default" }}
        >
          <Image
            style={
              isFormValid
                ? { margin: "0 4px" }
                : { margin: "0 4px", filter: "grayscale(100%) brightness(0.9)" }
            }
            alt="send"
            width={40}
            height={30}
            src={send.src}
          />
          <p>Send</p>
        </div>
        <div className={styles.vertical_line} />
        <div className={styles.icon}>
          <Image
            style={{ margin: "0 10px" }}
            alt="cut"
            width={25}
            height={30}
            src={cut.src}
          />
          <p>Cut</p>
        </div>
        <div className={styles.icon}>
          <Image
            style={{ margin: "0 10px" }}
            alt="copy"
            width={28}
            height={30}
            src={copy.src}
          />
          <p>Copy</p>
        </div>
        <div className={styles.icon}>
          <Image
            style={{ margin: "0 10px" }}
            alt="paste"
            width={28}
            height={30}
            src={paste.src}
          />
          <p>Paste</p>
        </div>
        <div className={styles.icon}>
          <Image
            style={{ margin: "0 10px" }}
            alt="undo"
            width={28}
            height={30}
            src={undo.src}
          />
          <p>Undo</p>
        </div>
        <div className={styles.vertical_line} />
        <div className={styles.icon}>
          <Image
            style={{ margin: "0 10px" }}
            alt="check"
            width={32}
            height={30}
            src={check.src}
          />
          <p>Check</p>
        </div>
        <div className={styles.icon}>
          <Image
            style={{ margin: "0 10px" }}
            alt="spelling"
            width={32}
            height={30}
            src={spelling.src}
          />
          <p>Spelling</p>
        </div>
      </div>
      <div>
        <div className={styles.mailing}>
          <div className={styles.mailing_text}>
            <div className={styles.field_text}>
              <Image
                style={{ margin: "0 4px" }}
                alt="arrow_down"
                width={20}
                height={20}
                src={mailto.src}
              />
              <p>To:</p>
            </div>
            <div className={styles.field_text}>
              <Image
                style={{ margin: "0 4px" }}
                alt="arrow_down"
                width={20}
                height={20}
                src={mailto.src}
              />
              <p>From:</p>
            </div>
            <div className={styles.field_text}>
              <p>Subject:</p>
            </div>
          </div>
          <div className={styles.mailing_fields}>
            <input
              className={styles.textfield}
              style={{ cursor: "default" }}
              disabled
              id="text21"
              type="text"
              value="Vincenzo (vincenzo.reina@outlook.it)"
            />
            <input
              className={styles.textfield}
              placeholder="Enter your email address"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              type="email"
            />
            <input
              className={styles.textfield}
              placeholder="What is this message/email regarding?"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              type="text"
            />
          </div>
        </div>
      </div>
      <div className={styles.richfield}>
        <textarea
          draggable={false}
          className={styles.richtextbox}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="text24"
          placeholder="Type your message here... (Share with me something interesting or feedback)"
        />
      </div>
    </div>
  );
};

export default Outlook;
