import React from "react";
import styles from "../styles/Education.module.css";

interface Props {
  id?: string | number;
}

const Education = ({ id }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.officeHeader}>
        <div className={styles.menuBar}>
          <span className={styles.menuItem}>File</span>
          <span className={styles.menuItem}>Edit</span>
          <span className={styles.menuItem}>View</span>
          <span className={styles.menuItem}>Insert</span>
          <span className={styles.menuItem}>Format</span>
          <span className={styles.menuItem}>Tools</span>
          <span className={styles.menuItem}>Table</span>
          <span className={styles.menuItem}>Window</span>
          <span className={styles.menuItem}>Help</span>
        </div>

        <div className={styles.toolbarRow}>
          <div className={styles.handleGrip} />
          
          <select className={styles.selectBox} style={{ width: "80px" }} defaultValue="Normal">
            <option>Normal</option>
          </select>
          <select className={styles.selectBox} style={{ width: "120px" }} defaultValue="Times New Roman">
            <option>Times New Roman</option>
          </select>
          <select className={styles.selectBox} style={{ width: "45px" }} defaultValue="12">
            <option>12</option>
          </select>

          <div className={styles.separator} />

          <div className={styles.toolBtnStatic}>B</div>
          <div className={styles.toolBtnStatic} style={{ fontStyle: "italic" }}>I</div>
          <div className={styles.toolBtnStatic} style={{ textDecoration: "underline" }}>U</div>

          <div className={styles.separator} />

          <div className={styles.toolBtnStatic}>≡</div>
          <div className={styles.toolBtnStatic}>≣</div>
          <div className={styles.toolBtnStatic}>≡</div>
        </div>
      </div>

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
