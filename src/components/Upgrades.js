import React from 'react'
import UpgradeCard from './UpgradeCard'
function Upgrades({ money, upgrades, purchaseUpgrade}) {

  return (
    <div className = 'upgrades'>
      <p>Current Money: ${money}</p>
      <h1>Upgrades</h1>
      {upgrades.map(upgrade=><UpgradeCard key={upgrade.id} upgrade={upgrade} purchaseUpgrade={purchaseUpgrade} money={money}/>)}
    </div>
  )
}

export default Upgrades