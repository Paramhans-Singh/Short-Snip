import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";
import loading from "../assets/loading.png";
import "../styles/hero.css";
import { Link } from "react-router-dom";

function Hero() {
  const [isLoading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);

  return (
    <div className="container">
      <Form
        setLoading={setLoading}
        setErrMsg={setErrMsg}
        setFetchedData={setFetchedData}
      />

      {isLoading && <img className="spinner" src={loading} alt="Loading..." />}

      {errMsg && <p className="err">{errMsg}</p>}

      {!isLoading && !errMsg && fetchedData && (
        <Table full={fetchedData.full} short={fetchedData.short} />
      )}

      <button className="button">
        <Link to="/dashboard">Go to Dashboard</Link>
      </button>
    </div>
  );
}

export default Hero;
