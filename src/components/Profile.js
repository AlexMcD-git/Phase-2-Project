import React from 'react'

function Profile({ profile, upgrades, cats, addNewCat, setCats }) {
  const { id, name, money, score } = profile

  // const freshProfile = {
  //   "name": "Cat Person",
  //   "money": 0,
  //   "score": 0
  // }

  // const freshCats =
  //   [{
  //     "name": "Momo",
  //     "image": "https://media.discordapp.net/attachments/972859080400076840/974010615964241991/image0.jpg?width=393&height=719",
  //     "id": 9999
  //   },
  //   {
  //     "name": "Jezebel",
  //     "image": "https://i.ibb.co/QMg91sP/jezzie.jpg",
  //     "id": 99999
  //   }]

  //   function resetCats(){
  //     fetch("http://localhost:3001/cats",{
  //     method:"POST",
  //     headers:{
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(freshCats[0])
  //   })
  //   .then(r=>r.json())
  //   .then(data=>console.log(data))

  //   fetch("http://localhost:3001/cats",{
  //     method:"POST",
  //     headers:{
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(freshCats[1])
  //   })
  //   .then(r=>r.json())
  //   .then(setCats(freshCats))
  // }

// async function deleteCat(catID){
//    fetch(`http://localhost:3001/cats/${catID}`, {
//     method: "DELETE",
//   })}

//   async function restartGame() {
    // cats.forEach(cat=>{
    //   deleteCat(cat.id)
    // })

//   fetch('http://localhost:3001/profile/1',{
//     method:"PATCH",
//     headers:{
//       'Content-type': 'application/json'
//     },
//     body:JSON.stringify(freshProfile)
//   })
//   upgrades.forEach(upgrade=>{
//     fetch(`http://localhost:3001/upgrades/${upgrade.id}`,{
//     method:"PATCH",
//     headers:{
//       'Content-type': 'application/json'
//     },
//     body:JSON.stringify({level:1})
//   })})
// }
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <h2>So far you have helped {score} cats find their furever home.</h2>
      <h2>You have ${money}.</h2>
      <h4>Click the button to restart. This will reset cats, money, and score.</h4>
      <button>
          Reset Progress.</button>
    </div>
  )
}

export default Profile