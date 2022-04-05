const gameObject = () => {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number:     0,
                    shoe:       16,
                    points:     22,
                    rebounds:   12,
                    assists:    12,
                    steals:     3,
                    blocks:     1,
                    slamDunks:  1
                },
                'Reggie Evans': {
                    number:     30,
                    shoe:       14,
                    points:     12,
                    rebounds:   12,
                    assists:    12,
                    steals:     12,
                    blocks:     12,
                    slamDunks:  7
                },
                'Brook Lopez': {
                    number:     11,
                    shoe:       17,
                    points:     17,
                    rebounds:   19,
                    assists:    10,
                    steals:     3,
                    blocks:     1,
                    slamDunks:  15
                },
                'Mason Plumlee': {
                    number:     1,
                    shoe:       19,
                    points:     26,
                    rebounds:   12,
                    assists:    6,
                    steals:     3,
                    blocks:     8,
                    slamDunks:  5
                },
                'Jason Terry': {
                    number:     31,
                    shoe:       15,
                    points:     19,
                    rebounds:   2,
                    assists:    2,
                    steals:     4,
                    blocks:     11,
                    slamDunks:  1
                }

            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number:     4,
                    shoe:       18,
                    points:     10,
                    rebounds:   1,
                    assists:    1,
                    steals:     2,
                    blocks:     7,
                    slamDunks:  2
                },
                'Bismak Biyombo': {
                    number:     0,
                    shoe:       16,
                    points:     12,
                    rebounds:   4,
                    assists:    7,
                    steals:     7,
                    blocks:     15,
                    slamDunks:  10
                },
                'DeSagna Diop': {
                    number:     2,
                    shoe:       14,
                    points:     24,
                    rebounds:   12,
                    assists:    12,
                    steals:     4,
                    blocks:     5,
                    slamDunks:  5
                },
                'Ben Gordon': {
                    number:     8,
                    shoe:       15,
                    points:     33,
                    rebounds:   3,
                    assists:    2,
                    steals:     1,
                    blocks:     1,
                    slamDunks:  0
                },
                'Brendan Haywood': {
                    number:     33,
                    shoe:       15,
                    points:     6,
                    rebounds:   12,
                    assists:    12,
                    steals:     22,
                    blocks:     5,
                    slamDunks:  12
                }
            }
        }
    }
}

const game = gameObject()

// This function is so simple...
// const homeTeamName = () => game['home']['teamName']
// ...it can be an assigned variable instead:

// const homeTeamName = game['home']['teamName']

// NOTE: Result of game was not assigned to a variable;
// As conplexity increases, doing so before manipulation
// can help when debugging. One-liners are not always better!

// Helper functions NOTE: How can I refactor these?
const findPlayerData = requestedPlayerName => {
    for (const gameKey in game) {
        const playersObj = game[gameKey].players
        const playersNamesArr = Object.keys(playersObj)
        for (const playerName of playersNamesArr) {
            if (playerName === requestedPlayerName) {
                 return playersObj[playerName]
            }
        }
    }
}

const findTeamData = reqTeamName => {
    // for (const homeOrAway in game) {
    //     const teamName = game[homeOrAway].teamName
    //     if (teamName === reqTeamName) {
    //         return game[homeOrAway]
    //     }
    // }
    // Refactor:
    game.home.teamName === reqTeamName ? game.home : game.away
}

const numPointsScored = playerName => findPlayerData(playerName).points

const shoeSize = playerName => findPlayerData(playerName).shoe

const teamColors = teamName => {
    for (const homeOrAway in game) {
        if ( game[homeOrAway].teamName === teamName) {
            return game[homeOrAway].colors
        }
    }
}

const teamNames = () => {
    const teamsArr = []
    for (const homeOrAway in game) {
        teamsArr.push(game[homeOrAway].teamName)
    }
    return teamsArr
}

const playerNumbers = reqTeamName => {
    const team = findTeamData(reqTeamName)
    const numsArr = [];
    // debugger
    for (const player of Object.values(team.players)) {
        numsArr.push(player.number)
    }
    return numsArr
}

// function playerStats SEE: findPlayerData

const bigShoeRebounds = () => {
    // Find player with largest shoe size
    let largestSoFar = 0
    let playerWithLargestShoeSize = {}
    for (const homeOrAway in game) {
        const playersArr = Object.entries(game[homeOrAway].players)
        for (const player of playersArr) {
            // TODO: Merge player name & data into one array?
            if (player[1].shoe > largestSoFar) {
                largestSoFar = player[1].shoe
                playerWithLargestShoeSize = player
            }
        }
    }
    // return that player's number of rebounds
    return playerWithLargestShoeSize[1].rebounds
    // NOTE: Flesh out return with player's name, if needed
}

const mostPointsScored = () => {
    let largestSoFar = 0
    let playerWithHighestScore = {}
    for (const homeOrAway in game) {
        const playersArr = Object.entries(game[homeOrAway].players)
        for (const player of playersArr) {
            // TODO: Merge player name & data into one array?
            if (player[1].points > largestSoFar) {
                largestSoFar = player[1].points
                playerWithHighestScore = player
            }
        }
    }
    return playerWithHighestScore[0]
}

const winningTeam = () => {
     // Tally both teams' players' scores
     let homeScore = 0
     let awayScore = 0
     // const scoreTally = { homeScore: 0, awayScore: 0 }
     for (const homeOrAway in game) {
         const playersArr = Object.entries(game[homeOrAway].players)
         for (const player of playersArr) {
             const pts = player[1].points
             homeOrAway === 'home' ? homeScore += pts : awayScore += pts
         }
     }
     return homeScore > awayScore ? game.home.teamName : game.away.teamName
}

const playerWithLongestName = () => {
    let longestName = ''
    for (const homeOrAway in game) {
        const playersArr = Object.entries(game[homeOrAway].players)
        for (const player of playersArr) {
            // TODO: Merge player name & data into one array?
            // debugger
            if (player[0].replace(/\s/, '').length > longestName.length) {
                longestName = player[0]
            }
        }
    }
    return longestName
}

const doesLongNameStealATon = () => {
    // NOTE: Real neat, separately declaring name and data here!
    const longName = playerWithLongestName()
    const longNameSteals = findPlayerData(longName).steals
    for (const homeOrAway in game) {
        const playersArr = Object.entries(game[homeOrAway].players)
        for (const player of playersArr) {
            // TODO: Merge player name & data into one array?
            if (player[1].steals > longNameSteals) {
                return 'Nope'
            }
        }
    }
    return 'Yup'
}