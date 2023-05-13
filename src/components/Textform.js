import React, { useState } from 'react'

export default function Textform(props) {
  const handleUp = () =>{
   // console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Coverted to UpperCase" , "success")
  }
  
  const handleLo = () =>{
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase" , "success")
  }

  const handleClear = () =>{
    setText("");
    props.showAlert("Cleared All","success")
  }

  const handleOn = (event) =>{
   // console.log("On change")
    setText(event.currentTarget.value)
  }

  const [text, setText]= useState('')
  
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <label for="myBox" className="form-label"></label>
  <textarea  className="form-control" value={text} onChange={handleOn} id="mtBox" rows="8"></textarea>
 <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUp}>Capital</button>
 <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLo}>Lower</button>
 <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>

</div>
    </div>
    <div className="container my-2">
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((elem)=>{return elem.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read this </p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
    
  )
}
