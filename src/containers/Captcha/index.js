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
    <>
    <div className='captcha-form'>
      <label className='pt-3'>Enter the text you see below:</label>
      <input type="text" className='form-movement' value={userInput} onChange={handleUserInput} />
      
    </div>
      <div className='captcha-align'>
      <span className='captcha-section fs-4 mb-4'>{captchaText}</span>
      <button className="common" onClick={regenerateCaptcha}><i class="fa-solid fa-arrows-rotate"></i></button>
    
    {/* <input type="text" className='form-movement' value={userInput} onChange={handleUserInput} /> */}
    {/* You can add validation logic to check if userInput matches captchaText */}
  </div></>
  );
}

export default Captcha;
