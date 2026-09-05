import React from "react";
import styles from "../styles/Education.module.css";

interface Props {
  id?: string | number;
}

const Education = ({ id }: Props) => {
  return (
    <div className={styles.container}>
      {/* Menu Bar Word XP */}
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

      {/* Standard & Formatting Toolbar */}
      <div className={styles.toolbar}>
        <div className={styles.toolGroup}>
          <select className={styles.selectBoxStyle} defaultValue="Normal">
            <option>Normal</option>
            <option>Heading 1</option>
            <option>Heading 2</option>
            <option>Title</option>
          </select>
          <select className={styles.selectBoxFont} defaultValue="Times New Roman">
            <option>Times New Roman</option>
            <option>Arial</option>
            <option>Courier New</option>
            <option>Tahoma</option>
          </select>
          <select className={styles.selectBoxSize} defaultValue="12">
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>14</option>
            <option>16</option>
            <option>18</option>
          </select>
        </div>

        <div className={styles.separator} />

        <div className={styles.toolGroup}>
          <button className={styles.toolButton} style={{ fontWeight: "bold" }}>
            B
          </button>
          <button className={styles.toolButton} style={{ fontStyle: "italic" }}>
            I
          </button>
          <button
            className={styles.toolButton}
            style={{ textDecoration: "underline" }}
          >
            U
          </button>
        </div>

        <div className={styles.separator} />

        <div className={styles.toolGroup}>
          <button className={styles.toolButton}>≡</button>
          <button className={styles.toolButton}>≣</button>
          <button className={styles.toolButton}>≡</button>
        </div>
      </div>

      {/* Foglio A4 / Word Document Area */}
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
              Focus on Brand Strategy, Marketing Narrative & Communication
              Architecture.
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
              Hands-on training in AI tools, Go-To-Market frameworks and tech
              stack positioning.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
