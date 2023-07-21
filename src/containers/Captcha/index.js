import React, { useState } from 'react';

function Captcha({ captchaLength }) {
  const [captchaText, setCaptchaText] = useState(generateCaptchaText(captchaLength));
  const [userInput, setUserInput] = useState('');

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  function generateCaptchaText(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captchaText = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captchaText += characters[randomIndex];
    }
  
    return captchaText;
  }

  const regenerateCaptcha = () => {
    setCaptchaText(generateCaptchaText(captchaLength));
    setUserInput('');
  };

  return (
    <div>
      <label>Enter the text you see below:</label>
      <div>
        <span>{captchaText}</span>
        <button className="common-btn" onClick={regenerateCaptcha}>Refresh</button>
      </div>
      <input type="text" className='form-movement' value={userInput} onChange={handleUserInput} />
      {/* You can add validation logic to check if userInput matches captchaText */}
    </div>
  );
}

export default Captcha;
