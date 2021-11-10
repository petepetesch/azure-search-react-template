import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

import "./Details.css";

export default function Details() {

  let { id } = useParams();
  const [document, setDocument] = useState({});
  const [selectedTab, setTab] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // console.log(id);
    axios.get('/api/lookup?id=' + id)
      .then(response => {
        const doc = response.data.document;
        setDocument(doc);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });

  }, [id]);

  // View default is loading with no active tab
  let detailsBody = (<CircularProgress />),
      resultStyle = "nav-link",
      rawStyle    = "nav-link";

  if (!isLoading && document) {
    // View result
    if (selectedTab === 0) {
      resultStyle += " active";
      detailsBody = (
        
        <div 
        className="card-body">
        
      {/*} <h5 className="card-title"> <b> {document.id} </b> </h5> */} 
       <h6 className="card-title">  <b> Product Area: </b> {document.ProductArea} </h6>
       <h6 classname="card-tile"> <b> Product SubArea: </b>  {document.ProductSubArea}  </h6>
       <p className="card-text"><b> FeatureID: </b> {document.FeatureID}</p>
       <p className="card-text"> <b>Feature Title:  {document.FeatureTitle} </b> </p>
       <p className="card-text"> <b>Status: </b>  {document.Status}</p>
       <p className="card-text"> <b>Keywords: </b>  {document.Keywords}</p>
       <p className="card-text"><b> Feature Description: </b> {document.FeatureDescription}</p>
       <p className="card-text"><b> Feature Status: </b> {document.Status}</p>
       <script> 
         {/* PBI Link fix needs to go here */}
         {PBIlink = PBIlink + document.FeatureID + "%27"}
         {/* {console.log("got to PBI link fix")}
         {console.log("PBI link is " + PBIlink)} */}
       </script>
       <p className="card-text">  <a href={PBIlink}>PowerBI Link to Feature Details</a> </p>
       <p className="card-text"> <a href={document.CRMLink}>CRM Link</a></p>
       </div>
      );
    }

    // View raw data
    else {
      rawStyle += " active";
      detailsBody = (
        <div className="card-body text-left">
          <pre><code>
            {JSON.stringify(document, null, 2)}
          </code></pre>
        </div>
      );
    }
  }

  return (
    <main className="main main--details container fluid">
      <div className="card text-center result-container">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item"><button className={resultStyle} onClick={() => setTab(0)}>Result</button></li>
              <li className="nav-item"><button className={rawStyle} onClick={() => setTab(1)}>Raw Data</button></li>
          </ul>
        </div>
        {detailsBody}
      </div>
    </main>
  );
}
