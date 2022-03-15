import logo from './logo.svg';
import './App.css';
import Music from './Fuctional/Music';
import MusicClass from './Class/Music';
function App() {
  return (
    <div className="border" style={{textAlign: 'center'}}>
      <div className="border">
        <h1>Functional:</h1>
        <Music header= 'Functional Music'/>
      </div>
      <div className="border">
          <h1>Class:</h1>
          <MusicClass header= 'Class Music'/>

      </div>
    </div>
  );
}

export default App;
