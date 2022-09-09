import React from 'react'
import "./FinalCard.scss";
import TeamInfo from "../TeamInfo/TeamInfo";
import Counter from "../Counter/Counter"

const FinalCard = (props) => {
    const {name, role} = props

  return (
    <div className="finalCard">
        <TeamInfo name={name} role={role} />
        <Counter />
    </div>
  )
}

export default FinalCard