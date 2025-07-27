import React, { useState } from "react";
import {QRCode} from 'react-qr-code';

function App() {
  const [text, setText] = useState('https://example.com');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px'}}>

      <h1>React QR Code Generator</h1>

      <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text or URL"
        style={{
          padding: '10px',
          width: '300px',
          fontSize: '16px',
          marginBottom: '20px',
        }}>
      </input>
      <div>
        <QRCode value={text} size={256} level="H" includeMargin={true}/>
      </div>
    </div>
  )
}

export default App;