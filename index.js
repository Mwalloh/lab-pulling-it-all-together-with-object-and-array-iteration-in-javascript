function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evens": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismack Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Hayword": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

// A function that returns the points a player has scored based on their name
function numPointsScored(playerName) {
  let pointsScored = gameObject;
  if (playerName === "Alan Anderson") {
    return pointsScored().home.players["Alan Anderson"].points;
  } else if (playerName === "Reggie Evens") {
    return pointsScored().home.players["Reggie Evens"].points;
  } else if (playerName === "Brook Lopez") {
    return pointsScored().home.players["Brook Lopez"].points;
  } else if (playerName === "Mason Plumlee") {
    return pointsScored().home.players["Mason Plumlee"].points;
  } else if (playerName === "Jason Terry") {
    return pointsScored().home.players["Jason Terry"].points;
  } else if (playerName === "Jeff Adrien") {
    return pointsScored().away.players["Jeff Adrien"].points;
  } else if (playerName === "Bismack Biyombo") {
    return pointsScored().away.players["Bismack Biyombo"].points;
  } else if (playerName === "DeSagna Diop") {
    return pointsScored().away.players["DeSagna Diop"].points;
  } else if (playerName === "Ben Gordon") {
    return pointsScored().away.players["Ben Gordon"].points;
  } else if (playerName === "Brendan Hayword") {
    return pointsScored().away.players["Brendan Hayword"].points;
  }
}

// A function that returns a player's shoe size based on their name
function shoeSize(playerName) {
  let sizeOfShoe = gameObject;
  if (playerName === "Alan Anderson") {
    return sizeOfShoe().home.players["Alan Anderson"].shoe;
  } else if (playerName === "Reggie Evens") {
    return sizeOfShoe().home.players["Reggie Evens"].shoe;
  } else if (playerName === "Brook Lopez") {
    return sizeOfShoe().home.players["Brook Lopez"].shoe;
  } else if (playerName === "Mason Plumlee") {
    return sizeOfShoe().home.players["Mason Plumlee"].shoe;
  } else if (playerName === "Jason Terry") {
    return sizeOfShoe().home.players["Jason Terry"].shoe;
  } else if (playerName === "Jeff Adrien") {
    return sizeOfShoe().away.players["Jeff Adrien"].shoe;
  } else if (playerName === "Bismack Biyombo") {
    return sizeOfShoe().away.players["Bismack Biyombo"].shoe;
  } else if (playerName === "DeSagna Diop") {
    return sizeOfShoe().away.players["DeSagna Diop"].shoe;
  } else if (playerName === "Ben Gordon") {
    return sizeOfShoe().away.players["Ben Gordon"].shoe;
  } else if (playerName === "Brendan Hayword") {
    return sizeOfShoe().away.players["Brendan Hayword"].shoe;
  }
}

// A function that returns an array of the team colors
function teamColors(teamName) {
  if (teamName === "Brooklyn Nets") {
    return gameObject().home.colors;
  } else if (teamName === "Charlotte Hornets") {
    return gameObject().away.colors;
  }
}

// A function that returns an array of both team names
function teamNames() {
  let team1 = gameObject().home.teamName;
  let team2 = gameObject().away.teamName;

  return [team1, team2];
}

// A function that returns an array of all player jersey numbers based on the team name
function playerNumbers(teamName) {
  if (teamName === "Brooklyn Nets") {
    let player1 = gameObject().home.players["Alan Anderson"].number;
    let player2 = gameObject().home.players["Reggie Evens"].number;
    let player3 = gameObject().home.players["Brook Lopez"].number;
    let player4 = gameObject().home.players["Mason Plumlee"].number;
    let player5 = gameObject().home.players["Jason Terry"].number;
    return [player1, player2, player3, player4, player5];
  } else if (teamName === "Charlotte Hornets") {
    let player1 = gameObject().away.players[
        'Jeff Adrien'
    ].number;
    let player2 = gameObject().away.players["Bismack Biyombo"].number;
    let player3 = gameObject().away.players["DeSagna Diop"].number;
    let player4 = gameObject().away.players["Ben Gordon"].number;
    let player5 = gameObject().away.players["Brendan Hayword"].number;
    return [player1, player2, player3, player4, player5];
  }
}

// A function that returns an object containing the stats of a player based on their name
function playerStats(playerName) {
    if (playerName === "Alan Anderson") {
    return gameObject().home.players["Alan Anderson"];
  } else if (playerName === "Reggie Evens") {
    return gameObject().home.players["Reggie Evens"];
  } else if (playerName === "Brook Lopez") {
    return gameObject().home.players["Brook Lopez"];
  } else if (playerName === "Mason Plumlee") {
    return gameObject().home.players["Mason Plumlee"];
  } else if (playerName === "Jason Terry") {
    return gameObject().home.players["Jason Terry"];
  } else if (playerName === "Jeff Adrien") {
    return gameObject().away.players["Jeff Adrien"];
  } else if (playerName === "Bismack Biyombo") {
    return gameObject().away.players["Bismack Biyombo"];
  } else if (playerName === "DeSagna Diop") {
    return gameObject().away.players["DeSagna Diop"];
  } else if (playerName === "Ben Gordon") {
    return gameObject().away.players["Ben Gordon"];
  } else if (playerName === "Brendan Hayword") {
    return gameObject().away.players["Brendan Hayword"];
  }
}

// A function that returns number of rebounds for the player with the largest shoe size
function bigShoeRebounds() {
    return gameObject().home.players["Mason Plumlee"].rebounds;
}