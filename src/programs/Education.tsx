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
        {/* Toolbar 1: Menu Bar con prima lettera sottolineata */}
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

        {/* Toolbar 2: Icone affiancate alla formattazione */}
        <div className={styles.combinedToolbar}>
          {/* Sezione Icone */}
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

          {/* Sezione Formattazione */}
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

      {/* Righello Word XP */}
      <div className={styles.rulerContainer}>
        <div className={styles.ruler}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
        </div>
      </div>

      {/* Area Documento */}
      <div className={styles.documentArea}>
        <div className={styles.page}>
          <h1 className={styles.docTitle}>
            ACADEMIC BACKGROUND & CERTIFICATIONS
          </h1>

          <div className={styles.sectionTitle}>EDUCATION</div>

          <div className={styles.eduItem}>
            <div className={styles.degreeHeader}>
              <span>Master's Degree / Specialization</span>
              <span>Year - Year</span>
            </div>
            <div className={styles.institution}>
              University / Academic Institution
            </div>
            <div className={styles.details}>
              Focus on Brand Strategy, Marketing Narrative & Communication Architecture.
            </div>
          </div>

          <div className={styles.eduItem}>
            <div className={styles.degreeHeader}>
              <span>Bachelor's Degree</span>
              <span>Year - Year</span>
            </div>
            <div className={styles.institution}>University Name</div>
            <div className={styles.details}>
              Core studies in Communication Sciences, Media & Cultural Analysis.
            </div>
          </div>

          <div className={styles.sectionTitle}>CERTIFICATIONS & ACADEMIES</div>

          <div className={styles.eduItem}>
            <div className={styles.degreeHeader}>
              <span>Deeptech & Marketing Strategy Certification</span>
              <span>2024 - 2025</span>
            </div>
            <div className={styles.institution}>Specialized Academy</div>
            <div className={styles.details}>
              Hands-on training in AI tools, Go-To-Market frameworks and tech stack positioning.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
