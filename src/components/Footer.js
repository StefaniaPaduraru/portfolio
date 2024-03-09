import React from "react";

function Footer() {
  const country = "Romania";
  const continent = "EU";
  return (
    <>
      <p
        style={{
          textAlign: "center",
          backgroundColor: "#2F394D",
          color: "white",
          marginBottom: "0px",
          fontSize: "18px",
        }}
      >
        {" "}
        {country}, {continent} 🌍
      </p>
    </>
  );
}
export default Footer;
