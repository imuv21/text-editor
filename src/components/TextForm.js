import React, {useState} from "react";
export default function TextForm(props) {
  const removSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
    const copyText = () =>{
      let text = document.getElementById("myTextarea");
      text.select();
      navigator.clipboard.writeText(text.value);
      setbtnText('Copied');
    }
    const [btnText, setbtnText] = useState("Copy Text");
    const clearClick = () =>{
        let cleartext = '';
        setText(cleartext);
        setbtnText('Copy Text');
    }
    const loClick = () =>{
        let lotext = text.toLowerCase();
        setText(lotext);
    }
    const upClick = () =>{
        let uptext = text.toUpperCase();
        setText(uptext);
    }
    const upChange = (event) =>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container">
        <h1>{props.headline}</h1>
      <div className="mb-3">
        <textarea className="form-control" placeholder="Enter text here" style={{backgroundColor : props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} value={text} onChange={upChange} id="myTextarea" rows="4"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={upClick} >Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={loClick} >Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={removSpace}>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-2" onClick={copyText}>{btnText}</button>
      <button className="btn btn-primary mx-2" onClick={clearClick} >Clear</button>
    </div>
    <div className="container my-2">
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((t) => t!=="").length} words and {text.length} characters</p>
        <p>It would take you {0.008 * text.split(" ").length} minutes to read the whole paragraph. </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter text to preview it..."}</p>
    </div>
    </>
  );
}
