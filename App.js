import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getAllStudents() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/student/');
        console.log(response.data);
        setStudents(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getAllStudents();
  }, []);

  return (
    <div className="App">
      <h1>Connect React JS To Django</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>Name : {student.stuname}, Email : {student.email}</li>
        
        ))}
      </ul>
    </div>
  );
  
}

export default App;
