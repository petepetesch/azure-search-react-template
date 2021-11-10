import React from 'react';
import Result from './Result/Result';

import "./Results.css";
var PBIlink = "https://msit.powerbi.com/groups/28d98cd5-edc2-4e72-a5fa-ca18910196be/reports/fbe61164-ef7b-4c8b-a908-bcf4f2d13635/ReportSection2f347367692ad00a8703?filter=Feature%2FFeatureID%20eq%20%27";


export default function Results(props) {

  let results = props.documents.map((result, index) => {
    return <Result
    key={index} 
    document={result.document}
        
      />
  });

  let beginDocNumber = Math.min(props.skip + 1, props.count);
  let endDocNumber = Math.min(props.skip + props.top, props.count);

  return (
    <div>
      <p className="results-info">Showing {beginDocNumber}-{endDocNumber} of {props.count.toLocaleString()} results</p>
      
      <table class="table table-striped">
              <thead>
                  <tr>
                  <th>FeatureID</th>
                  <th>ProductArea</th> 
                  <th>ProductSubArea </th>
                  <th>Feature Title</th>
                  <th>Feature Description</th>
                  <th>Status</th>
                  <th>CRM Link</th>
                  <th>PowerBI Link</th>
                  </tr>
              </thead>
              <tbody>
               
                  
                  {results}
                  
              </tbody>
          </table>
    </div>
  );
};

