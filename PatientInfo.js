import React, { useEffect, useState } from 'react';
import './PatientInfo.css';
import axios from 'axios';

function PatientInfo() {
  const [report,setReport]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/Patient")
    .then((res)=>setReport(res.data))
    .catch((err)=>console.log(err.message));
  },[])

  return (
    <div className="patient-info">
      <h1>Patient Information</h1>
        <div>
                  <div className='patient-data'>
                  <h1>Name</h1>
                  <h1>Type</h1>
                  <h1>Date</h1>
                  <h1>Symptoms</h1>
                  </div>
          {
            report.map((idx)=>{
              return(
                <div>
                <div key={idx.id} className='patient-data'>

                    <h3>{idx.Name}</h3>
                    <h3>{idx.Type}</h3>
                    <h3>{idx.Date}</h3>
                    <h3>{idx.symptoms}</h3>
                </div>
                </div>
              )
            })
          }
        </div>
    </div>
  );
}

export default PatientInfo;
