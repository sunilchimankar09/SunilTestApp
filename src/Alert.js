import React from 'react'

export default function Alert(props) {
     if (props.alert === null) {
        return null;
    }
    return (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           {props.alert.msg}
            <button type="button" className="btn-close" onClick={()=>props.setAlert(null)} data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}
