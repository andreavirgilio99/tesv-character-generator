const { getRandomNumber } = require("./get-random-number.func")
const { races } = require("../constants/races.const")
const { namesCollection } = require("../constants/names/names-collection.const")
const { classes } = require("../constants/classes.const")
const { insertSkills } = require("./insert-skills.func")
const { status } = require("../constants/status.const")
const { alignments } = require("../constants/alignments.const")
const { insertStandingStones } = require("./insert-standing-stones.func")
const { getBackstoryPrompt } = require("./get-backstory-prompt.func")
const { generateBackstory } = require("./generate-backstory.func")
const { mockBackstory } = require("../constants/mock-backstory.const")

async function generateCharacter() {
    const character = {}

    character.sex = getRandomNumber(0, 1) === 0 ? "Male" : "Female";
    character.race = races[getRandomNumber(0, races.length - 1)]

    const namePool = namesCollection[character.race.name][character.sex]

    character.name = namePool[getRandomNumber(0, namePool.length - 1)]
    character.status = status[getRandomNumber(0, status.length - 1)]

    const classWithPools = classes[getRandomNumber(0, classes.length - 1)];

    character.class = classWithPools.name
    character.skills = [];

    classWithPools.mustHaves.forEach(skill => {
        const skillParts = skill.split("|");
        character.skills.push(skillParts[getRandomNumber(0, skillParts.length - 1)])
    })

    character.standingStones = {}

    insertSkills(character.skills, classWithPools.skills, 70);
    insertStandingStones(character.standingStones, classWithPools.standingStones)

    character.alignment = alignments[getRandomNumber(0, alignments.length - 1)]

    const prompt = getBackstoryPrompt(character);
    //only in production
    character.backstory = await generateBackstory(prompt)

    //in dev
    /* await new Promise((resolve) => {
        setTimeout(() => {
            character.backstory = mockBackstory
            resolve()
        }, 4000);
    }) */

    return character;
}

module.exports = { generateCharacter }