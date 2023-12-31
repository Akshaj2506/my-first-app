import React, { useState } from 'react'

export default function TextForm(props) {
   const [text, setText] = useState("");

   const handleOnClickUpper = () => {
      setText(text.toUpperCase());
   }
   const handleOnClickLower = () => {
      setText(text.toLowerCase());
   }
   const handleChange = (event) => {
      setText(event.target.value);
   }
   const setWordCount = () => {
      const words = text.split(/\s+/);
      words.forEach((word, i) => {
         if (word === '') words.splice(i);
      })
      return words.length;
   }
   return (
      <>
         <div className="container">
            <h2 className={`my-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h2>
            <div className="mb-3">
               <textarea className="form-control" value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8"></textarea>
               <button disabled={text.length === 0} className="btn btn-primary my-2 data-bs-" onClick={handleOnClickUpper}>Convert To Upper Case</button>
               <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={handleOnClickLower}>Convert To Lower Case</button>
            </div>
         </div>
         <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <h2 className="my-1">Your Text Summary</h2>
            <p>{setWordCount()} words and {text.length} characters</p>
            <p>Time taken to read: Approximately {text.length !== 0 ? ((text.split(/\s+/).length * 0.34) / 60).toFixed(3) : 0} minutes</p>
            {/* "/\s+/" regex command has been used to keep track of all the spaces in the text including new lines and + sign refers to more than 1 */}
            <h2 className="my-1">Preview</h2>
            <p>{text.length > 0 ? text : "Enter text in the textbox above to preview"}</p>
         </div>
      </>
   )
}
