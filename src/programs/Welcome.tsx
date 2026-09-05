import WelcomeIcon from "components/WelcomeIcon/WelcomeIcon";
import styles from "./Welcome.module.css";
import linkedin from "../../assets/linkedin.png";
import outlook from "../../assets/outlook_large.png";
import gallery from "../../assets/folder_image.png";
import pdf from "../../assets/pdf.png";
import cmd from "../../assets/cmd.png";
import butterfly from "../../assets/butterfly.png";
import mycomputer from "../../assets/mycomputer.png";
import outlookIcon from "../../assets/outlook.png";
import { AppDirectory } from "@/appData";
import store from "@/redux/store";
import { addTab, setBackBtn } from "@/redux/tabSlice";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { RootState } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";

const INTRO = `Hi, I'm Vincenzo Reina, a Senior Brand & GTM Strategist. I specialize in building high-impact Go-To-Market strategies for Deeptech startups. I translate complex B2B deeptech products into high-impact market narratives without the corporate fluff.`;

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
    <div className={styles.container}>
      {/* Sidebar XP Task Pane - Contact Details */}
      <div className={styles.sidebar}>
        <div className={styles.taskBox}>
          <div className={styles.taskHeader}>
            <span>Contact Information</span>
          </div>
          <div className={styles.taskContent}>
            <div className={styles.contactItem}>
              <Image src={mycomputer} alt="Location" width={18} height={18} />
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Location</span>
                <span className={styles.contactValue}>Rome, Italy</span>
              </div>
            </div>

            <a
              href="mailto:Vincenzo.reina@outlook.it"
              className={styles.contactItem}
            >
              <Image src={outlookIcon} alt="Email" width={18} height={18} />
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Email</span>
                <span className={styles.contactValue}>
                  Vincenzo.reina@outlook.it
                </span>
              </div>
            </a>

            <a href="tel:+39339192929162" className={styles.contactItem}>
              <Image src={cmd} alt="Phone" width={18} height={18} />
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Phone</span>
                <span className={styles.contactValue}>+39 339 192 929162</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/vincenzo-reina/"
              target="_blank"
              rel="noreferrer"
              className={styles.contactItem}
            >
              <Image src={linkedin} alt="LinkedIn" width={18} height={18} />
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>LinkedIn</span>
                <span className={styles.contactValue}>In/vincenzo-reina</span>
              </div>
            </a>
          </div>
        </div>

        <div className={styles.taskBox}>
          <div className={styles.taskHeader}>
            <span>Quick Actions</span>
          </div>
          <div className={styles.taskContent}>
            <a
              href="./Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className={styles.contactItem}
            >
              <Image src={pdf} alt="Resume" width={18} height={18} />
              <span className={styles.contactValue}>Download Resume (PDF)</span>
            </a>
            <div
              className={styles.contactItem}
              onClick={() => handleRunApp(1)}
              style={{ cursor: "pointer" }}
            >
              <Image src={outlookIcon} alt="Send Email" width={18} height={18} />
              <span className={styles.contactValue}>Open Mail Client</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Viewport Content */}
      <div className={styles.viewport}>
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
                      "https://www.linkedin.com/in/vincenzo-reina/",
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
            <div className={styles.content}>
              <div className={styles.pic_col}>
                <Image
                  alt="profile_pic"
                  src="/IMG_0530.jpeg"
                  width={180}
                  height={180}
                  className={styles.profile_pic}
                />
                <Image
                  alt="profile_pic"
                  src="/IMG_0532.jpeg"
                  width={180}
                  height={180}
                  className={styles.profile_pic}
                />
                <Image
                  alt="profile_pic"
                  src="/IMG_0533.jpeg"
                  width={180}
                  height={180}
                  className={styles.profile_pic}
                />
                <Image
                  alt="profile_pic"
                  src="/IMG_0536.jpeg"
                  width={180}
                  height={180}
                  className={styles.profile_pic}
                />
              </div>
              <div className={styles.text_col}>
                <p className={styles.subtitle}>{INTRO}</p>
                <h3 className={styles.subtitle_header}>
                  Why an OS interface?
                </h3>
                <p className={styles.subtitle}>
                  I’ve always approached personal branding through
                  unconventional, high-concept narratives—from designing my CV
                  as a{" "}
                  <a
                    href="https://www.linkedin.com/posts/vincenzo-reina_vincenzo-reina-copywriter-creativo-umano-activity-7196158740541149184-GrnC?utm_medium=ios_app&rcm=ACoAABzhqawBrPt_BX-BHZtYI5N331tMiXzOgtA&utm_source=social_share_send&utm_campaign=copy_link"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#ffffff", textDecoration: "underline" }}
                  >
                    Netflix-style streaming platform
                  </a>{" "}
                  to structuring it as a{" "}
                  <a
                    href="./terrazzino-menu.pdf"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#ffffff", textDecoration: "underline" }}
                  >
                    fine-dining restaurant menu
                  </a>
                  . Choosing an interactive Windows XP OS interface is a
                  deliberate extension of this philosophy: it bridges the gap
                  between underground hacker/dev culture and high-level
                  enterprise positioning, perfectly aligning with my dev-centric
                  approach to marketing.
                </p>
                <h3 className={styles.subtitle_header}>Beyond Marketing</h3>
                <p className={styles.subtitle}>
                  Beyond strategy, I am a multi-instrumentalist. I picked up the
                  guitar at eight and subsequently learned to play the drums,
                  piano, and clarinet entirely by ear. I am also deeply
                  passionate about cinema—specifically Italian neorealism—and I
                  frequently paint scenes I capture through my camera lens.
                </p>
                <br />
                <p className={styles.subtitle}>
                  I thrive on diverse cultural exploration. My initiatives
                  range from shooting a photo reportage in Tibet to organizing
                  cultural events in my hometown, Mazara del Vallo, and
                  performing in various musical projects. This relentless
                  curiosity to explore new horizons defines my mindset: a
                  creative, lateral-thinking approach that consistently proves
                  effective in overcoming complex personal and professional
                  challenges.
                </p>
                <br />
                <p className={styles.subtitle}>
                  My learning process is continuous. I read extensively across
                  American and European fiction. On the technical front, I absorb
                  new tech daily through specialized academies, podcasts, and
                  continuous, hands-on experimentation with AI tools to keep my
                  stack and strategies razor-sharp.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Welcome;
