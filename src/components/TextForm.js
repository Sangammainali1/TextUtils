import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=> {
        console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLoClick = ()=> {
        console.log("LowerCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleClearText = ()=> {
        console.log("handleClearText was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    const handleOnChange = (event)=> {
        console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = ()=> {
        console.log("In am copy");
        var text = document.getElementById('myBox');
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard", "success");
    }

    const handleExtraSpaces = ( ) => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Space Removed", "success");

    }

    const [text, setText] = useState('');
  return (
    <>
    <div className='container'  style = {{color:props.mode==='dark'?'white':'black'}}>
<h1>{props.heading}</h1>
<div className="mb-2">
  <textarea className="form-control"  value={text} onChange={handleOnChange} style = {{backgroundColor:props.mode==='#13466e'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
<button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>
<button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
<button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-2"  style = {{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} 453255 characters</p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
