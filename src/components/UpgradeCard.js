import React from 'react'

function UpgradeCard({money, upgrade, purchaseUpgrade}) {
    const {id, name, level} = upgrade
    const cost = (level*level*100)+100
  return (
    <div>
        <h2>{name}</h2>
        <h3>Current Level: {level}</h3>
        {cost<=money?
        <button onClick={()=>purchaseUpgrade(id, cost)}>Purchase for ${cost}</button>:
        <button>Purchase for ${cost}</button>
        }
    </div>
  )
}

export default UpgradeCard