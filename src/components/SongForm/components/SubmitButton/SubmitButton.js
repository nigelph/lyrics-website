import React from 'react'
import submitStyle from './SubmitButton.module.css'

export default function SubmitButton(props) {
    return (
        <div className={submitStyle['submit-container']}>
            <input type="submit" id={props.id} className={submitStyle['submit-button-style']} ></input>
        </div >

    )
}
