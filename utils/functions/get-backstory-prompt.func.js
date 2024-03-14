function getBackstoryPrompt(character) {
    const pronoun = character.sex === "Male" ? "he" : "she";

    let prompt = `Write the backstory of a TESV: Skyrim character, `
    prompt += `the character\'s name is ${character.name}, ${pronoun} is a ${character.alignment.name} type, ${pronoun} is a ${character.race.name} ${character.class}`
    prompt += `, how did ${pronoun} become that? did ${pronoun} grow as one or did ${pronoun} have a different life before that?`

    if (character.status !== "Mortal") {
        prompt += `${pronoun} is also a ${character.status}, how did ${pronoun} become one?`
    }

    prompt += ` Where does ${pronoun} come from?`
    prompt += ` Does ${pronoun} have a family? if so who and where are they?`
    prompt += ` How did ${pronoun} end up getting captured in the imperial ambush at the start of the game?`
    prompt += ` Does ${pronoun} support Ulfric's rebellion or does ${pronoun} support the Empire?`

    return prompt;
}

module.exports = { getBackstoryPrompt }