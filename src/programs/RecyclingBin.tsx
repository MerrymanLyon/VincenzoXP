import React from "react";

interface RecyclingBinProps {
  id?: number;
}

const RecyclingBin: React.FC<RecyclingBinProps> = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "300px",
        backgroundColor: "#ffffff",
        padding: "20px",
        boxSizing: "border-box",
        overflowY: "auto",
        userSelect: "text",
        WebkitUserSelect: "text",
        cursor: "default",
      }}
    >
      <p
        style={{
          color: "#ffffff",
          backgroundColor: "#ffffff",
          margin: 0,
          fontSize: "13px",
          lineHeight: "1.6",
          fontFamily: "Tahoma, sans-serif",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis
        quam a ex sagittis pharetra. Etiam gravida blandit eros nec rhoncus.
        Maecenas aliquet bibendum ligula. Vivamus non massa enim. Maecenas
        bibendum quis sapien vitae blandit. Curabitur imperdiet fermentum purus
        sit amet mollis.
      </p>
    </div>
  );
};

export default RecyclingBin;
