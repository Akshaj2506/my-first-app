import React from 'react'

export default function Alert(props) {
   return (
      <div style={{ height: "50px" }}>
         {props.alert && <div className={`alert alert-${props.alert.alertType} alert-dismissible fade show`} role="alert">
            <div>{props.alert.alertMsg}</div>
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
         </div>}
      </div>
   )
}
