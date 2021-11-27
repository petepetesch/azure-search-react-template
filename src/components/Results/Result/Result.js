import React from 'react';

import './Result.css';

var PBIlink = "https://msit.powerbi.com/groups/28d98cd5-edc2-4e72-a5fa-ca18910196be/reports/fbe61164-ef7b-4c8b-a908-bcf4f2d13635/ReportSection2f347367692ad00a8703?filter=Feature%2FFeatureID%20eq%20%27";

export default function Result(props) {
   /* let results = props.documents.map((result, index) => {
        return <Result 
            key={index} 
            document={result.document}
          />;
      });
    
      let beginDocNumber = Math.min(props.skip + 1, props.count);
      let endDocNumber = Math.min(props.skip + props.top, props.count);
       let PBIlink = "https://msit.powerbi.com/groups/28d98cd5-edc2-4e72-a5fa-ca18910196be/reports/fbe61164-ef7b-4c8b-a908-bcf4f2d13635/ReportSection2f347367692ad00a8703?filter=Feature%2FFeatureID%20eq%20%27" + {props.document.FeatureID + "%27"};
 */
    return(
       // <a href={`/details/${props.document.FeatureID}`}>
        <tr>
        
        <td>{props.document.FeatureID}</td>
        <td>{props.document.ProductArea}</td>
        <td>{props.document.ProductSubArea}</td>
        <td><b>{props.document.FeatureTitle} </b></td>
        <td>{props.document.FeatureDescription}</td>
        <td>{props.document.Status}</td>
        <td><a href={PBIlink+ props.document.FeatureID + "%27"} target="_blank" rel="noopener noreferrer">PowerBI</a></td>
        <td><a href={props.document.CRMLink} target="_blank" rel="noopener noreferrer">  CRMLink</a></td>
        <td>{props.document.Keywords}</td>
    </tr>
    // </a>

    // open hyperlink in new tab - target="_blank" should be added to anchor
    
 
    );
    }
