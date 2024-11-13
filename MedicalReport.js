import React, { useState } from 'react';
import './MedicalReport.css';
import axios from 'axios';

function MedicineReport() {
  const [report, setReport] = useState({
    patientName: '',
    reportType: '',
    date: '',
    symptoms: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReport({ ...report, [name]: value });
  };
  const SubmitForm=()=>{
    axios.post("http://localhost:3000/Patient",{
      Name:report.patientName,
      Type:report.reportType,
      Date:report.date,
      symptoms:report.symptoms,
      file:report.file
    }
    )
    .then(()=>console.log("successfully updated "))
    .catch((err)=>console.log(err.message))
    setTimeout(()=>
    {
      setReport({
        patientName:'',
        reportType:'',
        date:'',
        symptoms:'',
        file:null
      })
    },2000)
  }

  const handleFileChange = (e) => {
    setReport({ ...report, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would usually send data to the backend
    console.log('Report Submitted:', report);
    alert('Medical Report Submitted!');
  };

  return (
    <div className="medicine-report">
      <h1>Submit Medical Report</h1>
      <form onSubmit={handleSubmit}>
        <label>Patient Name:</label>
        <input
          type="text"
          name="patientName"
          value={report.patientName}
          onChange={handleChange}
          required
        />

        <label>Report Type:</label>
        <input
          type="text"
          name="reportType"
          value={report.reportType}
          onChange={handleChange}
          required
        />

        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={report.date}
          onChange={handleChange}
          required
        />

        <label>Symptoms:</label>
        <textarea
          name="symptoms"
          value={report.symptoms}
          onChange={handleChange}
          required
        />

        <label>Upload Report:</label>
        <input type="file" onChange={handleFileChange} required />

        <button type="submit" onClick={SubmitForm}>Submit Report</button>
      </form>
    </div>
  );
}

export default MedicineReport;
