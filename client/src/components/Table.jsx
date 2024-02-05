import React from "react";
import "../styles/table.css";
import copy from "../assets/copy.png";

const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

function Table(props) {
  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(`${baseUrl}/${props.short}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="tableContainer">
      <table className="table">
        <thead>
          <tr>
            <th className="headerCell">Original URL</th>
            <th className="headerCell rightAlign">Short URL</th>
          </tr>
        </thead>
        <tbody>
          <tr className="row">
            <td className="urlCell">
              <a
                href={`${props.full}`}
                target="_blank"
                rel="noreferrer noopener"
                className="link"
              >
                {props.full}
              </a>
            </td>
            <td className="urlCell rightAlign">
              <a href={`${baseUrl}/api/url/${props.short}`} className="link">
                {props.short}
              </a>
              <img
                className="copyUrl"
                title="copy url"
                src={copy}
                alt="copy url"
                onClick={copyToClipboard}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
