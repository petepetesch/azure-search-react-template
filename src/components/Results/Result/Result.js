import React from 'react';
import './Result.css';

var PBIlink = "https://msit.powerbi.com/groups/28d98cd5-edc2-4e72-a5fa-ca18910196be/reports/fbe61164-ef7b-4c8b-a908-bcf4f2d13635/ReportSection2f347367692ad00a8703?filter=Feature%2FFeatureID%20eq%20%27";

export default function Result(props) {
    return(
        <tr>
        
        <td>{props.document.FeatureID}</td>
        <td>{props.document.ProductArea}</td>
        <td>{props.document.ProductSubArea}</td>
        <td><b>{props.document.FeatureTitle} </b></td>
        <td>{props.document.FeatureDescription}</td>
        <td>{props.document.Status}</td>
        <td><a href={props.document.CRMLink}>CRM</a></td>
        <td><a href={PBIlink+ props.document.FeatureID + "%27"}>PowerBI</a></td>
    </tr>
    );
}
