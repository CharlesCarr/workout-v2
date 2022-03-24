import React from "react";
import ReactLoading from "react-loading";

const LoadingSpinner = ({ type }) => {
  return (
    <div className="loading-container">
      <ReactLoading className="loading" type="spin" />
    </div>
  );
};

export default LoadingSpinner;
