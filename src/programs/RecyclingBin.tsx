import React from "react";

interface RecyclingBinProps {
  id?: number;
}

const RecyclingBin: React.FC<RecyclingBinProps> = () => {
  return (
    <>
      <style jsx global>{`
        .secretContainer {
          width: 100%;
          height: 100%;
          min-height: 300px;
          background-color: #ffffff !important;
          padding: 20px;
          box-sizing: border-box;
          overflow-y: auto;
          cursor: default;
        }

        .secretText {
          color: #ffffff !important;
          background-color: #ffffff !important;
          margin: 0;
          font-size: 13px;
          line-height: 1.6;
          font-family: Tahoma, sans-serif;
          user-select: text !important;
          -webkit-user-select: text !important;
        }

        /* FORZATURA EVIDENZIAZIONE: TESTO NERO SU SFONDO BLU XP */
        .secretText::selection {
          background-color: #0a246a !important; /* Blu XP */
          color: #ffffff !important;            /* Testo Bianco visibile */
          text-shadow: none !important;
        }

        .secretText::-moz-selection {
          background-color: #0a246a !important;
          color: #ffffff !important;
          text-shadow: none !important;
        }
      `}</style>

      <div className="secretContainer">
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
