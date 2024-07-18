import React from 'react';
import {Patient} from "../App" // Importing Patient interface from App


// Defined to specify the props required by the List component an array of Patient objects
interface PatientProps {
  patients: Patient[];
}

const List: React.FC<PatientProps> = ({ patients }) => {
  const renderList = (): JSX.Element => (
    <ul>
      {patients.map(patient => (
        <li key={patient.name}>
          Name: {patient.name}<br />
          Age: {patient.age}<br />
          Gender: {patient.gender}<br />
          Blood Type: {patient.bloodType}<br />
          Medical History: {patient.medicalHistory}<br />
          {patient.familyHistory ? (<> Family History: {patient.familyHistory}<br /> </>) : null}
        </li>
      ))}
    </ul>
  );

  return renderList(); // Call renderList function to render the JSX
};

export default List;
