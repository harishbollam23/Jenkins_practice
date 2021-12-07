import './App.css';
import { useState } from 'react'
function App() {
  const [buttonColor, setButtonColor] = useState('blue');
  const [disableStatus, setDisableStatus] = useState(true)
  const changeColor = buttonColor === 'blue' ? 'red' : 'blue';
  return (
    <div className="App">
      <div>
        <button disabled={disableStatus} onClick={() => setDisableStatus(status => !status)}>EnableDisable</button>
      </div>
      <button style={{ backgroundColor: buttonColor }} onClick={() => setButtonColor(changeColor)}>change color to {changeColor}</button>
    </div >
  );
}

export default App;
