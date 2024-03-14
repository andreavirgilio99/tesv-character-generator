const { getRandomNumber } = require("./get-random-number.func");

function insertStandingStones(charStandingStones, standingStonesPool) {
    charStandingStones.primary = standingStonesPool[getRandomNumber(0, standingStonesPool.length - 1)]
    charStandingStones.secondary = charStandingStones.primary;

    while (charStandingStones.secondary === charStandingStones.primary) {
        charStandingStones.secondary = standingStonesPool[getRandomNumber(0, standingStonesPool.length - 1)]
    }
}

module.exports = { insertStandingStones }