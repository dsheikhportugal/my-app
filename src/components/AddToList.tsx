import React from 'react';
import {Patient} from "../App"



interface PatientProps { 
  patients: Patient[]
  setPatients: React.Dispatch<React.SetStateAction<Patient[]>>

}

// AddToList uses a useState to help keep track of input values 
const AddToList: React.FC<PatientProps>  = ({patients,setPatients}) => {
    const [input, setInput] = React.useState({
        name: '',
        age: '',
        gender: '',
        bloodType: '',
        medicalHistory: '',
        familyHistory: '',
  
    });

const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void => {
  setInput({...input,  [event.target.name]: event.target.value });}

const handleClick = () : void => {
  if(
    !input.name ||!input.age ||!input.gender 
  )
  {
    return alert('Please fill in the minimum of 3 fields');

  }
  setPatients([...patients,
    {
     name: input.name,
     age: parseInt(input.age),
     gender: input.gender,
     bloodType: input.bloodType,
     medicalHistory: input.medicalHistory,
     familyHistory: input.familyHistory

    }
  ]);

  setInput({
    name: '',
    age: '',
    gender: '',
    bloodType: '',
    medicalHistory: '',
    familyHistory: '',
  });

}

  
    return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value ={input.name}
        onChange={(handleChange)}
        name = "name"
      />
      <input
        type="number"
        placeholder="Age"
        className="AddToList-input"
        value ={input.age}
        onChange={(handleChange)}
        name = "age"
      />
      <input
        type="text"
        placeholder="Gender"
        className="AddToList-input"
        onChange={(handleChange)}
        value ={input.gender}
        name = "gender"
      />
      <input
        type="text"
        placeholder="Blood Type"
        className="AddToList-input"
        value ={input.bloodType}
        onChange={(handleChange)}
        name = "bloodType"
      />
      <textarea
        placeholder="Medical History"
        className="AddToList-input"
        value ={input.medicalHistory}
        onChange={(handleChange)}
        name = "medicalHistory"
      />
      <textarea
        placeholder="Family History"
        className="AddToList-input"
        value ={input.familyHistory}
        onChange={(handleChange)}
        name = "familyHistory"
      />

      <button
                onClick={handleClick}
                className="AddToList-btn"
            >
                Add to List
            </button>
    </div>
  )
}


export default AddToList;
