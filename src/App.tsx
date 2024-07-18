import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList';

// Define the Patient interface to represent each patient record
export interface Patient {
  name: string
  age: number
  gender: string,
  bloodType: string,
  medicalHistory: string
  familyHistory?: string
}

// The App component that renders the list of patients and the form to add new patients
function App() {
const [patients, setPatients] = useState<Patient[]>([

{
  name: 'John Doe',
  age: 30,
  gender: 'Male',
  bloodType: 'A+',
  medicalHistory: 'Diabetes, hypertension',
  familyHistory: 'High blood pressure'
},
{
  name: 'Jane Doe',
  age: 28,
  gender: 'Female',
  bloodType: 'B+',
  medicalHistory: 'Asthma, heart disease',
  familyHistory: 'High cholesterol'
},


])

/* The App component manages the state of patients using useState.
This state is passed to the List component for displaying the patients.
The setPatients function is passed to the AddToList component to allow adding new patients to the list */
 
  return (
    <div className="App">
    <h1>iLoF patient records</h1>
    <List patients={patients}/>
    <AddToList patients = {patients} setPatients ={setPatients} />
    </div>
  );
}

export default App;
