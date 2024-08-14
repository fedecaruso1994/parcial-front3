/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from '../styles/Card.module.css';

const Card = ({ name, team }) => {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.cardTitle}>Información del estudiante</h2>
      <p className={styles.cardText}>Nombre: {name}</p>
      <p className={styles.cardText}>Equipo de Fútbol Favorito: {team}</p>
    </div>
  )
}

export default Card;



