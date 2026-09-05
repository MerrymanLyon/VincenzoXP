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
        {/* Menu Bar */}
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

        {/* Standard Toolbar */}
        <div className={styles.toolbarRow}>
          <div className={styles.handleGrip} />
          <button className={styles.iconBtn} title="New Blank Document">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 2H10L13 5V14H3V2Z" fill="#FFF" stroke="#444" />
              <path d="M10 2V5H13" fill="#DDD" stroke="#444" />
            </svg>
          </button>
          <button className={styles.iconBtn} title="Open">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M2 5H6L8 7H14V13H2V5Z" fill="#E6A100" stroke="#8C6200" />
            </svg>
          </button>
          <button className={styles.iconBtn} title="Save">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="12" height="12" fill="#2B579A" rx="1" />
              <rect x="4" y="2" width="8" height="5" fill="#FFF" />
              <rect x="5" y="9" width="6" height="5" fill="#FFF" />
            </svg>
          </button>
          <button className={styles.iconBtn} title="Print">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <rect x="4" y="2" width="8" height="4" fill="#DDD" stroke="#666" />
              <rect x="2" y="6" width="12" height="6" fill="#888" rx="1" />
              <rect x="4" y="9" width="8" height="5" fill="#FFF" stroke="#666" />
            </svg>
          </button>

          <div className={styles.separator} />

          {/* Style, Font, Size Dropdowns */}
          <select className={styles.selectBox} style={{ width: "95px" }} defaultValue="Normal">
            <option>Normal</option>
            <option>Heading 1</option>
            <option>Heading 2</option>
          </select>
          <select className={styles.selectBox} style={{ width: "130px" }} defaultValue="Times New Roman">
            <option>Times New Roman</option>
            <option>Arial</option>
            <option>Courier New</option>
            <option>Tahoma</option>
          </select>
          <select className={styles.selectBox} style={{ width: "48px" }} defaultValue="12">
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>14</option>
            <option>16</option>
          </select>

          <div className={styles.separator} />

          {/* Formatting Buttons: Bold, Italic, Underline */}
          <button className={styles.iconBtn} title="Bold">
            <span style={{ fontFamily: "Times New Roman", fontWeight: "bold", fontSize: "13px" }}>B</span>
          </button>
          <button className={styles.iconBtn} title="Italic">
            <span style={{ fontFamily: "Times New Roman", fontStyle: "italic", fontWeight: "bold", fontSize: "13px" }}>I</span>
          </button>
          <button className={styles.iconBtn} title="Underline">
            <span style={{ fontFamily: "Times New Roman", textDecoration: "underline", fontWeight: "bold", fontSize: "13px" }}>U</span>
          </button>

          <div className={styles.separator} />

          {/* Alignment */}
          <button className={styles.iconBtn} title="Align Left">
            <svg width="12" height="12" viewBox="0 0 12 12">
              <rect x="1" y="2" width="10" height="1.5" fill="#333" />
              <rect x="1" y="5" width="6" height="1.5" fill="#333" />
              <rect x="1" y="8" width="8" height="1.5" fill="#333" />
            </svg>
          </button>
          <button className={styles.iconBtn} title="Center">
            <svg width="12" height="12" viewBox="0 0 12 12">
              <rect x="1" y="2" width="10" height="1.5" fill="#333" />
              <rect x="3" y="5" width="6" height="1.5" fill="#333" />
              <rect x="2" y="8" width="8" height="1.5" fill="#333" />
            </svg>
          </button>
          <button className={styles.iconBtn} title="Align Right">
            <svg width="12" height="12" viewBox="0 0 12 12">
              <rect x="1" y="2" width="10" height="1.5" fill="#333" />
              <rect x="5" y="5" width="6" height="1.5" fill="#333" />
              <rect x="3" y="8" width="8" height="1.5" fill="#333" />
            </svg>
          </button>
        </div>
      </div>

      {/* Righello graduato */}
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
