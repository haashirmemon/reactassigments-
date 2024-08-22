import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({
    name: '',
    rollNo: '',
    fatherName: '',
    className: '',
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const addStudent = () => {
    if (student.name.trim() && student.rollNo.trim() && student.fatherName.trim() && student.className.trim()) {
      setStudents([...students, student]);
      setStudent({
        name: '',
        rollNo: '',
        fatherName: '',
        className: '',
      });
    }
  };

  const removeStudent = (index) => {
    const newStudents = students.filter((_, i) => i !== index);
    setStudents(newStudents);
  };

  return (
    <div className="App">
      <h1>Students List</h1>
      <div className="form">
        <input 
          type="text" 
          name="name" 
          value={student.name} 
          onChange={handleChange} 
          placeholder="Name" 
        />
        <input 
          type="text" 
          name="rollNo" 
          value={student.rollNo} 
          onChange={handleChange} 
          placeholder="Roll No" 
        />
        <input 
          type="text" 
          name="fatherName" 
          value={student.fatherName} 
          onChange={handleChange} 
          placeholder="Father's Name" 
        />
        <input 
          type="text" 
          name="className" 
          value={student.className} 
          onChange={handleChange} 
          placeholder="Class Name" 
        />
        <button onClick={addStudent}>Add Student</button>
      </div>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <span>Name: {student.name}</span> | 
            <span> Roll No: {student.rollNo}</span> | 
            <span> Father's Name: {student.fatherName}</span> | 
            <span> Class: {student.className}</span>
            <button onClick={() => removeStudent(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

