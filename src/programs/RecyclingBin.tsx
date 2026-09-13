import React from "react";

interface RecyclingBinProps {
  id?: number;
}

const RecyclingBin: React.FC<RecyclingBinProps> = () => {
  return (
    <>
      <style jsx>{`
        .secretText {
          color: #ffffff;
          background-color: #ffffff;
          margin: 0;
          font-size: 13px;
          line-height: 1.6;
          font-family: Tahoma, sans-serif;
          user-select: text;
          -webkit-user-select: text;
        }

        /* DEFINIZIONE DEL COLORE TESTO QUANDO VIENE SELEZIONATO DAL MOUSE */
        .secretText::selection {
          background-color: #0a246a; /* Blu classico selezione Windows XP */
          color: #ffffff; /* Testo bianco ben visibile su fondo blu */
        }

        .secretText::-moz-selection {
          background-color: #0a246a;
          color: #ffffff;
        }
      `}</style>

      <div
        style={{
          width: "100%",
          height: "100%",
          minHeight: "300px",
          backgroundColor: "#ffffff",
          padding: "20px",
          boxSizing: "border-box",
          overflowY: "auto",
          cursor: "default",
        }}
      >
        <p className="secretText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis
          quam a ex sagittis pharetra. Etiam gravida blandit eros nec rhoncus.
          Maecenas aliquet bibendum ligula. Vivamus non massa enim. Maecenas
          bibendum quis sapien vitae blandit. Curabitur imperdiet fermentum purus
          sit amet mollis.
        </p>
      </div>
    </>
  );
};

export default RecyclingBin;
