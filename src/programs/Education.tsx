import React from "react";
import styles from "../styles/Education.module.css";

interface Props {
  id?: string | number;
}

const Education = ({ id }: Props) => {
  return (
    <div className={styles.container}>
      {/* Header Office XP */}
      <div className={styles.officeHeader}>
        {/* Toolbar 1: Menu Bar */}
        <div className={styles.menuBar}>
          <span className={styles.menuItem}>
            <u>F</u>ile
          </span>
          <span className={styles.menuItem}>
            <u>E</u>dit
          </span>
          <span className={styles.menuItem}>
            <u>V</u>iew
          </span>
          <span className={styles.menuItem}>
            <u>I</u>nsert
          </span>
          <span className={styles.menuItem}>
            F<u>o</u>rmat
          </span>
          <span className={styles.menuItem}>
            <u>T</u>ools
          </span>
          <span className={styles.menuItem}>
            T<u>a</u>ble
          </span>
          <span className={styles.menuItem}>
            <u>W</u>indow
          </span>
          <span className={styles.menuItem}>
            <u>H</u>elp
          </span>
        </div>

        {/* Toolbar 2: Icone + Formattazione */}
        <div className={styles.combinedToolbar}>
          <div className={styles.toolSection}>
            <div className={styles.handleGrip} />
            <div className={styles.toolBtn} title="New">
              <img src="/New.jpeg" alt="New" className={styles.iconImg} />
            </div>
            <div className={styles.toolBtn} title="Open">
              <img src="/Open.jpeg" alt="Open" className={styles.iconImg} />
            </div>
            <div className={styles.toolBtn} title="Save">
              <img src="/Save.jpeg" alt="Save" className={styles.iconImg} />
            </div>

            <div className={styles.separator} />

            <div className={styles.toolBtn} title="Mail">
              <img src="/Mail.jpeg" alt="Mail" className={styles.iconImg} />
            </div>
            <div className={styles.toolBtn} title="Print">
              <img src="/Print.jpeg" alt="Print" className={styles.iconImg} />
            </div>
            <div className={styles.toolBtn} title="Grammar">
              <img src="/Gram.jpeg" alt="Grammar" className={styles.iconImg} />
            </div>

            <div className={styles.separator} />

            <div className={styles.toolBtn} title="Cut">
              <img src="/Cut.jpeg" alt="Cut" className={styles.iconImg} />
            </div>
            <div className={styles.toolBtn} title="Copy">
              <img src="/Copy.jpeg" alt="Copy" className={styles.iconImg} />
            </div>
            <div className={styles.toolBtn} title="Paste">
              <img src="/Paste.jpeg" alt="Paste" className={styles.iconImg} />
            </div>

            <div className={styles.separator} />

            <div className={styles.toolBtn} title="Undo">
              <img src="/Undo.jpeg" alt="Undo" className={styles.iconImg} />
            </div>
            <div className={styles.toolBtn} title="Redo">
              <img src="/Redo.jpeg" alt="Redo" className={styles.iconImg} />
            </div>
            <div className={styles.toolBtn} title="Search">
              <img src="/Search.jpeg" alt="Search" className={styles.iconImg} />
            </div>
          </div>

          <div className={styles.separatorSection} />

          <div className={styles.toolSection}>
            <div className={styles.handleGrip} />
            <select className={styles.selectBox} style={{ width: "80px" }} defaultValue="Normal">
              <option>Normal</option>
            </select>
            <select className={styles.selectBox} style={{ width: "115px" }} defaultValue="Times New Roman">
              <option>Times New Roman</option>
            </select>
            <select className={styles.selectBox} style={{ width: "42px" }} defaultValue="12">
              <option>12</option>
            </select>

            <div className={styles.separator} />

            <div className={styles.toolBtnText} style={{ fontWeight: "bold" }}>B</div>
            <div className={styles.toolBtnText} style={{ fontStyle: "italic" }}>I</div>
            <div className={styles.toolBtnText} style={{ textDecoration: "underline" }}>U</div>

            <div className={styles.separator} />

            <div className={styles.toolBtnText}>≡</div>
            <div className={styles.toolBtnText}>≣</div>
            <div className={styles.toolBtnText}>≡</div>
          </div>
        </div>
      </div>

      {/* Righello Orizzontale superiore */}
      <div className={styles.rulerContainer}>
        <div className={styles.rulerCorner} />
        <div className={styles.rulerHorizontal}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
        </div>
      </div>

      {/* Contenitore Lavoro principale */}
      <div className={styles.workspace}>
        {/* Righello Verticale sul bordo sinistro della finestra */}
        <div className={styles.rulerVertical}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
        </div>

        {/* Area del Documento centrata */}
        <div className={styles.documentArea}>
          <div className={styles.page}>
            <h1 className={styles.docTitle}>
              ACADEMIC BACKGROUND & CERTIFICATIONS
            </h1>

            <div className={styles.sectionTitle}>EDUCATION</div>

            <div className={styles.eduItem}>
              <div className={styles.degreeHeader}>
                <span>Master in Storytelling e Scrittura Creativa</span>
                <span>2016 - 2017</span>
              </div>
              <div className={styles.institution}>
                <a
                  href="https://www.iulm.it/en/iulm/ateneo/iulm-communication-school"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.wordHyperlink}
                >
                  Scuola di Comunicazione IULM
                </a>
                , Milano
              </div>
              <div className={styles.details}>
                Advanced training in narrative structures, brand storytelling & transmedia content architecture.
              </div>
            </div>

            <div className={styles.eduItem}>
              <div className={styles.degreeHeader}>
                <span>Laurea in Comunicazione, Media e Pubblicità</span>
                <span>2013 - 2016</span>
              </div>
              <div className={styles.institution}>
                <a
                  href="https://www.iulm.it/en/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.wordHyperlink}
                >
                  IULM University
                </a>
                , Milano
              </div>
              <div className={styles.details}>
                Core studies in mass media dynamics, advertising strategy, consumer behavior & marketing.
              </div>
            </div>

            <div className={styles.sectionTitle}>TECHNICAL SKILLS & TOOLKIT</div>

            <div className={styles.eduItem}>
              <div className={styles.degreeHeader}>
                <span>Technical Stack & Marketing Ecosystem</span>
                <span>Core Stack</span>
              </div>
              <div className={styles.institution}>
                Software, CRM/CMS Platforms & Web Technologies
              </div>
              <div className={styles.details}>
                CRM (HubSpot, Salesforce, Magnews), Analytics & Ads (Meta, Hootsuite, NJA), Web & GenAI (CMS, HTML/CSS, MailChimp).
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
