import { TechIcon, WorkAccordionContent, WorkAccordionTitles } from "@/appData";
import { RootState, WorkContent } from "@/types";
import WinAccordion from "components/WinAccordion/WinAccordion";
import { useEffect, useState } from "react";
import styles from "./MyWork.module.css";
import Image from "next/image";
import github from "../../assets/github.png";
import github_w from "../../assets/github_w.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "components/Carousel/Carousel";
import { useSelector } from "react-redux";
import { setBackBtn } from "@/redux/tabSlice";
import store from "@/redux/store";

const loaderProp = ({ src }: any) => {
  return src;
};

interface Props {
  id: number;
}

const brandLogos = [
  "/chicco.png",
  "/coconino.png",
  "/enel.png",
  "/enelg.png",
  "/fiocchi.png",
  "/free.png",
  "/mellin.png",
  "/IMG_0560.png",
  "/IMG_0558.png",
  "/IMG_0564.png",
  "/IMG_0563.png",
];

const MyWork = ({ id }: Props) => {
  const [currDisplay, setCurrDisplay] = useState<WorkContent>({
    id: 0,
    title: "",
    date: "",
    gitURL: "",
    gallery: [],
    techstack: [],
    overview: "",
  });
  const [gitIcon, setgitIcon] = useState(github_w);
  const backBtnActive = useSelector(
    (state: RootState) =>
      state.tab.tray[state.tab.tray.findIndex((tab) => tab.id === id)]
        .backBtnActive
  );

  useEffect(() => {
    if (currDisplay.title !== "" && !backBtnActive) {
      store.dispatch(setBackBtn({ id: id, backBtnActive: true }));
    }
  }, [currDisplay]);

  useEffect(() => {
    if (!backBtnActive) {
      setCurrDisplay({
        id: 0,
        title: "",
        date: "",
        gitURL: "",
        gallery: [],
        techstack: [],
        overview: "",
      });
    }
  }, [backBtnActive]);

  return (
    <div className={styles.main}>
      <div className={styles.leftpanel}>
        <div>
          <div className={styles.accordion}>
            {WorkAccordionTitles.map((title, index) => (
              <WinAccordion key={index} title={title}>
                {WorkAccordionContent.filter((f) => f.type === title).map(
                  ({ title, icon, content }, index) => {
                    return (
                      <div
                        key={index}
                        className={styles.accordion_content_item}
                        onClick={() => setCurrDisplay(content)}
                      >
                        <div className={styles.accordion_content_text}>
                          <Image
                            alt="accordionbtn"
                            src={icon.src}
                            height={15}
                            width={15}
                          />
                          <p>{title}</p>
                        </div>
                      </div>
                    );
                  }
                )}
              </WinAccordion>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.rightpanel}>
        {currDisplay.title === "" ? (
          <div className={styles.body}>
            <h4>Welcome To My Portfolio Section</h4>
            <h5>
              Begin Navigation by clicking on one of my projects on the left
              panel
            </h5>
            <h5>
              These are some of the brands and clients I have collaborated with!
            </h5>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "15px",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
                padding: "10px",
              }}
            >
              {brandLogos.map((logo, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={logo}
                    alt="brand logo"
                    width={100}
                    height={45}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.header}>
              <h4>{currDisplay.title}</h4>
            </div>
            {currDisplay.gallery.length === 0 ? (
              <></>
            ) : (
              <div className={styles.body}>
                <h4>Project Gallery</h4>
                <Carousel images={currDisplay.gallery} />
              </div>
            )}
            <div className={styles.body}>
              <h4>Overview:</h4>
              {currDisplay.overview}
              {currDisplay.gitURL !== "" && (
                <div
                  onMouseEnter={() => setgitIcon(github)}
                  onMouseLeave={() => setgitIcon(github_w)}
                  onClick={() =>
                    window.open(currDisplay.gitURL, "_blank", "noreferrer")
                  }
                  className={styles.github_button}
                >
                  View On GitHub
                  <Image
                    className={styles.github_icon}
                    alt="git"
                    src={gitIcon.src}
                    height={50}
                    width={50}
                  />
                </div>
              )}
            </div>
            <div className={styles.body}>
              <h4>Tool Used</h4>
              <div className={styles.content_tech}>
                {currDisplay.techstack.map((tech) => (
                  <div key={tech} className={styles.tech_badge}>
                    <Image
                      style={{ width: "100%", borderRadius: "20px" }}
                      alt="tech"
                      src={tech}
                      width={50}
                      height={40}
                      loader={loaderProp}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWork;
