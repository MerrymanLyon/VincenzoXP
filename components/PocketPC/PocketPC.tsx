      {/* MODAL 2: EDUCATION */}
      {activeModal === "education" && (
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <span className={styles.modalTitle}>Education & Academic Path</span>
            <button
              className={styles.closeBtn}
              onClick={() => setActiveModal(null)}
            >
              Close ✕
            </button>
          </div>

          <div className={styles.modalRow}>
            <div className={styles.cardTitle}>
              Master, Storytelling and Creative Writing
            </div>
            <div className={styles.cardSubtitle}>
              <a
                href="https://www.iulm.it/en/iulm/ateneo/iulm-communication-school"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#000080", textDecoration: "underline" }}
              >
                IULM Communication School
              </a>{" "}
              | Nov 2016 – Jun 2017
            </div>
            <div className={styles.cardDesc}>
              Advanced specialization in narrative structures, creative writing, and story design applied to corporate communications and modern media.
              <div className={styles.cardBullet}>
                Core Focus: Transmedia storytelling, content architecture, brand narrative development, and editorial strategy across digital platforms.
              </div>
              <div className={styles.cardBullet}>
                Professional Impact: Strategic foundation used to translate complex technical concepts (Deep Tech, Physical AI, B2B) into compelling brand narratives.
              </div>
            </div>
          </div>

          <div className={styles.modalRow}>
            <div className={styles.cardTitle}>
              1° ciclo - Laurea L, Communication and Media Studies
            </div>
            <div className={styles.cardSubtitle}>
              <a
                href="https://www.iulm.it/en/home"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#000080", textDecoration: "underline" }}
              >
                IULM University
              </a>{" "}
              | Sep 2013 – Nov 2016
            </div>
            <div className={styles.cardDesc}>
              Comprehensive degree covering mass media dynamics, consumer behavior, advertising strategy, and digital marketing.
              <div className={styles.cardBullet}>
                Key Areas: Market analysis, media planning, advertising campaign design, visual communication, and public relations.
              </div>
              <div className={styles.cardBullet}>
                Strategic Value: Fundamental groundwork in media management and brand communication strategies.
              </div>
            </div>
          </div>
        </div>
      )}
