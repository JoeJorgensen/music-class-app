import logo from './logo.svg';
import './App.css';
import Music from './Fuctional/Music';
import MusicClass from './Class/Music';
import Badge from './Styles/Badge';
import Button from './Styles/Button';
function App() {
  return (
    <div className="border" style={{textAlign: 'center'}}>
    
      <div className="border">
        <h1>Functional:</h1>
        <Music header= 'Functional Music'/>
          <Badge>Badge </Badge>  
          <Badge rounded >Rounded</Badge>  
          <Badge secondary >Secondary</Badge>  
          <Badge success >Success</Badge>  

          <Button >Button</Button>  
          <Button outline >Button</Button>  




      </div>
      <div className="border">
          <h1>Class:</h1>
          <MusicClass header= 'Class Music'/>
          
      </div>
    </div>
  );
}

export default App;
