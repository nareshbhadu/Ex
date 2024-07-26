import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const hell = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{background: props.mode==='dark'?'grey':'white', color:props.mode==='light'?'black':'white'}} onChange={hell} value={text} id="myBox" rows="12"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            </div>
            <div className="container my-4">
                <h2>Your text summary</h2>
                <p>{text.split(' ').length} words, {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
