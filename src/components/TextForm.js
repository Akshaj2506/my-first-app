import React, { useState } from 'react'

export default function TextForm(props) {

   const handleOnClick = () => {
      setText(text.toUpperCase());
   }
   const handleChange = (event) => {
      setText(event.target.value);
   }
   const [text, setText] = useState("This is the first value");
  return (
    <div className="container">
         <h2 className='my-4'>{props.heading}</h2>
        <div className="mb-3">
           <textarea className="form-control" value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8"></textarea>
           <button className="btn btn-primary my-4" onClick={handleOnClick}>Convert To Upper Case</button>
        </div>
    </div>
  )
}
