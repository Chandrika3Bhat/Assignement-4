// src/components/Reporting.js
import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const Reporting = () => {
  const handleExport = async (format) => {
    try {
      const { data } = await axios.get(`/api/report/export?format=${format}`, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `report.${format}`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error exporting report', error);
    }
  };

  return (
    <div>
      <Button onClick={() => handleExport('pdf')}>Export PDF</Button>
      <Button onClick={() => handleExport('excel')}>Export Excel</Button>
    </div>
  );
};

export default Reporting;
