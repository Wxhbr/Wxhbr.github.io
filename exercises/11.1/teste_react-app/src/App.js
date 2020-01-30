import React from 'react';
import './App.css';

const lista = [1, 2, 3, 4, 5];

function App() {
  return (
    <div>
      <header>        
      </header>
      <body>
        <div>
          <ul>{lista.map((el => <li>{el}</li>))}</ul>
        </div>
      </body>
    </div>
  );
}

export default App;
