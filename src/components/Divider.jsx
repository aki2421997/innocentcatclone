import React from "react";

const Divider = () => {
  return (
    <div>
      <div style={{ height: 7, width: 7, backgroundColor: "white" }}></div>
      <div
        style={{ height: 1, width: 80, backgroundColor: "white", marginTop: 3 }}
      ></div>
      <div style={{ height: 7, width: 7, backgroundColor: "white" }}></div>
      <div
        style={{
          height: 7,
          width: 7,
          backgroundColor: "black",
          border: "2.5px solid white",
          boxSizing: "border-box",
          marginLeft: 20,
        }}
      ></div>
    </div>
  );
};

export default Divider;
