import React from 'react'
import UpgradeCard from './UpgradeCard'
function Upgrades({ money, upgrades, purchaseUpgrade}) {

  return (
    <div className = 'upgradesWrap'>
      <h1 className = 'moneyh1'><span className = 'currentMoney'>Current Money: ${money}</span></h1>
      <h1><span className = 'upgrades'>Upgrades</span></h1>
      {upgrades.map(upgrade=><UpgradeCard key={upgrade.id} upgrade={upgrade} purchaseUpgrade={purchaseUpgrade} money={money}/>)}
    </div>
  )
}

export default Upgrades