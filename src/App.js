import AlexaImage from './images/alexa.png';
import SiriImage from './images/siri.png';

function App() {
  return (
    <div>
      <p>hello image</p>
      <img src={AlexaImage} alt="alex"/>
      <img src={SiriImage} alt="siri"/>
    </div>
  );
}

export default App;
