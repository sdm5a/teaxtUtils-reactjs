import './Navbar.css';
import React from 'react'

export default function Navbar() {
  let mode="light";
  
  let changeMode=()=>{
    let box=document.getElementById("my-box");
    if(mode==="light"){
      mode="dark";
      document.body.style.backgroundColor="#121212";
      document.body.style.color="white";
      box.style.backgroundColor="#3F2E3E"
      box.style.color="white";
    }else{
      mode="light";
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      box.style.backgroundColor="white";
      box.style.color="black";
    }

  }

  let showMode=()=>{
    // let menu=document.querySelector(".menu");
    let mode=document.querySelector(".btn-mode1");

    if(mode.style.display==="none"){
      mode.style.display="inline";
    }else{
      mode.style.display="none";
    }
  }

  return (
    <div className="navbar">

        <div className="head">
            <p className='brand-name'>Text Utils</p>
            <p className="home">Home</p>
        </div>

        <div>   
            <button className='btn-mode' onClick={changeMode}>Dark Mode</button>
            <i className="fa-regular fa-moon btn-mode1" onClick={changeMode}></i>
            <i className="fa-solid fa-bars menu" onClick={showMode}></i>
        </div>

        
    </div>
  );
}
