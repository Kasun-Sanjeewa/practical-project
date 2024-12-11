import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  const navigage = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome To My Website</h1>
        <button className='user-button' onClick={() => navigage('/Users')}>Users</button>
      </header>
    </div>
  );
}

export default App;
