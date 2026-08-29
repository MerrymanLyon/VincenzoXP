import WelcomeIcon from "components/WelcomeIcon/WelcomeIcon";
import styles from "./Welcome.module.css";
import linkedin from "../../assets/linkedin.png";
import outlook from "../../assets/outlook_large.png";
import gallery from "../../assets/folder_image.png";
import pdf from "../../assets/pdf.png";
import cmd from "../../assets/cmd.png";
import users from "../../assets/users.png";
import butterfly from "../../assets/butterfly.png";
import { AppDirectory } from "@/appData";
import store from "@/redux/store";
import { addTab, setBackBtn } from "@/redux/tabSlice";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { RootState } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import userprofile from "../../assets/IMG_0520.jpeg";
import userprofile2 from "../../assets/IMG_0520.jpeg";
import ebc1 from "../../assets/IMG_0520.jpeg";
import ebc2 from "../../assets/IMG_0520.jpeg";


const INTRO = `Hi, I'm Vincenzo Reina, a Senior Brand & GTM Strategist. I specialize in building high-impact Go-To-Market strategies for Deeptech startups. I translate complex B2B deeptech products into high-impact market narratives without the corporate fluff.`;

const WHYSITE = `The main reason I chose an interactive OS interface over a standard corporate portfolio is to bridge the gap between underground hacker culture and high-level enterprise positioning. It perfectly aligns with my dev-centric approach to marketing.`;

const INTERESTS = `Beyond strategy, I am a multi-instrumentalist. I picked up the guitar at eight and subsequently learned to play the drums, piano, and clarinet entirely by ear. I am also deeply passionate about cinema—specifically Italian neorealism—and I frequently paint scenes I capture through my camera lens.`;

const INTERESTS2 = `I thrive on diverse cultural exploration. My initiatives range from shooting a photo reportage in Tibet in 2025 to organizing cultural events in my hometown, Mazara del Vallo, and performing in various musical projects. This relentless curiosity to explore new horizons defines my mindset: a creative, lateral-thinking approach that consistently proves effective in overcoming complex personal and professional challenges.`;

const INTERESTS3 = `My learning process is continuous. I read extensively across American and European fiction. On the technical front, I absorb new tech daily through specialized academies, podcasts, and continuous, hands-on experimentation with AI tools to keep my stack and strategies razor-sharp.`;


interface props {
  id: number;
}

const Welcome = ({ id }: props) => {
  const currTabID = useSelector((state: RootState) => state.tab.id);
  const backBtnActive = useSelector(
    (state: RootState) =>
      state.tab.tray[state.tab.tray.findIndex((tab) => tab.id === id)]
        .backBtnActive
  );

  const [aboutmeView, setAboutmeView] = useState(false);

  const handleRunApp = (e: number) => {
    const newTab = { ...AppDirectory.get(e), id: uuidv4(), zIndex: currTabID };
    store.dispatch(addTab(newTab));
  };
  const handleSwitchView = () => {
    setAboutmeView(true);
    store.dispatch(setBackBtn({ id: id, backBtnActive: true }));
  };
  useEffect(() => {
    setAboutmeView(backBtnActive);
  }, [backBtnActive]);
  return (
    <div className={styles.main}>
      {!aboutmeView ? (
        <div>
          <h3 className={styles.welcome_text}>
            Welcome To Vincenzo Reina's GTM Hub
          </h3>
          <p className={styles.subtitle}>
            Access my logs and case studies by clicking any of the icons below.
          </p>
          <div className={styles.content}>
            <div className={styles.leftpanel}>
              <WelcomeIcon
                img={butterfly}
                text={"About Me"}
                tooltip="Who am I?"
                onClick={handleSwitchView}
              />
              <WelcomeIcon
                img={linkedin}
                text={"My Linkedin"}
                tooltip="Connect with me!"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/vincenzoreina/",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
              <WelcomeIcon
                img={pdf}
                text={"My Resume"}
                tooltip="My Curriculum Vitae"
                onClick={() => {
                  window.open("./Resume.pdf");
                }}
              />
            </div>
            <div className={styles.rightpanel}>
              <WelcomeIcon
                img={cmd}
                text={"My Work"}
                tooltip="GTM Case Studies & Projects"
                onClick={() => handleRunApp(2)}
              />
              <WelcomeIcon
                img={outlook}
                text={"Send Me An Email"}
                tooltip="Reach out to me!"
                onClick={() => handleRunApp(1)}
              />
              <WelcomeIcon
                img={gallery}
                text={"My Photography Collection"}
                tooltip="Click to view!"
                onClick={() => handleRunApp(4)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className={styles.welcome_text}>About Me</h3>
          <p className={styles.subtitle}></p>
          <div className={styles.content}>
            <div className={styles.pic_col}>
              <Image
                alt="profile_pic"
                src={userprofile.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={userprofile2.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={ebc1.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={ebc2.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
            </div>
            <div className={styles.text_col}>
              <p className={styles.subtitle}>{INTRO}</p>
              <h3 className={styles.subtitle_header}>
                Why an OS interface?
              </h3>
              <p className={styles.subtitle}>{WHYSITE}</p>
              <h3 className={styles.subtitle_header}>
                Beyond Marketing
              </h3>
              <p className={styles.subtitle}>{INTERESTS}</p>
              <br></br>
              <p className={styles.subtitle}>{INTERESTS2}</p>
              <br></br>
              <p className={styles.subtitle}>{INTERESTS3}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
