import React from 'react'
import boxStyle from './InputBox.module.css'

export default function InputBox(props) {
    return (
        <div>
            <input type="text" className={boxStyle['input-box-style']} placeholder={props.placeholder} id={props.id}></input>
        </div>
    )
}
