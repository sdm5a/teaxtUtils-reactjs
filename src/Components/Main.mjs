import './Main.css';
import React from 'react'
import { useState } from 'react';

export default function Main() {
  let [text, setText]=useState("");

  // function to convert text to upper case
  const convertToUppercase=()=>{
    let newText=text.toUpperCase();
    setText(newText);
  }

  // handle the change in text from text area
  const handleOnChange = (event)=>{
    setText(event.target.value) 
  }

  // funtion to convert to lowercase
  const toLowerCase=()=>{
    let newText=text.toLocaleLowerCase();
    setText(newText);
  }

  // funtion to clear the text area
  const clearText=()=>{
    setText("");
  }

  // funtion to copy text
  const copyToClipboard=()=>{
    let text = document.getElementById("my-box");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
  }

  // funtion to remove extra space
  const removeExtraSpace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }


  return (
   <div className="main">
        <p className="text">Enter the Text to analyse</p>
        <textarea id="my-box" name="w3review" onChange={handleOnChange} value={text}></textarea>
        
        <div className="btn">
          <button className="btn-up" onClick={convertToUppercase}>Convert to Uppercase</button>
          <button className='btn-lo' onClick={toLowerCase}>Convert to Lowercase</button>
          <button className='btn-clr' onClick={clearText}>Clear</button>
          <button className='btn-cp' onClick={copyToClipboard}>Copy Text</button>
          <button className='btn-rmv' onClick={removeExtraSpace}>Remove Extra Space</button>
        </div>

        <p className="summary">Your text Summary</p>
        <p className="word-count"> {`${text.split(" ").filter((element)=>{return element.length!==0}).length} word ${text.length} character`}</p>
        <p className="time-to-read">{` ${0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read`}</p>
        <p className='preview'>Prewiew</p>
        <p className='preview-text'>{text.length>0?text:`Enter something in the text box above to preview here.`}</p>
   </div>
  )
}

