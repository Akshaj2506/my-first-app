import React, { useState } from 'react'

export default function About() {
   const [uiMode, setUiMode] = useState({
      backgroundColor: "white",
      color: "#222"
   })
   const [uiModeButtonText, setUiModeButtonText] = useState("Enable Dark Mode");

   // To toggle dark/light mode
   const toggleDarkMode = () => {
      if (uiMode.color === "#222") {
         setUiMode({
            backgroundColor: "#121212",
            color: "white"
         })
         setUiModeButtonText("Enable Light Mode")
      } else {
         setUiMode({
            backgroundColor: "white",
            color: "#222"
         })
         setUiModeButtonText("Enable Dark Mode")
      }
   }
   return (
      <div className="container my-3" style={uiMode}>
         <h2>About Us</h2>
         <div class="accordion" id="accordionExample" style={uiMode}>
            <div class="accordion-item" style={uiMode}>
               <h2 class="accordion-header" style={uiMode}>
                  <button class="accordion-button" style={uiMode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                     Accordion Item #1
                  </button>
               </h2>
               <div id="collapseOne" class="accordion-collapse collapse hide" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                     <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
               </div>
            </div>
         </div>
         <button className='btn btn-primary' onClick={toggleDarkMode}>{uiModeButtonText}</button>
      </div>
   )
}
