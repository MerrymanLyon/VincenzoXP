import React from "react";
import styles from "../styles/Education.module.css";

interface Props {
  id?: string | number;
}

const Education = ({ id }: Props) => {
  return (
    <div className={styles.container}>
      {/* Word / Office XP Toolbar */}
      <div className={styles.toolbar}>
        <div className={styles.toolGroup}>
          <select className={styles.selectBox} defaultValue="Times New Roman">
            <option>Times New Roman</option>
            <option>Arial</option>
            <option>Courier New</option>
          </select>
          <select className={styles.selectBox} defaultValue="12">
            <option>10</option>
            <option>12</option>
            <option>14</option>
            <option>18</option>
          </select>
        </div>
        <div className={styles.toolGroup}>
          <button style={{ fontWeight: "bold" }}>B</button>
          <button style={{ fontStyle: "italic" }}>I</button>
          <button style={{ textDecoration: "underline" }}>U</button>
        </div>
      </div>

      {/* Document Area */}
      <div className={styles.documentArea}>
        <div className={styles.page}>
          <h1 className={styles.docTitle}>Academic Background & Certifications</h1>

          <div className={styles.sectionTitle}>Education</div>

          <div className={styles.eduItem}>
            <div className={styles.degreeHeader}>
              <span>Master's Degree / Specialization</span>
              <span>Year - Year</span>
            </div>
            <div className={styles.institution}>University / Academic Institution</div>
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

          <div className={styles.sectionTitle}>Certifications & Academies</div>

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
