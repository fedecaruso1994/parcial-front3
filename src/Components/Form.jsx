/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from '../styles/Form.module.css';

const Form = ({ setData, setError }) => {
  const [name, setName] = useState('');
  const [team, setTeam] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name.length < 3 || name.trim() !== name) {
      setError('Por favor chequea que la información sea correcta');
      setData(null);
      return;
    }
    if (team.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      setData(null);
      return;
    }

    setData({ name, team });
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Nombre:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Equipo de Fútbol Favorito:</label>
        <input 
          type="text" 
          value={team} 
          onChange={(e) => setTeam(e.target.value)} 
          className={styles.input}
        />
      </div>
      <button type="submit" className={styles.button}>Enviar</button>
    </form>
  )
}

export default Form;



