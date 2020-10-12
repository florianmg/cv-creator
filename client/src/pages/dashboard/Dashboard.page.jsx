import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";

import AuthContext from "../../context/AuthContext";

const Dashboard = () => {
  const { resumeInfos } = useContext(AuthContext);
  return (
    <div className="page dashboard-page">
      <h1>This is the dashboard page</h1>
      <p>I hope that you are logged</p>
      <Link to={ROUTES.EDITOR}>Créer mon CV</Link>
    </div>
  );
};

export default Dashboard;
