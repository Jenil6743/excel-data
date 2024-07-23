import React, { useState } from 'react';
import './ExcelViewer.css';

function ExcelViewer() {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');
  const [customFileUrl, setCustomFileUrl] = useState('');

  const fileUrls = [
    { name: 'BDF 1', url: 'https://www.dropbox.com/scl/fi/72vfzgmo1tmalhtt4zg5d/BDF-1.xlsx?rlkey=q8h3yblqb5qrklcs2fxpyactd&st=4audfcr7&raw=1' },
    { name: 'BDF Type 1-4', url: 'https://www.dropbox.com/scl/fi/bj7p3bzif6bhtqci7swr5/bdf_type_1_4.xlsx?rlkey=mak0leinoz97th5ofhkbe2zy5&st=93c1s0ir&dl=0&raw=1' },
    {name: 'REAL-BDF-1', url: "https://www.dropbox.com/scl/fi/wdac095hn4fy7jtmbk1tk/real_BDFData.xlsx?rlkey=0b2sjbj6ehokwvw4eubj03ko6&st=dl0v22aj&dl=0&raw=1"}
  ];

  const handleFileSelect = (e) => {
    const selectedUrl = e.target.value;
    setSelectedFileUrl(selectedUrl);
    setCustomFileUrl('');
  };

  const handleUrlChange = (e) => {
    setCustomFileUrl(e.target.value);
    setSelectedFileUrl('');
  };

  return (
    <div className="excel-viewer">
      <div className="excel-upload">
        <label htmlFor="file-select" className="upload-label">
          Choose an Excel file:
        </label>
        <select id="file-select" onChange={handleFileSelect}>
          <option value="">Select a file</option>
          {fileUrls.map((file, index) => (
            <option key={index} value={file.url}>
              {file.name}
            </option>
          ))}
        </select>
      </div>
      <div className="excel-url-input">
        <label htmlFor="url-input" className="upload-label">
          Or enter a custom Excel file URL:
        </label>
        <input
          type="text"
          id="url-input"
          value={customFileUrl}
          onChange={handleUrlChange}
          placeholder="Enter URL here"
        />
      </div>
      {(selectedFileUrl || customFileUrl) && (
        <div className="excel-sheet">
          <iframe
            src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(selectedFileUrl || customFileUrl)}`}
            width="100%"
            height="600px"
            frameBorder="0"
            title="Excel Viewer"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default ExcelViewer;
