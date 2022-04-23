import React, { createContext, useEffect, useState } from "react";

export const reportsContext = createContext();

const ReportsContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [gateways, setGateways] = useState([]);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch(`http://178.63.13.157:8090/mock-api/api/projects`)
      .then((res) => res.json())
      .then((result) => setProjects(result.data))
      .catch((err) => {
        console.log(err);
      });

    fetch(`http://178.63.13.157:8090/mock-api/api/gateways`)
      .then((res) => res.json())
      .then((result) => setGateways(result.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <reportsContext.Provider
      value={{ projects, gateways, reports, setReports }}
    >
      {children}
    </reportsContext.Provider>
  );
};

export default ReportsContextProvider;
