//import logo from './logo.svg';
import ErrorBoundary from './components/ErrorBoundary';
import Game from './components/Game';
//import './App.css';

function App() {
  return (
    <div className="container">
      <header className="App-header">
       <ErrorBoundary>
          <Game />
      </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
