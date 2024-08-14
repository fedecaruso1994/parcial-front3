import styles from './styles/App.module.css';
import Card from './Components/Card';
import Form from './Components/Form';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  return (
   <div className={styles.appContainer}>
    <h1 className={styles.title}>Carga de estudiantes</h1>
    <Form setData={setData} setError={setError}/>
    {error && <p>{error}</p>}
    {data && <Card name={data.name} team={data.team} />}
   </div>
  )
}

export default App;




