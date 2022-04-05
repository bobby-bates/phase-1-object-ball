console.log('Advanced debugging example running.')
// debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    // debugger
    let teamObj = game[gameKey]
    // debugger
    // what is 'data' at each loop through out this block?
    // when will the following line of code work and when will it break?
    let players = teamObj.players
    for (let fullName in players) {
      let data = players[fullName]
      // debugger
      console.log(`${fullName}'s shoe size: ${data.shoe}`)
    }
  }
}

// then, call the function so it runs!
goodPractices()
