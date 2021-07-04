import React from "react";
import { Link } from "react-router-dom";

const MetricsPage = () => {
  return (
    <div>
      <h1>Metrics Page</h1>
      <Link to="/:googleId">Go To User Page</Link>
    </div>
  );
};

export default MetricsPage;
