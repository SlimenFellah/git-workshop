
import './App.css';
import WorkshopContent from './components/WorkshopContent';

function App() {
  return (
    <div className="App">
      <WorkshopContent />
      <h4>
        Made with <span className="heart-icon">♥</span> by{' '}
        <a
          href="https://www.linkedin.com/in/slimene-fellah-25950a224/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Slimene FELLAH
        </a>
      </h4>    </div>
  );
}

export default App;
