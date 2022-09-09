import React from 'react';
import "./TeamInfo.scss";

const TeamInfo = (props) => {
    const {name, role} = props
    
  return (
    <div className='teamInfo'>
        <h3 className='teamInfo__name'>{props.name}</h3>
        <h3 className='teamInfo__role'>{props.role}</h3>
    </div>
  )
}

export default TeamInfo