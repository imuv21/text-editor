import React from 'react'

export default function Alert(props) { 
    const cap = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (
        props.alert &&  <div>
            <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                 {cap(props.alert.type)}:{props.alert.msg}
            </div>
        </div>
    )
}
