import React, { useState, useEffect } from 'react';
import './style.css';
import {Card} from '../../componentes/card';

function Home() {
  const [studentName, setStudentName] = useState(' ');
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: "", avatar: "" });

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
  }

  useEffect(() => {
    fetch("https://api.github.com/users/tainami")
      .then((response) => response.json())
      .then((data) => {
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        });
      });
  }, []);
  
  return (
    <div className='container'>
      <header>
        <h3 className='titulo'>Lista de Presença</h3>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>

      <form className='buttonEInput'>
        <input 
          className='inputNome'   
          type='text' 
          placeholder='Digite o nome'
          onChange={e => setStudentName(e.target.value)}
        />
        <button 
          className='button' onClick={handleAddStudent} type='button'>
            Adicionar
          </button>
      </form>

      {
        students.map(student => (
        <Card 
          key={student.time}
          name={student.name} 
          time={student.time}
        />
        ))
      }
    
    </div>
  )
}

export default Home
