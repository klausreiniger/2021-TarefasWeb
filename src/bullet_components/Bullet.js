import React from 'react'

const Bullet = (props) => (
    <li key={props.key}>
        <strong>{props.type}</strong> {props.content}
    </li>
)

export default Bullet