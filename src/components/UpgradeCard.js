import React from 'react'

function UpgradeCard({money, upgrade, purchaseUpgrade}) {
    const {id, name, level, description} = upgrade
    const cost = (level*level*100)+100
  return (
    <div>
        <h2 className = 'upgradeName'>{name}</h2>
        <h3>{description}</h3>
        <h3 className = 'upgradeLvl'>Current Level: <span className = 'profileVal'>{level}</span></h3>
        {cost<=money?
        <button className = 'btn' onClick={()=>purchaseUpgrade(id, cost)}>Purchase for ${cost}</button>:
        <button className = 'btn'>Purchase for ${cost}</button>
        }
    </div>
  )
}

export default UpgradeCard