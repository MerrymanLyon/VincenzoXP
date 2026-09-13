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
          /* Testo reso trasparente di base per Safari */
          color: transparent !important;
          -webkit-text-fill-color: transparent !important;
          margin: 0;
          font-size: 13px;
          line-height: 1.6;
          font-family: Tahoma, sans-serif;
          user-select: text !important;
          -webkit-user-select: text !important;
        }

        /* Quando viene evidenziato, forziamo il colore nero/blu per WebKit/Safari */
        .secretText::selection {
          background-color: #3390ff !important;
          color: #000000 !important;
          -webkit-text-fill-color: #000000 !important;
        }

        .secretText::-moz-selection {
          background-color: #3390ff !important;
          color: #000000 !important;
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
