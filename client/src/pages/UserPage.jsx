import React from "react";
import { Link } from "react-router-dom";

const UserPage = () => {
  return (
    <div>
      <h1>User Page</h1>
      <Link to="/:googleId/metrics">Go To Metrics Page</Link>
    </div>
  );
};

export default UserPage;
