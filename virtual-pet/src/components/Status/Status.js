import React from "react";
import "./Status.css";

const StatusBar = ({ label, value, max }) => {
  return (
    <div className="status">
      <div className="status__label">{label}</div>
      <div className="status__container">
        <div
          className="status__value"
          style={{ width: `${(value / max) * 100}%` }}
        ></div>
      </div>
      <div className="status__value-text">{value}/{max}</div>
    </div>
  );
};

export default StatusBar;
