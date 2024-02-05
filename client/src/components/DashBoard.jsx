import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [shortenedUrls, setShortenedUrls] = useState([]);

  useEffect(() => {
    fetch("API_ENDPOINT")
      .then((response) => response.json())
      .then((data) => setShortenedUrls(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDelete = (id) => {
    console.log(`Delete URL with ID ${id}`);
  };

  return (
    <div>
      <h1>Short Snip Dashboard</h1>

      <div>
        {shortenedUrls.map((url) => (
          <div key={url.id}>
            <p>Original URL: {url.originalUrl}</p>
            <p>Short URL: {url.shortUrl}</p>
            <p>Clicks: {url.clicks}</p>
            <button onClick={() => handleDelete(url.id)}>Delete</button>
          </div>
        ))}
      </div>
      <button className="button">
        <Link to="/">Go to Home</Link>
      </button>
    </div>
  );
};

export default Dashboard;
