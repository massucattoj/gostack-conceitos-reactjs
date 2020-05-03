import React, { useState, useEffect } from "react";
import api from './services/api';

import "./styles.css";

function App() {

  const [repositories, setRepositories] = useState([]);
  
  useEffect(() => {
    api.get('/repositories').then(response => {
      setRepositories(response.data);
    })
  }, [])

  async function handleAddRepository() {
    const response = await api.post('/repositories', {
      title: `ReactJS Project - ${Date.now()}`,
      url: 'https://github.com/massucattoj/gostack-conceitos-reactjs',
      techs: ['ReactJS', 'HTML']
    })

    const repository = response.data;
    setRepositories([...repositories, repository ])

    console.log(response.data);
  }

  async function handleRemoveRepository(id) {
    const response = await api.delete(`/repositories/${id}`);
    
    setRepositories(repositories.filter(repo => repo.id !== id))
  }

  return (
    <div>
      <h1>Repositories:</h1>
      <ul data-testid="repository-list">
        {repositories.map(repo => (
          <li key={repo.id}>
            {repo.title}
            <button onClick={() => handleRemoveRepository(repo.id)}>
            Remover
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
