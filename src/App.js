import './App.css';
import { useState } from 'react';

function App() {
  const[text, setText] = useState("Please Enter Your Text Here...")

  const handleChange = (event) => {
    setText(event.target.value)
  }
  const handleUpperCase = (event) => {
    const newtext = text.toUpperCase()
    setText(newtext)
  }
  const handleClear = () => {
    setText("")
  }
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  }
  const [btnText, setBtnText] = useState("Switch to DarkMode")
  const[myStyle, setMyStyle] = useState({
    color : 'black',
    backgroundColor : 'white'
  })
  const modeToggle = () => {
    if(myStyle.color === 'white'){
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setBtnText("Switch to Dark Mode")
    }
      else{
        setMyStyle({
        color:'white',
        backgroundColor:'#004c4c'
        })
        setBtnText("Switch to Light Mode")
      }
    }
  

  return (
    <div style = {myStyle} className="App">
      <h1>Text Editor</h1>
      <textarea rows="8" onChange={handleChange} value={text}></textarea><br />
      <button type="button" class="btn btn-primary mx-3" onClick={handleUpperCase}>Convert To Uppercase</button>
      <button type="button" class="btn btn-primary mx-3" onClick={handleClear}>Clear Text</button>
      <button type="button" class="btn btn-primary mx-3" onClick={handleCopyToClipboard}>Copy to Clipboard</button>
      <button type="button" class="btn btn-primary mx-3" onClick={modeToggle}>{btnText}</button>
    </div>
  );
}

export default App;
